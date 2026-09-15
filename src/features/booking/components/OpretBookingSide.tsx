import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingerPaaDato, useOpretBooking } from '@/features/booking/hooks/useBookinger';
import { formatDato } from '@/lib/format';

/**
 * An enquiry is recorded while the event manager is still on the phone, so
 * nothing here is required. A couple who ring with a date but no firm guest
 * count still get written down.
 */
export function OpretBookingSide() {
  const navigate = useNavigate();
  const opret = useOpretBooking();

  const [kundenavn, setKundenavn] = useState('');
  const [bryllupsdato, setBryllupsdato] = useState('');
  const [gæsteantal, setGæsteantal] = useState('');

  const save = (event: React.FormEvent) => {
    event.preventDefault();
    opret.mutate(
      {
        kundenavn: kundenavn.trim() || null,
        bryllupsdato: bryllupsdato || null,
        gæsteantal: gæsteantal === '' ? null : Number(gæsteantal),
      },
      { onSuccess: () => navigate('/bookinger') },
    );
  };

  return (
    <form onSubmit={save} className="max-w-lg space-y-5">
      <h1 className="text-xl font-semibold">Ny booking</h1>

      <Field label="Kundenavn">
        <input
          type="text"
          value={kundenavn}
          onChange={(event) => setKundenavn(event.target.value)}
          placeholder="Anna Nielsen &amp; Mikkel Sørensen"
          className="w-full rounded-lg border border-stone-300 px-3 py-2"
        />
      </Field>

      <Field label="Bryllupsdato">
        <input
          type="date"
          value={bryllupsdato}
          onChange={(event) => setBryllupsdato(event.target.value)}
          className="w-full rounded-lg border border-stone-300 px-3 py-2"
        />
      </Field>

      <Field label="Gæsteantal">
        <input
          type="number"
          min={0}
          value={gæsteantal}
          onChange={(event) => setGæsteantal(event.target.value)}
          placeholder="Ved ikke endnu"
          className="w-full rounded-lg border border-stone-300 px-3 py-2"
        />
      </Field>

      <DatoAdvarsel bryllupsdato={bryllupsdato} />

      {opret.isError && (
        <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          Kunne ikke gemme bookingen.
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={opret.isPending}
          className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-50"
        >
          {opret.isPending ? 'Gemmer…' : 'Gem booking'}
        </button>
        <button
          type="button"
          onClick={() => navigate('/bookinger')}
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm"
        >
          Annullér
        </button>
      </div>
    </form>
  );
}

/**
 * Warns when a date already has a Booking — deliberately a warning, not a block:
 * the manor house does occasionally run two events on one day.
 *
 * Every outcome says something. Silence here would be read as "the date is free",
 * which is exactly the wrong thing to imply when the check failed or has not
 * finished.
 */
function DatoAdvarsel({ bryllupsdato }: { bryllupsdato: string }) {
  const { data, isPending, isError } = useBookingerPaaDato(bryllupsdato || null);

  if (!bryllupsdato) return null;

  if (isPending) {
    return <Besked tone="neutral">Tjekker om datoen er optaget…</Besked>;
  }

  if (isError) {
    return (
      <Besked tone="neutral">
        Kunne ikke tjekke, om datoen allerede er optaget. Gem endelig — men kontrollér det bagefter.
      </Besked>
    );
  }

  if (data.length === 0) {
    return <Besked tone="neutral">Datoen er fri.</Besked>;
  }

  return (
    <Besked tone="advarsel">
      Der ligger allerede {data.length === 1 ? 'en booking' : `${data.length} bookinger`} den{' '}
      {formatDato(bryllupsdato)}:{' '}
      <span className="font-medium">
        {data.map((booking) => booking.kundenavn ?? 'uden navn').join(', ')}
      </span>
      . Du kan godt gemme alligevel.
    </Besked>
  );
}

function Besked({ tone, children }: { tone: 'neutral' | 'advarsel'; children: React.ReactNode }) {
  const styles =
    tone === 'advarsel'
      ? 'border-amber-300 bg-amber-50 text-amber-900'
      : 'border-stone-200 bg-stone-50 text-stone-600';

  return <p className={`rounded-lg border p-3 text-sm ${styles}`}>{children}</p>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-stone-700">{label}</span>
      {children}
    </label>
  );
}
