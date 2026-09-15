# Spec 0001 — Booking core

Status: ready-for-agent

Vocabulary per [CONTEXT.md](../../CONTEXT.md). Decisions per [docs/adr/](../../docs/adr/). Shape per [ARCHITECTURE.md](../../ARCHITECTURE.md).

## Problem Statement

The event manager at a manor house on Lolland sells and coordinates roughly every wedding the business runs, alone, by hand. When a couple books, he types the same information three times: once into e-conomic as a customer and a quote, once into a Word document he fills in by hand, and once — often months later, when the season quietens down — onto a Trello card.

The guest count changes constantly. Every time it does, he has to remember all three places and correct each one. Usually he corrects one or two. The result is that three systems disagree about how many people are coming to a wedding, and the number the kitchen cooks for is whichever one someone happened to look at.

There is no single place that answers "what did we agree with this couple, and where are we with them?" When a couple who booked eighteen months ago rings, he searches his mail. Colleagues cannot cover for him, because everything he knows is either in his inbox or in his head.

## Solution

One record per wedding — a **Booking** — that is the only place any of it is typed.

A Booking holds the **Kunde** (the couple as one commercial entity, with a **Kontaktperson** each), the date, the **Gæsteantal**, and the lines of what has been agreed. Lines are either fixed-price or **priced per guest**; nothing that can be calculated is stored. Changing the guest count from 80 to 94 reprices the Booking immediately, because there is only one number to change and everything else reads it.

Every Booking shows **one status**. That word is derived, not typed: it combines where the sale has got to, whether payments are overdue, and how far **Klargøring** has come, and shows whichever of those is most urgent. Staff never set it.

Each of the five employees sees the Booking through their role. The chef sees the date, the guest count, the menu and the allergies, and does not see what any of it costs.

This spec covers that core. It does not touch e-conomic, Trello, mail or the AI summary — those build on top of it, and each needs this to exist first.

## User Stories

### Creating and finding a Booking

1. As an event manager, I want to create a Booking from a couple's first enquiry with just their names, a desired date and a rough guest count, so that I can record an enquiry in seconds while still on the phone.
2. As an event manager, I want a Booking to be valid with only partial information, so that an enquiry is not blocked by details the couple has not decided yet.
3. As an event manager, I want to see every Booking for a given season on one screen, so that I can see how the year is filling up.
4. As an event manager, I want to see at a glance which dates are already taken, so that I do not promise the same Saturday twice.
5. As an event manager, I want to be warned — not blocked — when I create a Booking on a date that already has one, so that the rare double event is possible but never accidental.
6. As an event manager, I want to search Bookings by the couple's name, so that I can find a case when someone rings without giving a date.
7. As an event manager, I want to filter Bookings by status, so that I can see everything waiting on a quote without reading the whole list.
8. As an event manager, I want to sort Bookings by wedding date, so that the next thing to happen is at the top.
9. As an owner, I want to see all Bookings for next season with their guest counts and values, so that I can see what the year is worth without asking anyone.

### The Kunde and the people behind it

10. As an event manager, I want a Booking's Kunde to hold both partners as separate Kontaktpersoner, each with their own email and phone, so that I write to whichever of them actually answers.
11. As an event manager, I want to mark one Kontaktperson as primary, so that generated documents and drafts have an obvious default recipient.
12. As an event manager, I want the Kunde to have one name, address and set of payment terms, so that it maps cleanly onto what an accounting system can represent.
13. As an event manager, I want a Kunde to keep its history across Bookings, so that a couple returning for an anniversary is the same customer, not a stranger.
14. As an event manager, I want to record a different Betaler on a Booking when the couple's parents are paying, so that the invoice goes to whoever is actually liable.
15. As an event manager, I want the Betaler to default to the couple, so that the normal case costs me no thought.

### What is being sold, and what it costs

16. As an event manager, I want to apply a Pakke to a Booking and have its lines copied in, so that I do not rebuild the standard offer for every couple.
17. As an event manager, I want to edit, add and remove lines after applying a Pakke, so that a couple's changes do not force me outside the system.
18. As an event manager, I want each line to be either a fixed price or a price per guest, so that the menu reprices with the guest count and the room hire does not.
19. As an event manager, I want to change the Gæsteantal in one place and see every per-guest line reprice immediately, so that I stop maintaining the same number in three systems.
20. As an event manager, I want line totals and the Booking total to always be calculated and never stored, so that no stale total can ever disagree with the lines it came from.
21. As an event manager, I want to see the Booking total broken down by line, so that I can talk a couple through their quote on the phone.
22. As an owner, I want to define and edit the Pakker the business sells, so that a price change is made once and applies to every future Booking.
23. As an owner, I want changing a Pakke to leave existing Bookings untouched, so that a price rise never silently alters what a couple was already promised.
24. As an owner, I want to retire a Pakke without deleting it, so that old Bookings still make sense while it stops being offered.

