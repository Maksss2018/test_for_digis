import {
    GET_MARKS,
    SAVE_MARKS,
    CLEAR_MARKS,
    ERROR_MARKS, SET_MARKS,
} from './constants';
export default  (state = [], action) => {

    switch (action.type) {
        case GET_MARKS:
            return action.payload;

        case SAVE_MARKS:
            return action.payload;

        case SET_MARKS:
            return action.payload;

         default:
            return state;
    }
}