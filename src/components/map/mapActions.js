import { getMain, getUserMarks } from '../../api/index';
import { SET_MARKS, GET_MARKS, ERROR_MARKS, SAVE_CENTER_MARK } from './constants';

const getMarks = mockToken => dispatch => {
  getUserMarks(
    data =>
      dispatch({
        type: GET_MARKS,
        payload: data,
      }),
    mockToken,
  );
};
const setMarks = marks => dispatch => {
  return dispatch({
    type: SET_MARKS,
    payload: marks,
  });
};
const saveCrCoords = center => dispatch => {
  return dispatch({
    type: SAVE_CENTER_MARK,
    payload: center,
  });
};

export { getMarks, setMarks, saveCrCoords };