### Payment schedule

25. As an event manager, I want the Reservationsgebyr and the Slutbetaling to be created automatically with due dates derived from the wedding date, so that the payment plan is never forgotten or miscalculated.
26. As an event manager, I want the Reservationsgebyr to be 33% of the agreed total and the Slutbetaling to be the remainder, so that the instalments always add up to the total no matter how the lines change.
27. As an event manager, I want the instalment amounts to follow changes to the Booking total, so that changing the guest count does not leave me invoicing the old figure.
28. As a bookkeeper, I want to see each instalment's due date on the Booking, so that I know what should be going out and when.

### The single status

29. As an event manager, I want each Booking to show exactly one status word, so that I can read a list of thirty Bookings and know where each one stands.
30. As an event manager, I want that status to be derived rather than set by hand, so that nobody has to remember to update it and it can never be wrong.
31. As an event manager, I want an overdue payment to override everything else in the status, so that the most urgent problem is the one I see.
32. As an event manager, I want to see which Bookings are **Reserveret uden dækning** — a held date with no signature and no money — so that I can see the risk the business is carrying two years out.
33. As an event manager, I want a Booking whose Klargøring is complete to read as **Klar til afvikling**, so that the kitchen and I agree on what ready means.
34. As an event manager, I want to move a Booking's Salgsstatus forward explicitly, so that the system never guesses that a couple has said yes.
35. As an event manager, I want to mark a Booking as Afbestilt, so that a cancelled wedding leaves the active list without its history being destroyed.

### Klargøring

36. As an event manager, I want a new Booking to get a standard Klargøring checklist, so that nothing is forgotten because someone forgot to add it.
37. As a chef, I want to mark a Klargøringspunkt as in progress or done, so that the event manager can see how far the kitchen has got without asking.
38. As a chef, I want Klargøringspunkter grouped by area — contact, menu, opdækning — so that I only read the part that is mine.
39. As an event producer, I want to be assigned a Klargøringspunkt, so that it is clear which of us is doing it.
40. As an event manager, I want "ready" to be counted from the checklist rather than ticked separately, so that it cannot claim a Booking is ready when it is not.

### History

41. As an event manager, I want to write a Note on a Booking after a phone call, so that what was said survives longer than my memory of it.
42. As an event manager, I want Notes stamped with who wrote them and when, so that I know whether I am reading my own note or a colleague's.
43. As an event manager, I want to read a Booking's Notes newest first, so that the last thing that happened is the first thing I see.
44. As an owner, I want to open any Booking and understand its history without asking the event manager, so that the business is not dependent on one person's recall.

### Roles

45. As a chef, I want to see the date, guest count, menu and allergies without seeing any prices, so that I have what I need and nothing I do not.
46. As a bookkeeper, I want to see every Booking's prices and instalments without being able to edit the menu, so that my access matches my job.
47. As an event producer, I want to edit opdækning and Klargøring, so that I can keep the plan for the day current.
48. As an owner, I want full access, so that I am never blocked by permissions in my own business.
49. As any employee, I want to log in on my phone, so that I can look a Booking up while standing in the hall setting tables.
50. As a developer, I want access control enforced in exactly one place in the API, so that there is one thing to reason about and one thing to defend at an exam.

## Implementation Decisions

**Modules.** A domain module holding the entities and two pure calculations — pricing and status derivation. A persistence module over Postgres. An API module exposing HTTP endpoints and enforcing access control. Integration ports are declared in this spec's scope only as empty interfaces with fake implementations; no real integrations are built here.

**Nothing derivable is persisted.** Line totals, the Booking total, instalment amounts, "klar til afvikling", and the displayed status are all computed on read. `Gæsteantal` exists once, on the Booking. This is the spec's central constraint and the reason the project exists — see [ADR-0005](../../docs/adr/0005-betalingsstatus-gemmes-aldrig-lokalt.md).

**Pricing.** Each `BookingLinje` carries a `Pristype` of `FastPris` or `PrGæst`. A fixed-price line is `Enhedspris × Antal`; a per-guest line is `Enhedspris × Booking.Gæsteantal` and ignores its own `Antal`. Applying a `Pakke` copies its `PakkeLinje`s into `BookingLinje`s **by value** — later edits to the Pakke never reach existing Bookings.

