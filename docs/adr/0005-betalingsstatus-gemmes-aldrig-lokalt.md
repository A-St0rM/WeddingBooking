# One status is shown, but payment status is never stored

The UI shows a Booking as being in exactly one state — one word on the card, one column in the overview — because that is what the staff want and how they think. Underneath, that word is **derived**, not stored.

Three things feed it. The sales stage (enquiry → viewing → quote sent → won/cancelled) is stored, because it is ours and nothing else knows it. Payment status is **read live from e-conomic on every request and never written to our database**. Klargøring is counted from its own checklist items.

Storing a copy of payment status would be the easy thing and would recreate the exact disease this project exists to cure: two systems both claiming what a couple has paid, drifting apart, with staff learning not to trust either. e-conomic is the accounting system; it is right about money by definition. The cost is a network call on pages that show payment state, mitigated by short-lived caching — never by persistence.
