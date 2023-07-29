import logo from '../assets/logo.svg';

const Header = () => {
   return (
      <header>
         <img src={logo} alt="little lemon logo" />
         <nav>
            <ul>
               <li>
                  <a href="">HOME</a>
               </li>
               <li>
                  <a href="">ABOUT</a>
               </li>
               <li>
                  <a href="">MENU</a>
               </li>
               <li>
                  <a href="">RESERVATIONS</a>
               </li>
               <li>
                  <a href="">ORDER ONLINE</a>
               </li>
               <li>
                  <a href="">LOGIN</a>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
