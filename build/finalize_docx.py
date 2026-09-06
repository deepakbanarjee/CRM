"""Open each .docx in LibreOffice via UNO, update the table of contents and fields,
save back as .docx, and export a PDF copy. Usage: finalize_docx.py file1.docx [file2 ...]"""
import os
import subprocess
import sys
import time
import tempfile
import uno
from com.sun.star.beans import PropertyValue

PORT = 2002


def prop(name, value):
    p = PropertyValue()
    p.Name = name
    p.Value = value
    return p


def start_office():
    profile = tempfile.mkdtemp(prefix="lo_uno_")
    env = os.environ.copy()
    env["SAL_USE_VCLPLUGIN"] = "svp"
    proc = subprocess.Popen([
        "soffice", f"-env:UserInstallation=file://{profile}", "--headless", "--norestore", "--nologo",
        f"--accept=socket,host=127.0.0.1,port={PORT};urp;StarOffice.ComponentContext",
    ], env=env, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    local = uno.getComponentContext()
    resolver = local.ServiceManager.createInstanceWithContext("com.sun.star.bridge.UnoUrlResolver", local)
    for _ in range(60):
        try:
            ctx = resolver.resolve(f"uno:socket,host=127.0.0.1,port={PORT};urp;StarOffice.ComponentContext")
            return proc, ctx
        except Exception:
            time.sleep(1)
    proc.kill()
    raise RuntimeError("LibreOffice did not start")


def main(files):
    proc, ctx = start_office()
    try:
        smgr = ctx.ServiceManager
        desktop = smgr.createInstanceWithContext("com.sun.star.frame.Desktop", ctx)
        for f in files:
            f = os.path.abspath(f)
            url = uno.systemPathToFileUrl(f)
            doc = desktop.loadComponentFromURL(url, "_blank", 0, (prop("Hidden", True),))
            try:
                # update indexes (TOC) twice: first fills entries, second fixes page numbers
                for _ in range(2):
                    idx = doc.getDocumentIndexes()
                    for i in range(idx.getCount()):
                        idx.getByIndex(i).update()
                    doc.getTextFields().refresh()
                    doc.refresh()
                doc.storeToURL(url, (prop("FilterName", "MS Word 2007 XML"), prop("Overwrite", True)))
                pdf = os.path.splitext(f)[0] + ".pdf"
                doc.storeToURL(uno.systemPathToFileUrl(pdf), (prop("FilterName", "writer_pdf_Export"), prop("Overwrite", True)))
                print("finalized", os.path.basename(f), "->", os.path.basename(pdf))
            finally:
                doc.close(True)
    finally:
        try:
            desktop.terminate()
        except Exception:
            pass
        time.sleep(1)
        proc.kill()


if __name__ == "__main__":
    main(sys.argv[1:])
