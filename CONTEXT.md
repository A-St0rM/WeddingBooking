# Wedding Booking

The domain of booking, selling and preparing weddings at a Danish manor house (*et gods*) on Lolland. Weddings are the core business: ~80-120 guests, season May-June and August-September, closed in July. Five employees; the sales and coordination process is today handled manually by a single event manager.

Per [ADR-0001](./docs/adr/0001-sprogkonvention.md), Danish domain terms are kept in Danish. The headword is the canonical term; the code identifier follows in backticks where it differs.

## Language

### The case

**Booking** (`Booking`):
One wedding, from first enquiry to final invoice. The aggregate everything else hangs off: one date, one couple, one set of agreed content.
_Avoid_: Sag, Event, Kort, Case

**Forespørgsel** (`Forespørgsel`):
An initial enquiry from a couple — names, desired date, guest count — arriving by mail or phone. Becomes a Booking immediately; it is a stage of a Booking, not a separate record.
_Avoid_: Lead, Enquiry, Inquiry

**Fremvisning** (`Fremvisning`):
A scheduled on-site viewing where the couple sees the venue before deciding. Optional — some couples book a date without one.
_Avoid_: Visning, Showing, Viewing, Site visit

**Afvikling** (`Afvikling`):
The running of the wedding on the day itself, by the operational staff (chef, event producer). Distinct from the sales process that precedes it. Not "execution" — no faithful English equivalent, so the Danish term stands.
_Avoid_: Execution, Delivery, The event

### The people

**Brudepar** (`Brudepar`):
The couple getting married: two people, each with their own name, email and phone.
_Avoid_: Par, Couple, Bride and groom

**Kunde** (`Kunde`):
The Brudepar treated as one commercial entity — one name ("Anna Nielsen & Mikkel Sørensen"), one address, one set of payment terms. This is what is created in e-conomic, which cannot represent two people. A Kunde outlives its Bookings, so history follows the couple rather than the wedding.
_Avoid_: Client, Account, Debitor

**Kontaktperson** (`Kontaktperson`):
One of the two individuals behind a Kunde, each with their own email and phone. A Kunde normally has two.
_Avoid_: Contact, Person

**Betaler** (`Betaler`):
Whoever is liable for payment on a Booking. Defaults to the Kunde, but can be set to someone else — parents sometimes pay.
_Avoid_: Payer, Debtor, Invoice recipient

### What is sold and prepared

**Aftalebekræftelse** (`Aftalebekræftelse`):
The document stating what has been agreed for one Booking — the couple's details, the date, the guest count, and the agreed content. Generated from Booking data, signed by the couple. Not merely a "confirmation": it is the agreement itself.
_Avoid_: Kontrakt, Aftale, Contract, Confirmation

**Efterfakturering** (`Efterfakturering`):
Invoicing that happens after the Afvikling, covering extras the couple added on the night itself.
_Avoid_: Slutfaktura, Extra billing, Post-invoicing

**Klargøring** (`Klargøring`):
Getting a Booking ready for its Afvikling — menu decided, allergies recorded, table settings planned, contact details confirmed. Tracked today as green/half-green fields on a Trello card. A Booking is *klar til afvikling* when every item is done; this is derived from the items, never set by hand.
_Avoid_: Forberedelse, Preparation, Readiness

### Money

**Reservationsgebyr** (`Reservationsgebyr`):
The first instalment: 33% of the agreed total, paid roughly six months before the wedding. Paying it is what secures the date. Not a fee on top — it is part of the total.
_Avoid_: Depositum, Deposit, Booking fee

**Slutbetaling** (`Slutbetaling`):
The remaining balance, due three months before the wedding. The last payment before the Afvikling.
_Avoid_: Restbetaling, Final invoice, Balance

**Reserveret uden dækning**:
A Booking whose date is held but which has neither a signed Aftalebekræftelse nor any payment — because both fall due only six months before. Bookings are taken up to two years ahead, so a date can sit in this state for a long time, held by nothing but trust. Not a status the staff set; a condition worth being able to see.
