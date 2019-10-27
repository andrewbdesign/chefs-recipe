import React, { Fragment } from 'react';
import Header from './Header';
import FoodGallery from './FoodGallery';
import AboutFoodTypes from './AboutFoodTypes';
import NutritionCards from './NutritionCards';
import NutritionFacts from './NutritionFacts';
import VideoShowreel from './VideoShowreel';

const Landing = () => {
  return (
    <Fragment>
      <Header />
      <FoodGallery />
      <AboutFoodTypes />
      <NutritionCards />
      <NutritionFacts />
      <VideoShowreel />
    </Fragment>
  );
};

export default Landing;
