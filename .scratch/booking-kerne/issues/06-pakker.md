# 06: Pakker — define, apply, retire

**What to build:** The owners define the Pakker the business sells, so a price change is made once rather than rebuilt for every couple. The event manager applies a Pakke to a Booking and its lines are copied in, then edits them freely for that couple.

The copy is **by value**. Editing a Pakke later must never reach a Booking that already exists — a price rise cannot silently alter what a couple was already promised.

**Blocked by:** 05

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] An owner can create a Pakke with lines, each fixed-price or per-guest
- [ ] An owner can edit a Pakke's lines and prices
- [ ] Applying a Pakke to a Booking copies its lines onto that Booking
- [ ] Lines copied onto a Booking can then be edited without affecting the Pakke
- [ ] Editing a Pakke leaves every existing Booking exactly as it was — covered by a test
- [ ] A Pakke can be retired: it stops being offered, and Bookings that used it are unaffected
