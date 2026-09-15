# 04: Kunde with two Kontaktpersoner and a Betaler

**What to build:** A Booking belongs to a Kunde — the couple as one commercial entity, with one name and one address, because that is what an accounting system can represent. Behind it sit two Kontaktpersoner, each with their own email and phone, because the event manager writes to whichever of them actually answers.

The Betaler defaults to the Kunde but can be set to someone else; parents sometimes pay. A Kunde outlives its Bookings, so a couple returning years later is the same customer, not a stranger.

**Blocked by:** 01

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] A Booking has a Kunde with one name, address, postcode and town
- [ ] A Kunde holds two Kontaktpersoner, each with their own name, email and phone
- [ ] One Kontaktperson is marked primary and is the default recipient
- [ ] The Betaler defaults to the Kunde and can be changed to another party
- [ ] One Kunde can hold several Bookings, and its earlier Bookings remain visible
- [ ] Bookings can be searched by the couple's name
