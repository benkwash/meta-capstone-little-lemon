import './Testimonials.css';
import Testimonial from './Testimonial';
import { Row, Column } from '../SectionLayout/SectionLayout';
import { colors } from '../../utils';

const customerTestimonials = [
   {
      name: 'John Mensah',
      rating: '4.5/5',
      review: 'This food was delicious. I really enjoyed it.',
      picture: ''
   },
   {
      name: 'Benjamin Kwashie',
      rating: '2.0/5',
      review: `Food was crap. Wouldn't recommend it to anybody, seriously.`,
      picture: ''
   },
   {
      name: 'Peter Stephenson',
      rating: '5.0/5',
      review: 'Food was perfect. I give it a 10/10.',
      picture: ''
   },
   {
      name: 'Richard Nartey Ranking',
      rating: '3.7/5',
      review: 'Not bad.',
      picture: ''
   }
];
const Testimonials = () => {
   const testiminals = () =>
      customerTestimonials.map((testimonial, index) => (
         <Column
            className="l-col-2 m-col-4"
            key={`${index}-${testimonial.name}`}
         >
            <Testimonial {...testimonial} />
         </Column>
      ));

   return (
      <section className="testimonials-conatiner">
         <Row backgroundColor={colors.primaryGreen} extended={true}>
            <Column>
               <h2 className="text-center text-sub-title color-primary-yellow">
                  Testimonials
               </h2>
            </Column>
            {testiminals()}
         </Row>
      </section>
   );
};
export default Testimonials;
