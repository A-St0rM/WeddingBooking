# 08: Betalingsplan — Rater generated when a Booking is won

**What to build:** When a Booking reaches Vundet, its payment plan appears on its own: the **Reservationsgebyr** at 33% of the agreed total, due six months before the wedding, and the **Slutbetaling** for the remainder, due three months before. Paying the Reservationsgebyr is what secures the date.

Each Rate stores a **share, not an amount**, so the instalments follow the Booking total. If the guest count changes, the amounts change with it and still add up.

This ticket also introduces the payment-status port as an interface with a fake that reports every instalment as unknown. No real e-conomic call is made here, and no payment status is ever written to our database (ADR-0005).

**Blocked by:** 05, 07

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] Reaching Vundet creates both Rater with due dates derived from the wedding date
- [ ] The Reservationsgebyr is 33% and the Slutbetaling is the remainder
- [ ] Rater store a share, never a fixed amount
- [ ] Changing the Booking total changes the instalment amounts, and they always sum to the total — covered by a test
- [ ] An Efterfakturering instalment is created only when extras are added after the Afvikling
- [ ] The payment-status port exists with a fake reporting unknown; no payment status is persisted anywhere
- [ ] The Booking page shows each instalment with its amount and due date
