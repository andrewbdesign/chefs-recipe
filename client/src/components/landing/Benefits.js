import React from 'react';
import {
  paleoBenefits,
  mediBenefits,
  veganBenefits,
} from '../../data/nutrition';
import Tick from '../../assets/icons/tick.svg';

const Benefits = () => {
  const renderListItems = items => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <img className="tick" src={Tick} alt="" />
          {item}
        </li>
      );
    });
  };

  const renderBenefits = diet => {
    return (
      <div className={`diet-benefits ${diet.className}-benefits`}>
        <ul>{renderListItems(diet.benefits)}</ul>
        <a className="button-primary" href="#!">
          {diet.title}!
        </a>
      </div>
    );
  };

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__container">
          <h3 className="benefits__heading">Some benefits of each diet</h3>
          <div className="benefits-diet__group">
            {renderBenefits(paleoBenefits)}
            {renderBenefits(mediBenefits)}
            {renderBenefits(veganBenefits)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
