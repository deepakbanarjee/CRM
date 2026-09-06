module.exports = {
  outName: "18_What_We_Will_Do_In_Plain_Words.docx",
  toc: false,
  cover: false,
  compact: false,
  header: false,
  meta: {
    series: "YOUR BRIEF, POINT BY POINT",
    title: "What we will build, in plain words",
    subtitle: "Every point you asked for, what we will do about it, and where we suggest going a little further",
    shortTitle: "In plain words",
    classification: "Confidential",
  },
  body: `
This goes through your brief one point at a time, in the order you wrote it. For each point there are two short answers: what we will do, and what we suggest adding on top. We have kept the language deliberately plain. Nothing here needs a technical background to follow.

## The document assistant

### 1. Find specific information in our documents, with controlled access, not the open internet

**What we will do.** It searches only the documents you load into it. It never touches the internet. Before it searches, it checks who is asking, and a document you are not allowed to open is not even read while it looks for your answer.

**What we suggest adding.** Every answer comes back with the document name and the page number, so anyone can check it in seconds rather than taking it on trust.

### 2. Flag contradictions, where two documents say different things about the same thing

**What we will do.** When a document arrives, we pull every number, date and key term out of it into a table, a bit like a spreadsheet of facts, and we store the exact sentence each one came from. Then we compare across everything you have loaded. If the contract says one figure and the board memo says another, the system shows you both quotes side by side.

**What we suggest adding.** It should know the difference between a real disagreement and an old draft. If version one said twenty-four months and version two says thirty-six, that is a newer version, not a contradiction, and it should not waste your time flagging it.

### 3. Track missing information, where a decision needs something that has not been provided

**What we will do.** You tell us once what each kind of decision needs. For example, to approve a contract you might need the signed contract, a board minute, a budget line and a legal opinion. The system then shows you, for each decision, what is present, what is missing, and what is contradicted.

**What we suggest adding.** It should also catch documents that are mentioned but never sent. A contract that says "see Annex B" when nobody ever provided Annex B is a gap, and it is the kind of gap that is easy to miss until it matters.

### 4. Answer management questions in plain language, using only the loaded documents

**What we will do.** Ask a normal question, in English or Arabic, and get a normal answer back.

**What we suggest adding.** After it writes the answer, a second and separate check reads that answer back against the sources and deletes any sentence the documents do not actually support. If nothing survives that check, it tells you the answer is not in your documents instead of inventing one. This is the main thing that separates it from a chatbot, and it is worth insisting on.

## The relationship system

### 1. Three groups of relationships, with a GCC pipeline, tracked by stage and status

**What we will do.** A record for every company and every person, sorted into your three groups: investors, partners and counterparties, and customers and members. Each relationship sits at a stage, and the stages can be different for each group.

**What we suggest adding.** A GCC path that matches how these relationships actually move: introduction through an intermediary, first meeting, NDA, qualification, active discussion, term sheet or MoU, board or regulatory approval, then signed. Dormant should be a status you can apply at any stage and report on separately, rather than a dead end.

### 2. Follow-up scheduling and reminders

**What we will do.** Every follow-up has a date and an owner, and the system reminds the owner when it is due.

**What we suggest adding.** It should also surface what has gone quiet. Relationships nobody has touched in a while should reach management on their own, so nothing slips silently. All reminders go to your staff, never to the contact.

### 3. Human approval before anything is sent, with no fully automated outbound

**What we will do.** Nothing reaches an outside contact without a person approving it. One person drafts, a different person approves, and only then does it send, from your own mailbox, so replies land where they always did.

**What we suggest adding.** The rule should live in the database rather than only on the screen, so it cannot be clicked around. The person who wrote a message should not be able to approve their own. Every edit should be kept as a version, so you can always see what was changed and by whom.

### 4. Basic reporting: who has been contacted, what stage they are at, what is overdue

**What we will do.** Exactly that, on a dashboard you can read at a glance and export when you need to.

**What we suggest adding.** A permanent record of every question asked, answer given, approval made and message sent, in a form you could hand to an internal auditor or a regulator without preparing anything special.

## Your four questions

### 1. How would you build it, and with what?

Two products on one foundation. Each works on its own, but they share a single login, one list of people and companies, one document store, and one record of everything that happened. That way the investor named in a contract is the same record as the investor in your pipeline, and you never end up keeping two contact lists. The AI models sit behind a single internal door, which means we can change AI provider later without rebuilding anything.

### 2. How do we plug in our real data later, without you rebuilding it?

Everything that varies is a setting rather than code. A new field, a new stage, a new category, a new decision checklist: an administrator adds these in the screen. Contacts come in from a spreadsheet, with a preview that shows you what is wrong before anything is saved. Documents come from SharePoint, Google Drive or a mailbox. All the demo data is tagged separately, so a single action clears it when your real data arrives.

### 3. How long until we see something working?

- **Week 6.** Both systems standing up and usable on sample data.
- **Week 8 to 9.** The full demo: contradictions being caught, approvals working.
- **Week 9 to 15.** Pilot running on your real documents.
- **Week 20.** Live.

This assumes sample documents and system access reach us in the first two weeks. If it would help to see something sooner, we can put a clickable version on sample documents in front of you at around week 4.

### 4. What does it cost?

There are two separate costs, and they are easy to confuse.

- **The build.** A fixed price per stage, so you know the number before each stage starts and you can stop at the end of any of them.
- **The running cost.** The cloud and AI bills, contracted in your name and passed through at cost with nothing added by us. During the pilot this comes to a few hundred dollars a month.

After go-live there is an annual fee for keeping the system running and improving it. Every assumption behind these numbers is in a workbook we can walk through with you line by line.

## Three things worth remembering

- **You own everything from day one.** The code, the cloud accounts and the data are yours throughout, not licensed back to you.
- **It shows its work.** Every answer carries its sources, so anything can be checked in seconds instead of taken on trust.
- **Nothing goes out without a person.** Every message to an outside contact has a named human attached to it.
`,
};
