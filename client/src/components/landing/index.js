import React, { Fragment } from 'react';
import Header from './Header';
import FoodGallery from './FoodGallery';
import AboutFoodTypes from './AboutFoodTypes';
import NutritionCards from './NutritionCards';
import NutritionFacts from './NutritionFacts';
import VideoShowreel from './VideoShowreel';
import Benefits from './Benefits';

const Landing = ({ onHandleRecipeUpdate }) => {
  return (
    <Fragment>
      <Header />
      <FoodGallery onHandleRecipeUpdate={onHandleRecipeUpdate} />
      <AboutFoodTypes />
      <NutritionCards />
      <NutritionFacts />
      <VideoShowreel />
      <Benefits />
    </Fragment>
  );
};

export default Landing;
