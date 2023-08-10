import './Hero.css';
import chefFood from '../../assets/hero.jpg';
import { Row, Column } from '../SectionLayout';
import { colors } from '../../utils';
import { PrimaryButton } from '../Button/Button';

const Hero = () => {
   return (
      <section className="hero-section">
         <Row backgroundColor={colors.primaryGreen} extended={true}>
            <Column className="l-col-4 m-col-4">
               <div className="hero-section-left">
                  <h1 className="text-title color-primary-yellow">
                     Little Lemon
                  </h1>

                  <h2 className="text-sub-title color-secondary-gray">
                     Chicago
                  </h2>

                  <p className="text-hero color-secondary-gray">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua.
                  </p>

                  <PrimaryButton>Reserve a Table</PrimaryButton>
               </div>
            </Column>
            <Column className="l-col-4 m-col-4">
               <div className="hero-image-container">
                  <img
                     src={chefFood}
                     alt="chef food photo"
                     className="hero-image"
                  />
               </div>
            </Column>
         </Row>
      </section>
   );
};

export default Hero;
