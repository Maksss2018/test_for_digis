import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { getStore } from "../utils/localStorage";
import {connect} from "react-redux";


const PrivetRouter = ({  children }) => {
        const { push } = useHistory();
        const  { pathname } = useLocation();
        const redirect =  async ()=>{
            const {auth} = await getStore("user");
            console.log(" auth ",auth)

            if(auth){
                const adminFlag = auth === "admin"&& pathname.includes("admin");
                console.log(" auth ",auth)
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

export default PrivetRouter;