import {generate as id} from "shortid"
import { getMain, saveUserMarks } from '../../api/index';
import { GET_MAIN_INFO,
    LOADING_MAIN_INFO,
    ERROR_MAIN_INFO,
    SET_MAIN_INFO,
} from './constants';
import { SAVE_MARKS } from './../map/constants';


export const getData = () => (dispatch) => getMain(data => dispatch( {
    type: GET_MAIN_INFO,
    payload: data
}))

export const saveMarks = (data,token) => (dispatch) => data.forEach((coord)=>{
    setTimeout(()=>{
        coord.user = token;
        coord.id = id();
        saveUserMarks(coord);
    },500);
})