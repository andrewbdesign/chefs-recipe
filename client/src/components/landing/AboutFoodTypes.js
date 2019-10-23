import React from 'react';
import ImagePaleo from '../../assets/images/landing/paleo-01.png';
import ImageMed from '../../assets/images/landing/mediterranean-01.png';
import ImageVegan from '../../assets/images/landing/vegan-01.png';

const AboutFoodTypes = () => {
  return (
    <section className="about-food-types">
      <div className="container">
        <div className="about-food-types__container">
          <div className="about-food-types__plates">
            <img src={ImagePaleo} alt="" />
            <img src={ImageMed} alt="" />
            <img src={ImageVegan} alt="" />
          </div>
          <div className="about-food-types__copy">
            <h2>Which Diet is right for you?</h2>
            <p>
              Making a transition into a new lifestyle can be a daunting task.
              Chef's Recipe has put together three of the most popular diets:
              Chef, Mediterranean and Vegan and put them side by side to help
              you make an educated step into the direction that's right for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoodTypes;
