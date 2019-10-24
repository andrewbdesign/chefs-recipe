import React, { Fragment } from 'react';
import Header from './Header';
import FoodGallery from './FoodGallery';
import AboutFoodTypes from './AboutFoodTypes';

const Landing = () => {
  return (
    <Fragment>
      <Header />
      <FoodGallery />
      <AboutFoodTypes />
    </Fragment>
  );
};

export default Landing;
