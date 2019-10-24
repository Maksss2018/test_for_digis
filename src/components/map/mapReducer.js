import { GET_MARKS,
    SAVE_MARKS,
    CLEAR_MARKS,
    ERROR_MARKS,
} from './constants';
export default  (state = null, action) => {
    switch (action.type) {
        case GET_MARKS:
            console.log("GET_MAIN_INFO REDUCER");
            return action.payload;

        case SAVE_MARKS:
            console.log("LOADING_MAIN_INFO");
            return action.payload;
         default:
            return state;
    }
}