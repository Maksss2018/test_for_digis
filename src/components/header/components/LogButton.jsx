import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from "react-router-dom";
import {NavItem} from "reactstrap";
import { IoMdLogOut, IoMdLogIn } from 'react-icons/io';

const LogButton = ({ logingin }) => {
    const [switched, setSwitched] =  useState( false);
    const history =  useHistory();
    let { pathname } = useLocation();
    useEffect(()=>{
        if(logingin!==switched){
            setSwitched(logingin);
        }
    },[logingin]);
    const relocate = () =>{
        setSwitched(!switched);
        history.push(pathname.includes("/login")?"/main":"/main/login")
    };
    return (
            <NavItem onClick={relocate} >
                {!switched &&(<span  className=" nav-link " >LogIn{` `} <IoMdLogIn size={30}/></span>)}
                {switched &&
                    (<span  className=" nav-link " >LogOut{` `}<IoMdLogOut size={30}/></span>)}

            </NavItem>);
}

export default LogButton;