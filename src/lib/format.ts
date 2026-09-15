const kroner = new Intl.NumberFormat('da-DK', {
  style: 'currency',
  currency: 'DKK',
  maximumFractionDigits: 0,
});

const dato = new Intl.DateTimeFormat('da-DK', { dateStyle: 'long' });

export const formatKroner = (beløb: number) => kroner.format(beløb);
export const formatDato = (iso: string) => dato.format(new Date(iso));
