import React from 'react';
import Main from "./main";
import LoginForm from "./loginForm/LoginForm";
import PageNotFound from "./PageNotFound";
import RouterLayout from "../../routerComponents/RouterLayout";


const arr = [
    {
        path:"/",
        component: ()=> <Main />,
        exact: true
    },
    {
        path:"/login",
        component: ()=> <LoginForm />,
        exact: true
    },
    {
        render: ()=> ( <PageNotFound/> ),
    }
];

const MainRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default MainRouter;