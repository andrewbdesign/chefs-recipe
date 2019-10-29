import { GET_RECIPES, SET_RECIPE } from '../actions/types';

const initialState = {
  recipes: null,
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RECIPES:
    case SET_RECIPE:
      return {
        ...state,
        recipes: payload,
        loading: false,
      };
    default:
      return state;
  }
}
