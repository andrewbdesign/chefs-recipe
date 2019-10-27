import React, { Fragment } from 'react';
import Header from './Header';
import FoodGallery from './FoodGallery';
import AboutFoodTypes from './AboutFoodTypes';
import NutritionCards from './NutritionCards';
import NutritionFacts from './NutritionFacts';

const Landing = () => {
  return (
    <Fragment>
      <Header />
      <FoodGallery />
      <AboutFoodTypes />
      <NutritionCards />
      <NutritionFacts />
    </Fragment>
  );
};

export default Landing;
