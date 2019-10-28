import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../layouts/Loader';

const Header = props => {
  const [recipe, setRecipe] = useState(null);

  // console.log('props', props);
  const uri = new URLSearchParams(window.location.search).get('id');
  // console.log('uri', uri);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (uri && uri.length > 0) {
      const url = `https://api.edamam.com/search?q=${uri}&app_id=bf655e2c&app_key=fe375ce936da737735b2f8cdb27eb3ca`;
      axios
        .get(url)
        .then(res => {
          console.log('res', res.data.hits[0].recipe);
          setRecipe(res.data.hits[0].recipe);
          // setData(res.data);
        })
        .catch(e => {
          console.log('Something went wrong...', e);
        });
    }
  }, [uri]);

  if (recipe) {
    return (
      <Fragment>
        <section
          className="recipe-header"
          style={{ backgroundImage: `url(${recipe.image})` }}
        >
          <div className="overlay"></div>
          <img src={recipe.image} alt="" />
          <div className="container">
            <div className="recipe-header__container">
              <h3>{recipe.label}</h3>
            </div>
          </div>
        </section>
        <section className="recipe-details">
          <div className="container">
            <div className="recipe-details__container">
              <div className="recipe__group">
                <div>
                  <h3>Ingredients</h3>
                  <ul className="ingredients-list">
                    {recipe.ingredientLines.map((line, index) => {
                      return <li key={index}>{line}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h3>Total Time</h3>
                  <p>{recipe.totalTime} minutes</p>
                  <h3>Serves</h3>
                  <p>{recipe.yield} people</p>
                  <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View recipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }

  return <Loader />;
};

export default Header;
