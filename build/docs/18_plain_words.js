module.exports = {
  outName: "18_What_We_Will_Do_In_Plain_Words.docx",
  toc: false,
  cover: false,
  compact: false,
  header: false,
  meta: {
    series: "YOUR BRIEF, POINT BY POINT",
    title: "What we will build, in plain words",
    subtitle: "Every point you asked for, what we will do about it, what we suggest adding, and what we still need to know",
    shortTitle: "In plain words",
    classification: "Confidential",
  },
  body: `
This goes through your brief one point at a time, in the order you wrote it. For each point there are three short parts: what we will do, what we suggest adding on top, and what we would still need to know before we can be precise about it. We have kept the language deliberately plain. Nothing here needs a technical background to follow.

We have had to make some assumptions to get this far. Rather than hide them, we have turned each one into a question. The general questions come first, because they affect everything else.

## The general questions

- Which countries and entities are in scope for the first release, and does that include the GCC entity from the start or later?
- Which languages appear in your documents and your contact records, and roughly what share is each?
- Who will be our day-to-day contact for decisions, and who gives final sign-off?
- Is anything driving the timing, such as a board cycle, an audit, or the new market launch itself?
- Are there security or compliance standards we must meet, or an audit this will need to pass?

## The document assistant

### 1. Find specific information in our documents, with controlled access, not the open internet

**What we will do.** It searches only the documents you load into it. It never touches the internet. Before it searches, it checks who is asking, and a document you are not allowed to open is not even read while it looks for your answer.

**What we suggest adding.** Every answer comes back with the document name and the page number, so anyone can check it in seconds rather than taking it on trust.

**What we would need to know.**

- Roughly how many documents are we talking about, and where do they live today?
- How much of that is scanned paper rather than digital files?
- Should access follow your existing folder permissions, or would you rather set it fresh?

### 2. Flag contradictions, where two documents say different things about the same thing

**What we will do.** When a document arrives, we pull every number, date and key term out of it into a table, a bit like a spreadsheet of facts, and we store the exact sentence each one came from. Then we compare across everything you have loaded. If the contract says one figure and the board memo says another, the system shows you both quotes side by side.

**What we suggest adding.** It should know the difference between a real disagreement and an old draft. If version one said twenty-four months and version two says thirty-six, that is a newer version, not a contradiction, and it should not waste your time flagging it.

**What we would need to know.**

- Do you keep old versions alongside final ones, and is there a naming pattern that tells them apart?
- When two documents disagree, who decides which one is right, and does that change by document type?

### 3. Track missing information, where a decision needs something that has not been provided

**What we will do.** You tell us once what each kind of decision needs. For example, to approve a contract you might need the signed contract, a board minute, a budget line and a legal opinion. The system then shows you, for each decision, what is present, what is missing, and what is contradicted.

**What we suggest adding.** It should also catch documents that are mentioned but never sent. A contract that says "see Annex B" when nobody ever provided Annex B is a gap, and it is the kind of gap that is easy to miss until it matters.

**What we would need to know.**

- Which decisions would you want tracked first? Five to ten is enough to start.
- Is there an existing approval checklist we should follow, or would we be writing it with you?

### 4. Answer management questions in plain language, using only the loaded documents

**What we will do.** Ask a normal question in your own words and get a normal answer back. The system works across the languages your documents are actually written in.

**What we suggest adding.** After it writes the answer, a second and separate check reads that answer back against the sources and deletes any sentence the documents do not actually support. If nothing survives that check, it tells you the answer is not in your documents instead of inventing one. This is the main thing that separates it from a chatbot, and it is worth insisting on.

**What we would need to know.**

- Who will be asking the questions, and roughly how many people?
- Do they need answers in more than one language, and which ones?

## The relationship system

### 1. Three groups of relationships, with a GCC pipeline, tracked by stage and status

**What we will do.** A record for every company and every person, sorted into your three groups: investors, partners and counterparties, and customers and members. Each relationship sits at a stage, and the stages can be different for each group.

**What we suggest adding.** A GCC path that matches how these relationships actually move: introduction through an intermediary, first meeting, NDA, qualification, active discussion, term sheet or MoU, board or regulatory approval, then signed. Dormant should be a status you can apply at any stage and report on separately, rather than a dead end.

**What we would need to know.**

- What stages do your people actually use today for each group?
- Is there an existing CRM or spreadsheet to bring across, and roughly how many records?
- Is the GCC a market you are entering, and does a relationship there move differently from how it moves in your existing markets?

### 2. Follow-up scheduling and reminders

**What we will do.** Every follow-up has a date and an owner, and the system reminds the owner when it is due.

**What we suggest adding.** It should also surface what has gone quiet. Relationships nobody has touched in a while should reach management on their own, so nothing slips silently. All reminders go to your staff, never to the contact.

**What we would need to know.**

- After how long without contact should a relationship be flagged, and does that differ by group?
- Should reminders go to the owner only, or to their manager as well?
- Do your teams work across time zones we should take into account?

### 3. Human approval before anything is sent, with no fully automated outbound

**What we will do.** Nothing reaches an outside contact without a person approving it. One person drafts, a different person approves, and only then does it send, from your own mailbox, so replies land where they always did.

**What we suggest adding.** The rule should live in the database rather than only on the screen, so it cannot be clicked around. The person who wrote a message should not be able to approve their own. Every edit should be kept as a version, so you can always see what was changed and by whom.

**What we would need to know.**

- Who approves outreach for each of the three groups?
- Are there recipients who should need a second, more senior approval?
- Which channels do you actually use: email only, or messaging apps as well?

### 4. Basic reporting: who has been contacted, what stage they are at, what is overdue

**What we will do.** Exactly that, on a dashboard you can read at a glance and export when you need to.

**What we suggest adding.** A permanent record of every question asked, answer given, approval made and message sent, in a form you could hand to an internal auditor or a regulator without preparing anything special.

**What we would need to know.**

- Which three reports would you look at most often?
- Does anyone outside the immediate team need them, such as the board, compliance or auditors?

## Your four questions

### 1. How would you build it, and with what?

Two products on one foundation. Each works on its own, but they share a single login, one list of people and companies, one document store, and one record of everything that happened. That way the investor named in a contract is the same record as the investor in your pipeline, and you never end up keeping two contact lists. The AI models sit behind a single internal door, which means we can change AI provider later without rebuilding anything.

**What we would need to know.**

- Which cloud provider do you already use, and in which region?
- What do your staff sign in with today?
- Are there IT standards or an approved supplier list we need to work within?

### 2. How do we plug in our real data later, without you rebuilding it?

Everything that varies is a setting rather than code. A new field, a new stage, a new category, a new decision checklist: an administrator adds these in the screen. Contacts come in from a spreadsheet, with a preview that shows you what is wrong before anything is saved. Documents come from your existing document store or a mailbox. All the demo data is tagged separately, so a single action clears it when your real data arrives.

**What we would need to know.**

- Which existing systems does this need to work alongside?
- Who on your side would own the day-to-day settings once it is live?

### 3. How long until we see something working?

- **Week 6.** Both systems standing up and usable on sample data.
- **Week 8 to 9.** The full demo: contradictions being caught, approvals working.
- **Week 9 to 15.** Pilot running on your real documents.

We would rather not put a date on go-live until we have the answers below. The three milestones above we are comfortable with; the last step depends on things we cannot see yet.

This assumes sample documents and system access reach us in the first two weeks. If it would help to see something sooner, we can put a clickable version on sample documents in front of you at around week 4.

**What we would need to know.**

- When would you like this live, and what is driving that date?
- Who approves access to your cloud and email systems, and how long does that normally take with you?
- Are there periods we should plan around?

### 4. What does it cost?

There are two separate costs, and they are easy to confuse.

- **The build.** A fixed price per stage, so you know the number before each stage starts and you can stop at the end of any of them.
- **The running cost.** The cloud and AI bills, contracted in your name and passed through at cost with nothing added by us. During the pilot this comes to a few hundred dollars a month.

After go-live there is an annual fee for keeping the system running and improving it.

**What we would need to know.**

- Is there a budget range or an approval threshold we should design to?
- Would you rather pay stage by stage, or as an annual subscription?

## Three things worth remembering

- **You own everything from day one.** The code, the cloud accounts and the data are yours throughout, not licensed back to you.
- **It shows its work.** Every answer carries its sources, so anything can be checked in seconds instead of taken on trust.
- **Nothing goes out without a person.** Every message to an outside contact has a named human attached to it.
`,
};
