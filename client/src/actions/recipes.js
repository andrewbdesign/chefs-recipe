import axios from 'axios';
import { GET_RECIPES } from './types';

export const getRecipes = query => async dispatch => {
  try {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=bf655e2c&app_key=fe375ce936da737735b2f8cdb27eb3ca&from=0&to=12&calories=591-722&health=alcohol-free`,
    );
    console.log('getRecipes from actions/recipes.js: ' + query);
    console.log('res', res.data);
    dispatch({
      type: GET_RECIPES,
      payload: res.data,
    });
  } catch (err) {
    console.log('Error:', err);
  }
};
