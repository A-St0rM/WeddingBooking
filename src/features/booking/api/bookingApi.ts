import { api } from '@/lib/apiClient';
import type { Booking, OpretBooking } from '@/features/booking/types';

export const hentBookinger = () => api<Booking[]>('/api/bookinger');

export const hentBooking = (id: string) => api<Booking>(`/api/bookinger/${id}`);

/** Used to warn before two weddings land on the same Saturday. */
export const hentBookingerPaaDato = (bryllupsdato: string) =>
  api<Booking[]>(`/api/bookinger?bryllupsdato=${encodeURIComponent(bryllupsdato)}`);

export const opretBooking = (booking: OpretBooking) =>
  api<Booking>('/api/bookinger', {
    method: 'POST',
    body: JSON.stringify(booking),
  });
