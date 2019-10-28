import { generate as id } from 'shortid';
import {
  getOptions,
  saveUserMarks,
  cleanAllUserMarks,
  getLocalPlacesByType,
} from '../../api/index';
import { GET_SPECIAL_MARKS, CLEAR_MARKS, GET_SELECTOR_DATA } from './../map/constants';

export const getTypeSelectorData = () => dispatch =>
  getOptions(data =>
    dispatch({
      type: GET_SELECTOR_DATA,
      payload: data,
    }),
  );

export const getLocalPlaces = params => dispatch => {
  const res = getLocalPlacesByType(params, ({ results }) => {
    console.dir(results);
    let trg = results.map(({ id, name, icon, geometry: { location: { lat, lng } } }) => ({
      lat,
      lng,
      id,
      name,
      icon,
    }));
    return dispatch({
      type: GET_SPECIAL_MARKS,
      payload: trg,
    });
  });
  return res;
};

/*
dispatch( {
            type: GET_MARKS,
            payload: data
        })
 */

export const saveMarks = (data, token) => dispatch =>
  data.forEach(coord => {
    setTimeout(() => {
      coord.user = token;
      coord.id = id();
      saveUserMarks(coord);
    }, 500);
  });
export const cleanAll = lisofIds => dispatch =>
  cleanAllUserMarks(lisofIds, () =>
    dispatch({
      type: CLEAR_MARKS,
    }),
  );
export const cleanAllReducer = () => dispatch =>
  dispatch({
    type: CLEAR_MARKS,
  });
