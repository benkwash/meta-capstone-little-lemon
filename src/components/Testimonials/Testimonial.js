/* eslint-disable react/prop-types */
import './Testimonial.css';
import userAvatar from '../../assets/icon-user-avatar.png';

const Testimonial = ({ name, rating, review, picture }) => {
   return (
      <div className="testimonial">
         <div className="bg-color-secondary-white">
            <h3 className="text-card-title color-secondary-orange">
               Rating: {rating}
            </h3>
            <div>
               <img alt={`photo of ${name}`} src={picture || userAvatar} />
               <h4 className="text-highlight color-secondary-dark">{name}</h4>
            </div>
            <p className="text-paragraph color-secondary-dark">{review}</p>
         </div>
      </div>
   );
};

export default Testimonial;
