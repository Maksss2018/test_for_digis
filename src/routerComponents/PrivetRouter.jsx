import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { getStore } from "../utils/localStorage";
import { userLogedIn } from "./../components/main/loginForm/formActions";
import {currentLatLng} from "../utils/map";

const PrivetRouter = ({  children, userLogedIn }) => {
        const { push } = useHistory();
        const  { pathname } = useLocation();
        const redirect =  async ()=>{
            const {auth, id} = await getStore("user");
            if(auth){
                await userLogedIn(id);

                const adminFlag = auth === "admin"&& pathname.includes("admin");
                push(adminFlag?"/admin/map":"/map");
            }
        }
        useEffect( ()=>{
            redirect();
        },[])

    return (
        <>{children}</>
    );
}

const mapStateFromProps = (state) => ({})
const mapParamsFromProps = (dispatch) => ({
    userLogedIn: (mockToken) => dispatch(userLogedIn(mockToken))
})

export default connect(
    mapStateFromProps,
    mapParamsFromProps,
)(PrivetRouter);