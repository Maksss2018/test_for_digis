import { getMain } from '../../api/index';
import { GET_MARKS,
    SAVE_MARKS,
    CLEAR_MARKS,
    ERROR_MARKS,
} from './constants';

export const getData = () => (dispatch) => getMarks(data => dispatch( {
    type: GET_MARKS,
    payload: data
}))

