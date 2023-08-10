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
      review: 'This food was delicious. I really enjoyed it.',
      picture: ''
   },
   {
      name: 'Peter Stephenson',
      rating: '5.0/5',
      review: 'This food was delicious. I really enjoyed it.',
      picture: ''
   },
   {
      name: 'Richard Nartey Ranking',
      rating: '3.7/5',
      review: 'This food was delicious. I really enjoyed it.',
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
      <div>
         <Row backgroundColor={colors.primaryGreen} extended={true}>
            <Column>
               <h3 className="text-center">Testimonials</h3>
            </Column>
            {testiminals()}
         </Row>
      </div>
   );
};
export default Testimonials;
