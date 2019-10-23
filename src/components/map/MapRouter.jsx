import React from 'react';
import Map from "./Map";
import RouterLayout from "../../routerComponents/RouterLayout";


const arr = [
    {
        path:"/map",
        component: ()=> <Map/>,
        exact: true
    },
    {
        render: ()=> ( <h1>404 ERROR  page not found</h1> ),
    }
];

const MapRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default MapRouter;