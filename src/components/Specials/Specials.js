import './Specials.css';
import { Row, Column } from '../SectionLayout/SectionLayout';
import { PrimaryButton } from '../Button/Button';
import Special from './Special';
import greekSaladPhoto from '../../assets/specials-greek-salad.jpg';
import bruchettaPhoto from '../../assets/specials-bruchetta.svg';
import glemonDessertPhoto from '../../assets/specials-lemon-dessert.jpg';

const specials = [
   {
      image: greekSaladPhoto,
      name: 'Greek Salad',
      price: '12.99',
      description:
         'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
   },
   {
      image: bruchettaPhoto,
      name: 'Bruchetta',
      price: '5.99',
      description:
         'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
   },
   {
      image: glemonDessertPhoto,
      name: 'Lemon Dessert',
      price: '12.99',
      description:
         'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
   }
];
const Specials = () => {
   const specialHeader = () => (
      <div className="specials-header-container">
         <h3 className="text-title color-secondary-dark">Specials</h3>
         <PrimaryButton>Order Menu</PrimaryButton>
      </div>
   );

   const allSpecials = () => (
      <div className="all-specials-container">
         {specials.map((special) => (
            <Special key={special.name} {...special} />
         ))}
      </div>
   );

   return (
      <section className="specials-container">
         <Row>
            <Column>{specialHeader()}</Column>
            <Column>{allSpecials()}</Column>
         </Row>
      </section>
   );
};

export default Specials;
