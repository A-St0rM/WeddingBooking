import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/app/layout/AppLayout';
import { BookingListe } from '@/features/booking/components/BookingListe';
import { OpretBookingSide } from '@/features/booking/components/OpretBookingSide';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/bookinger" replace /> },
      { path: 'bookinger', element: <BookingListe /> },
      { path: 'bookinger/ny', element: <OpretBookingSide /> },
    ],
  },
]);
