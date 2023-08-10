import logo from '../../assets/logo.svg';
import './Header.css';
import { Row, Column } from '../SectionLayout';

const Header = () => {
   return (
      <header>
         <Row>
            <Column>
               <div className="navigation">
                  <img src={logo} alt="little lemon logo" />
                  <nav>
                     <ul className="text-menu">
                        <li>
                           <a href="" className="color-secondary-dark">
                              HOME
                           </a>
                        </li>
                        <li>
                           <a href="" className="color-secondary-dark">
                              ABOUT
                           </a>
                        </li>
                        <li>
                           <a href="" className="color-secondary-dark">
                              MENU
                           </a>
                        </li>
                        <li>
                           <a href="" className="color-secondary-dark">
                              RESERVATIONS
                           </a>
                        </li>
                        <li>
                           <a href="" className="color-secondary-dark">
                              ORDER ONLINE
                           </a>
                        </li>
                        <li>
                           <a href="" className="color-secondary-dark">
                              LOGIN
                           </a>
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
