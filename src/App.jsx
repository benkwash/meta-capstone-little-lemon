import './App.css';
import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import { RouterProvider, Outlet } from 'react-router-dom';
import router from './routes';

function App() {
   return (
      <RouterProvider router={router}>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </RouterProvider>
   );
}

export default App;
