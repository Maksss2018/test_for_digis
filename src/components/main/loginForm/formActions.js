import { getMain } from '../../../api';
import { GET_MAIN_INFO,
    LOADING_MAIN_INFO,
    ERROR_MAIN_INFO,
    SET_MAIN_INFO,
} from './constants';
export const getData = () => (dispatch) => getMain(data => dispatch( {
    type: GET_MAIN_INFO,
    payload: data
}))

