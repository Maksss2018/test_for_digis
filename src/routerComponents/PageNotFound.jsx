import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

function PageNotFound(props) {
  return (
    <Col xs={12}>
      <h6 className=" text-center h1 ">404 ERROR page not found</h6>
    </Col>
  );
}

PageNotFound.propTypes = {};

export default PageNotFound;
