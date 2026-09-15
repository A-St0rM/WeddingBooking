# 09: Klargøring checklist

**What to build:** Every Booking gets a standard checklist when it is created, so nothing is forgotten because nobody remembered to add it. Items are grouped by area — Kontakt, Menu, Opdækning — and the chef only reads the part that is theirs.

An item is IkkeStartet, IGang or Færdig. "Ready" is **counted** from the items and never ticked separately, so it cannot claim a Booking is ready when it is not.

**Blocked by:** 01

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] A new Booking is created with the standard checklist already on it
- [ ] Items are grouped by Kategori and each group can be read on its own
- [ ] An item can be set to IkkeStartet, IGang or Færdig
- [ ] An item can be assigned to a Bruger
- [ ] Whether a Booking is ready is derived from its items and stored nowhere
- [ ] The checklist is usable on a phone — this is read and updated while standing in the hall
