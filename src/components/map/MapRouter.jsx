import React from 'react';
import Map from './Map';
import RouterLayout from '../../routerComponents/RouterLayout';
import { Col } from 'reactstrap';
import DashBoard from './components/DashBoard';
import AdminDashBoard from './components/AdminDashBoard';

const arr = [
  {
    path: '/map*',
    component: () => (
      <>
        <Col className=" vh-45 " xs={12}>
          <Map />
        </Col>
        <Col className=" vh-45 " xs={12}>
          <DashBoard />
        </Col>
      </>
    ),
    exact: true,
  },
  {
    path: '/admin/map',
    component: () => (
      <>
        <Col className=" vh-45 " xs={12}>
          <Map />
        </Col>
        <Col className=" vh-45 " xs={12}>
          <AdminDashBoard />
        </Col>
      </>
    ),
    exact: true,
  },
];

const MapRouter = () => <RouterLayout listOfComponents={arr} />;

export default MapRouter;
