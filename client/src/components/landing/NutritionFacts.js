import React, { Fragment } from 'react';
import {
  paleoNutrition,
  mediNutrition,
  veganNutrition,
} from '../../data/nutrition';
import Tick from '../../assets/icons/tick.svg';
import Warning from '../../assets/icons/warning.svg';

const NutritionFacts = () => {
  const renderNutrition = diet => {
    return (
      <div className={`nutrition-card ${diet.className}`}>
        <h3 className="nutrition-card__title">Nutrition Facts</h3>
        <p>
          <span className="diet-icon"></span>
          {diet.title} Diet
        </p>
        <hr className="thick" />
        <p className="nutrition__text-right">% Daily Value</p>
        <hr className="thin" />
        <ul className="nutrition-card__list">{renderFacts(diet.facts)}</ul>
        <hr className="thick" />
      </div>
    );
  };

  const renderFacts = facts => {
    return facts.map((fact, index) => {
      return (
        <li key={index} className="nutrition-card__list-item">
          <span>{fact.title}</span>
          <span>{fact.value}</span>
        </li>
      );
    });
  };

  const renderBenefits = benefits => {
    return (
      <div className="nutrition-benefits">
        <img className="benefit-icon" src={Tick} alt="" />
        <h3 className="nutrition-card__title">Benefits</h3>
        <hr className="thin" />
        {benefits.map((benefit, index) => {
          return <p key={index}>{benefit}</p>;
        })}
      </div>
    );
  };

  const renderRisks = risks => {
    return (
      <div className="nutrition-risks">
        <img className="risk-icon" src={Warning} alt="" />
        <h3 className="nutrition-card__title">Risks</h3>
        <hr className="thin" />
        {risks.map((risk, index) => {
          return <p key={index}>{risk}</p>;
        })}
      </div>
    );
  };

  return (
    <Fragment>
      <section className="nutrition-facts-heading">
        <div className="container">
          <h3>Health Benefits, Dietary Values & Risks</h3>
        </div>
      </section>
      <section className="nutrition-facts">
        <div className="container">
          <div className="nutrition-facts__container">
            <div className="nutrition-facts__cards">
              <div className="paleo-group">
                {renderNutrition(paleoNutrition)}
                {renderBenefits(paleoNutrition.benefits)}
                {renderRisks(paleoNutrition.risks)}
              </div>
              <div className="medi-group">
                {renderNutrition(mediNutrition)}
                {renderBenefits(mediNutrition.benefits)}
                {renderRisks(mediNutrition.risks)}
              </div>
              <div className="vegan-group">
                {renderNutrition(veganNutrition)}
                {renderBenefits(veganNutrition.benefits)}
                {renderRisks(veganNutrition.risks)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NutritionFacts;
