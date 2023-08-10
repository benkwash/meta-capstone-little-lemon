/* eslint-disable react/prop-types */
import './Button.css';
import { colors } from '../../utils';

const Button = ({ children, backgroundColor, onClick }) => {
   return (
      <button
         style={{
            backgroundColor
         }}
         onClick={onClick}
         className="text-paragraph color-secondary-dark"
      >
         {children}
      </button>
   );
};

const PrimaryButton = ({ children, ...rest }) => {
   return (
      <Button backgroundColor={colors.primaryYellow} {...rest}>
         {children}
      </Button>
   );
};

export { Button, PrimaryButton };
