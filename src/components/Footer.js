import restaurantImage from '../assets/restaurant-1.jpg';
const Footer = () => {
   return (
      <footer>
         <img src={restaurantImage} alt="restaurant photo" />
         <div>
            <h3>Doormat Navigation</h3>
            <ul>
               <li>
                  <a href="home">Home</a>
               </li>
               <li>
                  <a href="about">About</a>
               </li>
               <li>
                  <a href="menu">Menu</a>
               </li>
               <li>
                  <a href="reservations">Reservations</a>
               </li>
               <li>
                  <a href="order">Order Online</a>
               </li>
               <li>
                  <a href="login">Login</a>
               </li>
            </ul>
         </div>
         <div>
            <h3>Contact</h3>
            <ul>
               <li>
                  <a href="address">Address</a>
               </li>
               <li>
                  <a href="phone-number">Phone Number</a>
               </li>
               <li>
                  <a href="email">Email</a>
               </li>
            </ul>
         </div>
         <div>
            <h3>Social Media Links</h3>
            <ul>
               <li>
                  <a href="facebook">Facebook</a>
               </li>
               <li>
                  <a href="twitter">Twitter</a>
               </li>
               <li>
                  <a href="instagram">Instagram</a>
               </li>
               <li>
                  <a href="youtube">Youtube</a>
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
