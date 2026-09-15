# 05: BookingLinjer, per-guest pricing, and changing the Gæsteantal

**What to build:** The heart of the whole project. A Booking is made of lines, and each line is either a fixed price or **priced per guest** — the menu and the place settings scale with the couple's headcount; the room hire does not.

The event manager changes the Gæsteantal in one place and every per-guest line reprices itself. Today that number is maintained by hand in three systems and they disagree. After this ticket there is one number.

No amount is ever stored. Line totals and the Booking total are calculated every time they are read, because a stored total is how 80 and 94 come to exist side by side.

**Blocked by:** 01

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] Lines can be added, edited and removed on a Booking
- [ ] Each line is either FastPris or PrGæst
- [ ] A per-guest line is priced from the Booking's Gæsteantal and ignores any quantity of its own
- [ ] Changing the Gæsteantal reprices every per-guest line and leaves fixed-price lines untouched
- [ ] No line total and no Booking total is written to the database
- [ ] The Booking page shows the breakdown line by line and the total
- [ ] Pricing is tested directly as a function, as a table of cases, not only through the API
