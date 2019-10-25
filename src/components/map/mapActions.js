import { getMain, getUserMarks } from '../../api/index';
import {
    SET_MARKS,
    GET_MARKS,
    ERROR_MARKS,
} from './constants';

const getMarks = (mockToken) => (dispatch) =>{
    console.dir({mockToken})
     getUserMarks(data => dispatch( {
            type: GET_MARKS,
            payload: data
        }),
        mockToken)
};
const setMarks = (marks) => (dispatch) =>{
    return dispatch( {
    type: SET_MARKS,
    payload: marks
})
};

export {
    getMarks,
    setMarks
}
