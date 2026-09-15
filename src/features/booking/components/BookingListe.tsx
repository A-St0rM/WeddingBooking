import { Link } from 'react-router-dom';
import { useBookinger } from '@/features/booking/hooks/useBookinger';
import { formatDato, formatGæsteantal } from '@/lib/format';

export function BookingListe() {
  const { data: bookinger, isPending, error } = useBookinger();

  return (
    <div className="space-y-4">
      {/* Header and action stay put whatever the query does: an unreachable API
          must not also strip the user of the way forward. */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold">Bookinger</h1>
        <Link
          to="/bookinger/ny"
          className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
        >
          Ny booking
        </Link>
      </div>

      {isPending && <p className="text-stone-500">Henter bookinger…</p>}

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          Kunne ikke hente bookinger. Er API'et startet?
        </p>
      )}

      {bookinger?.length === 0 && (
        <p className="rounded-lg border border-dashed border-stone-300 p-8 text-center text-stone-500">
          Ingen bookinger endnu.
        </p>
      )}

      {bookinger && bookinger.length > 0 && (
        <ul className="space-y-2">
          {bookinger.map((booking) => (
            <li key={booking.id} className="rounded-lg border border-stone-200 bg-white p-4">
              <p className="font-semibold">{booking.kundenavn ?? 'Uden navn'}</p>
              <p className="text-sm text-stone-600">
                {booking.bryllupsdato ? formatDato(booking.bryllupsdato) : 'Dato ikke aftalt'}
                {' · '}
                {formatGæsteantal(booking.gæsteantal)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
