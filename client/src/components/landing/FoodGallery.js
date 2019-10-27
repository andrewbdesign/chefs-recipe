import React, { useEffect, useState } from 'react';
import { TweenMax } from 'gsap';
import axios from 'axios';

const FoodGallery = () => {
  // Recipes
  const [recipeItems, setRecipeItems] = useState([]);
  // const [data, setData] = useState(null);

  useEffect(() => {
    const url =
      'https://api.edamam.com/search?q=chicken&app_id=bf655e2c&app_key=fe375ce936da737735b2f8cdb27eb3ca&from=0&to=12&calories=591-722&health=alcohol-free';
    axios
      .get(url)
      .then(res => {
        console.log('res', res.data);
        setRecipeItems(res.data.hits);
        // setData(res.data);
      })
      .then(() => {
        const cards = document.querySelector('.food-gallery__group').children;
        TweenMax.set(cards, { autoAlpha: 0, y: -10 });
        TweenMax.staggerTo(cards, 0.6, { autoAlpha: 1, y: 0 }, 0.07, 0);
      })
      .catch(e => {
        console.log('Something went wrong...', e);
      });
  }, []);

  const renderRecipes = () => {
    // render the recipes here
    console.log('recipeItems', recipeItems);
    return recipeItems.map((recipeItem, index) => {
      const { label, image } = recipeItem.recipe;
      return (
        <div
          key={index}
          className="food-gallery__item"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="food-gallery__label">{label}</p>
          <span className="food-gallery__label-shadow"></span>
        </div>
      );
    });
  };

  const loading = <div style={{ margin: '0 auto' }}>Loading</div>;

  return (
    <section className="food-gallery">
      <div className="container">
        <div className="food-gallery__container">
          {recipeItems.length > 0 && (
            <h2 className="food-gallery__title">Recipes Ideas for Dinner</h2>
          )}
          <div className="food-gallery__group">
            {recipeItems && recipeItems.length > 0 ? renderRecipes() : loading}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
