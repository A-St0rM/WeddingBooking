import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  hentBookinger,
  hentBookingerPaaDato,
  opretBooking,
} from '@/features/booking/api/bookingApi';

export function useBookinger() {
  return useQuery({ queryKey: ['bookinger'], queryFn: hentBookinger });
}

/**
 * Looks for Bookings already on a date. Deliberately a warning, not a block:
 * the manor house does occasionally run two events on one day, and the system
 * should not decide that for them.
 */
export function useBookingerPaaDato(bryllupsdato: string | null) {
  return useQuery({
    queryKey: ['bookinger', 'dato', bryllupsdato],
    queryFn: () => hentBookingerPaaDato(bryllupsdato!),
    enabled: Boolean(bryllupsdato),
  });
}

export function useOpretBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: opretBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['bookinger'] }),
  });
}
