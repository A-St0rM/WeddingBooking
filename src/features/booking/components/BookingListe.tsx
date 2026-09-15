import { useBookinger } from '@/features/booking/hooks/useBookinger';
import { formatDato, formatKroner } from '@/lib/format';

export function BookingListe() {
  const { data, isPending, error } = useBookinger();

  if (isPending) return <p className="text-stone-500">Henter bookinger…</p>;
  if (error) return <p className="text-red-700">Kunne ikke hente bookinger.</p>;

  return (
    <ul className="space-y-2">
      {data.map((booking) => (
        <li key={booking.id} className="rounded-lg border border-stone-200 bg-white p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-semibold">{booking.kundeNavn}</span>
            <span className="text-sm text-stone-500">{booking.vistStatus}</span>
          </div>
          <p className="text-sm text-stone-600">
            {formatDato(booking.bryllupsdato)} · {booking.gæsteantal} gæster ·{' '}
            {formatKroner(booking.total)}
          </p>
        </li>
      ))}
    </ul>
  );
}
