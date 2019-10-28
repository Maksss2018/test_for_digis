import { GET_MAIN_INFO,
    LOADING_MAIN_INFO,
    ERROR_MAIN_INFO,
    SET_MAIN_INFO } from './constants.js';
import {SAVE_CENTER_MARK} from "../map/constants";
export default  (state = {

}, action) => {
    switch (action.type) {
        case GET_MAIN_INFO:
            return { ...state, ...action.payload };
        case LOADING_MAIN_INFO:
            return { ...state, ... action.payload };
        case SAVE_CENTER_MARK:
            return { ...state, center: action.payload };
        default:
            return state;
    }
}