import React from 'react';
import Main from "./main";
import PageNotFound from "./PageNotFound";
import RouterLayout from "../../routerComponents/RouterLayout";


const arr = [
    {
        path:"/",
        component: ()=> <h5 className="h1"> Hello visitor </h5>,
        exact: true
    },
    {
        path:"/login",
        component: ()=> <h5 className="h1"> Login Form </h5>,
        exact: true
    },
    {
        render: ()=> ( <PageNotFound/> ),
    }
];

const MainRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default MainRouter;