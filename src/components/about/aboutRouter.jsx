import React from 'react';
import Main from "./main";
import RouterLayout from "../../routerComponents/RouterLayout";


const arr = [
    {
        path:"/",
        component: ()=> <Main/>,
        exact: true
    },
    {
        render: ()=> ( <h1>404 ERROR  page not found</h1> ),
    }
];

const AboutRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default AboutRouter;