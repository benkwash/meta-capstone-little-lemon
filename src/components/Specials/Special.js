/* eslint-disable react/prop-types */
import './Special.css';
import deliveryIcon from '../../assets/icon-delivery.svg';

const Special = ({ image, name, price, description }) => {
   return (
      <div className="special-item bg-color-secondary-gray">
         <img alt={`photo of ${name}`} src={image} />
         <div>
            <div>
               <div className="special-item-head">
                  <h4 className="text-card-title color-secondary-dark">
                     {name}
                  </h4>
                  <h4 className="text-card-title color-secondary-orange">
                     ${price}
                  </h4>
               </div>
               <p className="text-card-description text-paragraph color-secondary-dark">
                  {description}
               </p>
            </div>
            <h5 className="special-item-footer color-secondary-dark">
               Order a delivery
               <span>
                  <img
                     className="color-secondary-dark"
                     alt="delivery icon"
                     src={deliveryIcon}
                  />
               </span>
            </h5>
         </div>
      </div>
   );
};

export default Special;
