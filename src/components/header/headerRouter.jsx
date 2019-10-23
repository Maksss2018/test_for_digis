import React from 'react';
import Header from "./components/Header";
import HeaderAdmin from "./components/HeaderAdmin";
import HeaderVisiter from "./components/HeaderVisiter";
import "./scss/index.scss";
import RouterLayout from "../../routerComponents/RouterLayout";


const arr = [
    {
        path:"/login/*",
        component: ()=> <Header/>,
        exact: true
    },
    {
        path:"/login",
        component: ()=> <HeaderVisiter logingin={true} />,
        exact: true
    },
    {
        path:"/*/admin",
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

const HeaderRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default HeaderRouter;