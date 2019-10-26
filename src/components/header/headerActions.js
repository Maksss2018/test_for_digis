import {generate as id} from "shortid"
import { getOptions, saveUserMarks, cleanAllUserMarks, getLocalPlacesByType } from '../../api/index';
import { SAVE_MARKS, GET_MARKS, CLEAR_MARKS, GET_SELECTOR_DATA } from './../map/constants';
import {currentLatLng} from "../../utils/map";


export const getTypeSelectorData = () => (dispatch) => getOptions(data => dispatch( {
    type: GET_SELECTOR_DATA,
    payload: data
}))

export const getLocalPlaces = (type) => (dispatch) => getLocalPlacesByType({
    type,
    radius:1500,
    location: currentLatLng(({ lat,lng})=>`${lat},${lng}`)
},data => dispatch( {
    type: GET_MARKS,
    payload: data
}))

export const saveMarks = (data,token) => (dispatch) => data.forEach((coord)=>{
    setTimeout(()=>{
        coord.user = token;
        coord.id = id();
        saveUserMarks(coord);
    },500);
})
export const cleanAll = (lisofIds) => (dispatch) => cleanAllUserMarks(lisofIds,()=>dispatch( {
    type: CLEAR_MARKS
}));
export const cleanAllReducer = () => (dispatch) => dispatch( {
    type: CLEAR_MARKS
});