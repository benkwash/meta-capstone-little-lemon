import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />
   },
   {
      path: '/homepage',
      element: <HomePage />
   },
   {
      path: 'booking',
      element: <BookingPage />
   }
]);

export default router;
