import React from 'react';
import Header from "./header";
import RouterLayout from "../../routerComponents/RouterLayout";


const arr = [
    {
        path:"/",
        component: ()=> <Header/>,
        exact: true
    },
];

const HeaderRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default HeaderRouter;