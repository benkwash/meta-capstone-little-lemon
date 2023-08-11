import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import router from './routes';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <main>{router}</main>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
