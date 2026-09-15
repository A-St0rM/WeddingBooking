# 01: Walking skeleton — create and list a Booking

**What to build:** The event manager records an enquiry — the couple's names, a wedding date, a guest count — and sees it appear in a list of Bookings. Nothing more. This is the tracer bullet: when it works, the whole pipe is proven end to end, from a real database through a real endpoint to a real page.

A Booking must be valid with partial information. A couple who ring with a date but no firm guest count still get recorded.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] A Booking can be created from the browser with the couple's names, a wedding date and a guest count
- [ ] A Booking can be created with only some of those filled in; nothing is rejected for being incomplete
- [ ] The list shows every Booking with name, date and guest count, soonest wedding first
- [ ] Creating a Booking on a date that already has one is allowed, but the user is warned before saving
- [ ] Data survives a restart — a real migration is committed, not a database created by hand
- [ ] An integration test boots the real application and creates then reads a Booking through the real endpoints
- [ ] The page reads from the API; no mock or hard-coded data remains anywhere in the frontend
