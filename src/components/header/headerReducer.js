import { GET_SELECTOR_DATA } from '../map/constants';
export default (state = null, action) => {
  switch (action.type) {
    case GET_SELECTOR_DATA:
      return action.payload;
    default:
      return state;
  }
};
