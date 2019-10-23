import {
    LOG_IN_USER,
    LOG_OUT_USER,
    LOG_IN_ERROR,
    AUTH_USER,
    AUTH_ERROR,
} from './constants.js';
export default  (state = null, action) => {

    switch (action.type) {
        case LOG_IN_USER:
            return action.payload;
        case LOG_OUT_USER:
            return action.payload;
        case LOG_IN_ERROR:
            return action.payload;
        case AUTH_USER:
            return action.payload;
        case AUTH_ERROR:
            return action.payload;
         default:
            return state;
    }
}