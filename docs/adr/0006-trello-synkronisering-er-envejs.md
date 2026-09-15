# Trello synchronisation is one-way; the system owns everything

Trello stays in use alongside the new system — weddings are already booked into it through 2027, and the operational staff use the card as their source of information on the day. The brief asked us to decide whether changes made in Trello should flow back.

They do not. The system owns all data and writes it to Trello; Trello is a read-only mirror. An edit made directly on a card is overwritten at the next sync.

Two-way sync would need a dedicated Trello integration account so the system does not react to its own writes, plus a reconciliation sweep, because Trello's change notifications are delivered at-least-once, unordered, and are dropped after three failed retries. That is several days of work and the most likely source of inexplicable behaviour during a live demo. One-way also removes the need for the server to be publicly callable at all.

The cost is real and is a change in working practice, not a technical detail: staff must read in Trello and edit in the system. If that proves unworkable in practice, the migration path is to give Trello ownership of the Klargøring checkboxes only — never of shared fields.
