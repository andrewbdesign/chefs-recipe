import React from 'react';
import { paleo, medi, vegan } from '../../data/nutrition';

const renderCardList = dietInfo => {
  return (
    <div className={dietInfo.className}>
      <div
        className="card-intro"
        style={{ backgroundImage: `url(${dietInfo.icon})` }}
      >
        <h3>{dietInfo.title}</h3>
      </div>
      <ul className="card__list">{renderItems(dietInfo.items)}</ul>
      <div className="card-outro">
        <h3>{dietInfo.notes}</h3>
      </div>
    </div>
  );
};

const renderItems = items => {
  return items.map((item, index) => {
    return (
      <li key={index}>
        <img className="card__thumbnail" src={item.image} alt="" />
        <span className="card__title">{item.title}</span>
        <span className="card__servings">
          {item.servings}/{item.frequency}
        </span>
      </li>
    );
  });
};

const NutritionCards = () => {
  return (
    <section className="nutrition-cards">
      <div className="container">
        <div className="nutrtion-cards__container">
          <div className="card card__paleo">{renderCardList(paleo)}</div>
          <div className="card card__medi">{renderCardList(medi)}</div>
          <div className="card card__vegan">{renderCardList(vegan)}</div>
        </div>
      </div>
    </section>
  );
};

export default NutritionCards;
