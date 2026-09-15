# 10: The single derived status

**What to build:** Staff see one word per Booking. It is computed on read from three independent things — the sales stage, the instalments and their payment state, and how far Klargøring has got — and shows whichever is most urgent.

The precedence, most urgent first:

1. Afbestilt or Tabt → that, and stop
2. Any instalment overdue and unpaid → **BetalingForfalden**
3. Wedding date passed → **Afviklet**, or **AfventerEfterfakturering** if extras exist
4. Vundet and all Klargøring done → **KlarTilAfvikling**, otherwise **UnderKlargøring**
5. Vundet, unsigned, nothing paid → **ReserveretUdenDækning**
6. Otherwise → the Salgsstatus itself

Rule 5 is worth building carefully. A date can be held for two years with no signature and no money behind it, and nobody at the manor house can currently see which dates those are.

Payment state comes in as an **argument**, never read from the database. That is what makes rule 2 testable before e-conomic exists — and what stops anyone later "simplifying" this by caching payment state in the Bookings table.

**Blocked by:** 07, 08, 09

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] All six rules are implemented, and each wins over every rule below it — one test per rule
- [ ] The derivation is a pure function taking payment state as an argument
- [ ] Rule 2 is tested with supplied payment states, which the API cannot yet produce
- [ ] The Booking list and the Booking page show the derived word in place of the raw Salgsstatus
- [ ] The list can be filtered by it
- [ ] Bookings that are Reserveret uden dækning can be found in one action
- [ ] The derived status is stored nowhere
