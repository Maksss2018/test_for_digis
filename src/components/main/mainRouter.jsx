import React from 'react';
import Main from "./main";
import LoginForm from "./loginForm/LoginForm";
import RouterLayout from "../../routerComponents/RouterLayout";
import { default_route } from "../../Constans";

const arr = [
    {
        path:`${default_route.main}/about`,
        component: ()=> <Main />,
        exact: true
    },
    {
        path: `/login`,
        component: ()=> <LoginForm />,
        exact: true
    },
];

const MainRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default MainRouter;