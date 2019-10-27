import { getUserData, checkUserData } from '../../../api';
import { store } from "../../../utils/localStorage";
import {
    LOG_IN_USER,
    LOG_OUT_USER,
    AUTH_USER,
    AUTH_ERROR,
} from './constants';
export const setLoader = (command) => (dispatch) =>dispatch({
    type: command,
})
export const userLogin = (inputs) => (dispatch) =>{
    setLoader(LOG_IN_USER);
    getUserData( (data)=>{
        if(data.error){
         return     dispatch({
                type: AUTH_ERROR,
            })
        }
        store("user", data[0]);
        return  dispatch({
            type: AUTH_USER,
            payload: data[0]
        })
    }, inputs)
}

export const userLogedIn = (inputs) => (dispatch) =>{
    setLoader(LOG_IN_USER);
    checkUserData( (data)=>{
        if( data.error ){
            return   dispatch({
                type: AUTH_ERROR,
            })
        }

        store("user", data[0]);
        console.dir({data:data[0]})

        return  dispatch({
            type: AUTH_USER,
            payload: data[0]
        })
    }, inputs)
}

export const userLogOut = () => (dispatch) =>{
    setLoader(LOG_OUT_USER);
    getUserData(data =>{
        if(data.error){
            return dispatch({
                type: AUTH_ERROR,
            })
        }
        return dispatch({
            type: AUTH_USER,
            payload: data
        })
    })
}