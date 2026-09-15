const langDato = new Intl.DateTimeFormat('da-DK', { dateStyle: 'long' });

export const formatDato = (isoDato: string) => langDato.format(new Date(isoDato));

export const formatGæsteantal = (antal: number | null) =>
  antal === null ? 'gæsteantal ikke oplyst' : `${antal} gæster`;
