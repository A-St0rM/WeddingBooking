import { useQuery } from '@tanstack/react-query';
import { hentBookinger } from '@/features/booking/api/bookingApi';

export function useBookinger() {
  return useQuery({
    queryKey: ['bookinger'],
    queryFn: hentBookinger,
  });
}
