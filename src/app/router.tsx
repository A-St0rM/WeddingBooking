import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/app/layout/AppLayout';
import { BookingListe } from '@/features/booking/components/BookingListe';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/bookinger" replace /> },
      { path: 'bookinger', element: <BookingListe /> },
    ],
  },
]);
