import logo from '../../assets/logo.svg';
import './Header.css';
import { Row, Column } from '../SectionLayout';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header>
         <Row>
            <Column>
               <div className="navigation">
                  <img src={logo} alt="little lemon logo" />
                  <nav>
                     <ul className="text-menu no-list-style">
                        <li>
                           <Link
                              to={'/homepage'}
                              className="color-secondary-dark"
                           >
                              HOME
                           </Link>
                        </li>
                        <li>
                           <Link to={'#about'} className="color-secondary-dark">
                              ABOUT
                           </Link>
                        </li>
                        <li>
                           <Link to={'#menu'} className="color-secondary-dark">
                              MENU
                           </Link>
                        </li>
                        <li>
                           <Link
                              to={'/booking'}
                              className="color-secondary-dark"
                           >
                              RESERVATIONS
                           </Link>
                        </li>
                        <li>
                           <Link
                              to={'#order-online'}
                              className="color-secondary-dark"
                           >
                              ORDER ONLINE
                           </Link>
                        </li>
                        <li>
                           <Link to={'#login'} className="color-secondary-dark">
                              LOGIN
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
            </Column>
         </Row>
      </header>
   );
};

export default Header;
