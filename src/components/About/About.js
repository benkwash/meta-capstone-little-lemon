import './About.css';
import { Row, Column } from '../SectionLayout/SectionLayout';
import aboutPhotoOne from '../../assets/restaurant-2.jpg';
import aboutPhotoTwo from '../../assets/restaurant-3.jpg';

const About = () => {
   return (
      <section className="about">
         <Row>
            <Column className="l-col-4 m-col-4">
               <div className="about-description">
                  <h1 className="text-title ">Little Lemon</h1>
                  <h3 className="text-sub-title ">Chicago</h3>
                  <p className="text-paragraph">
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor
                     do amet sint. Velit officia consequat duis enim velit
                     mollit. Exercitation veniam consequat sunt nostrud amet.
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor
                     do amet sint. Velit officia consequat duis enim velit
                     mollit. Amet minim mollit non deserunt ullamco est sit
                     aliqua dolor do amet sint. Velit officia consequat duis
                     enim velit mollit. Amet minim mollit non deserunt ullamco
                     est sit aliqua dolor do amet sint. Velit officia consequat
                     duis enim velit mollit.
                  </p>
               </div>
            </Column>
            <Column className="l-col-4 m-col-4">
               <div className="about-images">
                  <img alt="photo of restaurant" src={aboutPhotoOne} />
                  <img alt="chef photo of restaurant" src={aboutPhotoTwo} />
               </div>
            </Column>
         </Row>
      </section>
   );
};

export default About;
