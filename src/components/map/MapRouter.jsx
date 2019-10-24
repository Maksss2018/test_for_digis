import React from 'react';
import Map from "./Map";
import RouterLayout from "../../routerComponents/RouterLayout";
import {Col} from "reactstrap";


const arr = [
    {
        path:"/map",
        component: ()=> <Col
            id="container-map "
            xs={12}>
            <Map/>
        </Col> ,
        exact: true
    }
];

const MapRouter = () => (<RouterLayout listOfComponents={arr}/>);

export default MapRouter;