# 12: Role-based field visibility — the chef sees no prices

**What to build:** The chef and the event producer see the date, the guest count, the menu and the allergies. They do not see what any of it costs. The bookkeeper sees every price and instalment but cannot edit a menu.

Price and instalment fields are **stripped from the response**, not sent and hidden in the interface. Hiding them in the frontend is not access control; it is a rendering choice that anyone can undo.

In an organisation of five people who share an office, prices are the only genuine secret, and they are withheld from exactly two roles. If it turns out everyone may see everything, that is worth knowing — say so rather than building a model that protects nothing.

**Blocked by:** 03, 05

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] A kok's response to any Booking endpoint contains no price or instalment field anywhere in it
- [ ] The same holds for an event producer
- [ ] A bogholder sees all prices and instalments but cannot edit menu or Klargøring
- [ ] An event manager and an ejer are unaffected
- [ ] Every rule is tested by calling the same endpoint as each role and asserting on what comes back
- [ ] The frontend degrades cleanly when fields are absent, rather than showing empty price labels
