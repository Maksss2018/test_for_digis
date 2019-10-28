import React from 'react';
import PropTypes from 'prop-types';

const Main = () => {
  return <MainJsx />;
};
const MainJsx = () => <h5 className="h1"> Hello visitor </h5>;

Main.propTypes = {
  props: PropTypes.any,
};

export default Main;
