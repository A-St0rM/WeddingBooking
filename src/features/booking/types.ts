/**
 * Domain terms keep their Danish spelling, per ADR-0001 and CONTEXT.md.
 * File and folder names are ASCII-folded (klargoering, not klargøring)
 * because æøå in paths cause trouble across tooling and platforms.
 */

export type Salgsstatus =
  | 'Forespørgsel'
  | 'FremvisningAftalt'
  | 'TilbudSendt'
  | 'Vundet'
  | 'Tabt'
  | 'Afbestilt';

/** The one word shown to staff. Derived by the API, never set by hand. */
export type VistStatus =
  | Salgsstatus
  | 'BetalingForfalden'
  | 'ReserveretUdenDækning'
  | 'UnderKlargøring'
  | 'KlarTilAfvikling'
  | 'Afviklet'
  | 'AfventerEfterfakturering';

export type Pristype = 'FastPris' | 'PrGæst';

export interface BookingLinje {
  id: string;
  beskrivelse: string;
  pristype: Pristype;
  enhedspris: number;
  antal: number;
  /** Calculated by the API. Never stored, never recalculated here. */
  total: number;
}

export interface Booking {
  id: string;
  kundeNavn: string;
  bryllupsdato: string;
  /** Lives in exactly one place. Every PrGæst line is priced from it. */
  gæsteantal: number;
  salgsstatus: Salgsstatus;
  vistStatus: VistStatus;
  linjer: BookingLinje[];
  total: number;
}
