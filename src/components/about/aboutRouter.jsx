import React from 'react';
import Main from './main';
import RouterLayout from '../../routerComponents/RouterLayout';

const arr = [
  {
    path: '/',
    component: () => <Main />,
    exact: true,
  },
];

const AboutRouter = () => <RouterLayout listOfComponents={arr} />;

export default AboutRouter;
