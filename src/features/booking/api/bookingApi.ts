import { api } from '@/lib/apiClient';
import type { Booking } from '@/features/booking/types';

export const hentBookinger = () => api<Booking[]>('/api/bookinger');

export const hentBooking = (id: string) => api<Booking>(`/api/bookinger/${id}`);

export const opdaterGæsteantal = (id: string, gæsteantal: number) =>
  api<Booking>(`/api/bookinger/${id}/gaesteantal`, {
    method: 'PUT',
    body: JSON.stringify({ gæsteantal }),
  });
