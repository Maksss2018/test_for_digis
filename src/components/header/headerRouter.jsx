import React, { useEffect } from 'react';
import Header from "./components/Header";
import HeaderAdmin from "./components/HeaderAdmin";
import HeaderVisiter from "./components/HeaderVisiter";
import "./scss/index.scss";
import RouterLayout from "../../routerComponents/RouterLayout";
import { useHistory } from "react-router-dom";

const arr = [
    {
        path:"/map",
        component: ()=> <Header/>,
        exact: true
    },
    {
        path:"/login",
        component: ()=> <HeaderVisiter logingin={true} />,
        exact: true
    },
    {
        path:"/*admin*",
        component: ()=>  <HeaderAdmin/>,
        exact: true
    },
    {
        path:"/",
        component: ()=> <HeaderVisiter/>,
        exact: true
    },
    {
        render:()=> "",
    },
];

const HeaderRouter = ({ userInfo }) => (<RouterLayout listOfComponents={arr}/>);

export default HeaderRouter;