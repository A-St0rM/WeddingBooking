# 07: Salgsstatus and its transitions

**What to build:** Where a sale has got to, moved forward deliberately by a person. Forespørgsel, then FremvisningAftalt, then TilbudSendt, then Vundet or Tabt. Afbestilt is reachable from anywhere.

The system never guesses that a couple has said yes. Someone says so.

The list still shows this raw stage; the single derived status arrives in ticket 10.

**Blocked by:** 01

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] A Booking's Salgsstatus can be moved forward from the Booking page
- [ ] Nothing advances the Salgsstatus automatically
- [ ] A Booking can be marked Afbestilt from any stage
- [ ] An Afbestilt Booking leaves the active list but keeps all its data
- [ ] The Booking list can be filtered by Salgsstatus
- [ ] Nothing is ever hard-deleted
