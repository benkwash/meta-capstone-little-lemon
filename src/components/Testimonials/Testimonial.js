/* eslint-disable react/prop-types */
const Testimonial = ({ name, rating, review, picture }) => {
   return (
      <div className="rating">
         <h4>{rating}</h4>
         <div>
            <img alt={`photo of ${name}`} src={picture} />
            <h4>{name}</h4>
         </div>
         <p>{review}</p>
      </div>
   );
};

export default Testimonial;
