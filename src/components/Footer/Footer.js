import './Footer.css';
import restaurantImage from '../../assets/restaurant-1.jpg';
import { Row, Column } from '../SectionLayout';
import { colors } from '../../utils';
import FooterLinks from './FooterLinks';

const footerLinksDetails = [
   {
      title: 'Doormat Navigation',
      links: [
         { name: 'Home', link: 'home' },
         { name: 'About', link: 'about' },
         { name: 'Menu', link: 'menu' },
         { name: 'Reservations', link: 'reservations' },
         { name: 'Order Online', link: 'order-online' }
      ]
   },
   {
      title: 'Contact Us',
      links: [
         { name: 'Address: Accra', link: 'Accra', type: 'text' },
         { name: 'Phone: +233268462240', link: '+233268462240', type: 'phone' },
         {
            name: 'Email: little-lemon@gmail.com',
            link: 'little-lemon@gmail.com',
            type: 'email'
         }
      ]
   },
   {
      title: 'Social Media Links',
      links: [
         {
            name: 'Facebook',
            link: 'https://faceboook.com/benkwash',
            external: true
         },
         {
            name: 'Twitter',
            link: 'https://twitter.com/benkwash',
            external: true
         },
         {
            name: 'Instagram',
            link: 'https://instagram.com/benkwash',
            external: true
         },
         {
            name: 'Youtube',
            link: 'https://youtube.com/benkwash',
            external: true
         }
      ]
   }
];
const footerLinks = () =>
   footerLinksDetails.map((links, index) => (
      <Column key={`${index}-${links.title}`} className="l-col-2 m-col-2">
         <FooterLinks {...links} />
      </Column>
   ));
const Footer = () => {
   return (
      <footer>
         <Row backgroundColor={colors.secondaryLightOrange} extended={true}>
            <Column className="l-col-2 m-col-2">
               <img
                  src={restaurantImage}
                  alt="restaurant photo"
                  className="footer-image"
               />
            </Column>
            {footerLinks()}
         </Row>
      </footer>
   );
};

export default Footer;