**Status derivation** is a pure function of (Salgsstatus, instalments and their payment state, Klargøring items, wedding date, whether the Aftalebekræftelse is signed, today's date). It returns one value, resolved in this precedence:

1. `Afbestilt` / `Tabt` → that value.
2. Any instalment overdue and unpaid → `BetalingForfalden`.
3. Wedding date in the past → `Afviklet`, or `AfventerEfterfakturering` if extras exist.
4. `Vundet` and all Klargøring done → `KlarTilAfvikling`; otherwise `UnderKlargøring`.
5. `Vundet`, unsigned, nothing paid → `ReserveretUdenDækning`.
6. Otherwise → the `Salgsstatus` itself.

Payment state is supplied to this function as an argument, never read from the database. In this spec the only implementation is a fake that reports every instalment as unknown, which makes rule 2 unreachable until the e-conomic work lands. The rule is still written and still tested — through the pure-function seam, which can supply payment states the API cannot yet produce.

**Instalments** are generated when a Booking's Salgsstatus first reaches `Vundet`: a `Reservationsgebyr` at 33% due six months before the wedding, and a `Slutbetaling` for the remainder due three months before. They store a *share*, not an amount, so they track changes to the Booking total. An `Efterfakturering` instalment is created only if extras are added after the Afvikling.

**Identity and auth.** Users authenticate against Supabase Auth; the API validates the token and resolves it to a `Bruger` with a `Rolle`. React never talks to Supabase or Postgres directly, and row-level security is not used — see [ADR-0002](../../docs/adr/0002-supabase-er-kun-database-og-login.md).

**Access control** is enforced in one place in the API, as a rule per (Rolle, resource, operation). Price and instalment fields are stripped from responses for `Kok` and `EventProducer` rather than being sent and hidden in the UI.

**Deletion.** Nothing is hard-deleted. Cancelling sets `Salgsstatus = Afbestilt`; retiring a Pakke sets `Aktiv = false`.

**Danish domain terms keep their Danish spelling in code**, per [ADR-0001](../../docs/adr/0001-sprogkonvention.md).

## Testing Decisions

**What makes a good test here.** A test describes something a user can observe: create a Booking through the API, change its guest count, assert the total the API returns. It never asserts on a repository call, a private method, or the shape of a row. If a test has to be rewritten because code moved between classes without any behaviour changing, it was testing the wrong thing.

**Prior art: none.** The repository is empty; this spec establishes the testing approach, and everything after it should follow the seams set here rather than inventing new ones.

**Primary seam — the HTTP API.** The application is started in-process and exercised through its real endpoints against a real Postgres instance, with fake integration adapters. Almost every user story above is verifiable at this seam, including access control, which is tested by calling the same endpoint as each role and asserting on what comes back.

**Narrow seam — the two pure calculations.** Pricing and status derivation are tested directly as functions. This exists because status derivation has six precedence rules crossed with payment and Klargøring states, and because rule 2 cannot be reached through the API until e-conomic exists. Both take their inputs as arguments and touch no database, so the tests are data tables rather than scenarios.

**No other seams.** In particular, no repository-level tests, no controller unit tests with mocked services, and no tests against the fake adapters themselves.

**The fakes are production code, not test scaffolding.** They are how the system runs for a demo without API credentials, and are selected by configuration.

**Cases worth naming explicitly:** changing the guest count reprices per-guest lines and leaves fixed-price lines alone; instalments always sum to the Booking total after any edit; editing a Pakke does not alter an existing Booking; each status precedence rule wins over every rule below it; a chef's response contains no price fields anywhere.

## Out of Scope

- **e-conomic** — customers, quotes, invoices, payment status. Ports are declared; nothing is implemented.
- **Trello** — no cards are written. One-way sync is specced separately, per [ADR-0006](../../docs/adr/0006-trello-synkronisering-er-envejs.md).
- **Mail** — no drafts are created, per [ADR-0004](../../docs/adr/0004-mail-som-udkast-underskrift-forbliver-manuel.md).
- **The Aftalebekræftelse document** — no generation. The Booking carries a "signed" flag that is set by hand here.
- **The AI summary** — Notes are captured so it has something to read later; nothing summarises them.
- **File upload and storage.**
- **Migrating existing Trello bookings through 2027.** They stay in Trello.
- **Julemarked and conferences.** Weddings only.

## Further Notes

**The one number.** If this spec delivers only one thing, it should be that `Gæsteantal` exists once and everything follows from it. Every other feature here is worth less than that, and a reviewer should push back on any change that stores a figure derivable from it.

**Rule 5 is the sleeper.** `ReserveretUdenDækning` surfaces dates held up to two years ahead with no signature and no money behind them. This is not in the client's brief — it came out of interrogating it, and the business does not currently know which dates these are. It is cheap to build and is the strongest single thing in this spec to defend at an oral exam.

**Six things are still unknown**, listed at the end of ARCHITECTURE.md. Only one blocks this spec: **the price list**, which decides whether Pakke and Varegruppe are genuinely two concepts or one wearing two names. This spec assumes two. If the manor house simply sells loose items with no package concept, `Pakke` collapses into a template and stories 16 and 22-24 shrink accordingly.

**Payment status is deliberately unreachable here.** Building the status function with payment as an argument, before any payment source exists, is what stops someone later "simplifying" it by caching payment state in the Bookings table — which would recreate the exact problem this system was built to remove.
