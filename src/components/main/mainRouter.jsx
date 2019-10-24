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
        path: `${default_route.main}/login`,
        component: ()=> <LoginForm />,
        exact: true
    },
];

const MainRouter = () => {
    console.log(" default_route.main ",default_route.main);
 return(<RouterLayout listOfComponents={arr}/>)
};

export default MainRouter;