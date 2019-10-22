import React from 'react';
import Main from "./main";
import PageNotFound from "./PageNotFound";
import RouterLayout from "../../routerComponents/RouterLayout";


const arr = [
    {
        path:"/",
        component: ()=> <Main/>,
        exact: true
    },
    {
        render: ()=> ( <PageNotFound/> ),
    }
];

const MainRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default MainRouter;