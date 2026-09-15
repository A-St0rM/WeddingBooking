/**
 * Domain terms keep their Danish spelling, per ADR-0001 and CONTEXT.md.
 * File and folder names are ASCII-folded (klargoering, not klargøring)
 * because æøå in paths cause trouble across tooling and platforms.
 *
 * This is what ticket 01 delivers. Pakker, priser, Salgsstatus and the derived
 * status arrive in later tickets and are deliberately absent here rather than
 * declared ahead of the API that serves them.
 */

export interface Booking {
  id: string;
  /** The couple as one name, as an accounting system holds it. Becomes a Kunde in ticket 04. */
  kundenavn: string | null;
  bryllupsdato: string | null;
  /** Lives in exactly one place. Every per-guest price will be derived from it. */
  gæsteantal: number | null;
  oprettet: string;
}

export interface OpretBooking {
  kundenavn: string | null;
  bryllupsdato: string | null;
  gæsteantal: number | null;
}
