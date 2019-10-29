import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes } from '../../actions/recipes';

const FoodGallery = ({ recipe, getRecipes }) => {
  // Recipes
  // const [recipeItems, setRecipeItems] = useState([]);

  console.log('recipes', recipe);

  useEffect(() => {
    // const query = recipe.recipes.q;
    // console.log('query', query);
    if (!recipe.recipes) {
      getRecipes('dinner');
    }
    // const url =
    //   'https://api.edamam.com/search?q=chicken&app_id=bf655e2c&app_key=fe375ce936da737735b2f8cdb27eb3ca&from=0&to=12&calories=591-722&health=alcohol-free';
    // axios
    //   .get(url)
    //   .then(res => {
    //     console.log('res', res.data);
    //     setRecipeItems(res.data.hits);
    //     // setData(res.data);
    //   })
    //   .then(() => {
    //     const cards = document.querySelector('.food-gallery__group').children;
    //     TweenMax.set(cards, { autoAlpha: 0, y: -10 });
    //     TweenMax.staggerTo(cards, 0.6, { autoAlpha: 1, y: 0 }, 0.07, 0);
    //   })
    //   .catch(e => {
    //     console.log('Something went wrong...', e);
    //   });
  }, []);

  const renderRecipes = () => {
    return recipe.recipes.hits.map((recipeItem, index) => {
      const { label, image } = recipeItem.recipe;
      const uri = recipeItem.recipe.uri.split('#recipe_')[1];
      return (
        <Link key={index} to={`/recipe?id=${uri}`}>
          <div
            className="food-gallery__item"
            style={{ backgroundImage: `url(${image})` }}
          >
            <p className="food-gallery__label">{label}</p>
            <span className="food-gallery__label-shadow"></span>
          </div>
        </Link>
      );
    });
  };

  const loading = <div style={{ margin: '0 auto' }}>Loading</div>;

  return (
    <section className="food-gallery">
      <div className="container">
        <div className="food-gallery__container">
          {recipe && (
            <h2 className="food-gallery__title">Recipes Ideas for Dinner</h2>
          )}
          <div className="food-gallery__group">
            {recipe && recipe.recipes ? renderRecipes() : loading}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  recipe: state.recipe,
});

const mapDispatchToProps = {
  getRecipes,
};

FoodGallery.propTypes = {
  recipe: PropTypes.object.isRequired,
  getRecipes: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodGallery);
