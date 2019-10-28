import { GET_MAIN_INFO, LOADING_MAIN_INFO, ERROR_MAIN_INFO, SET_MAIN_INFO } from './constants.js';
export default (state = null, action) => {
  switch (action.type) {
    case GET_MAIN_INFO:
      return action.payload;

    case LOADING_MAIN_INFO:
      return action.payload;

    default:
      return state;
  }
};
