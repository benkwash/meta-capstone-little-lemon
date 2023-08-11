import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('../pages/Homepage'));
const BookingPage = lazy(() => import('../pages/BookingPage'));

const router = (
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
   </Routes>
);

export default router;
