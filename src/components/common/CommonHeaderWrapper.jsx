import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import PlaceTypeSelector from './../header/components/PlaceTypeSelector';

const CommonHeaderWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return <CommonHeaderTemplate children={children} isOpen={isOpen} handleToggle={toggle} />;
};

const CommonHeaderTemplate = ({ handleToggle, isOpen, children }) => (
  <Col xs={12}>
    <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">Malyi VS GoogleMapAPI </NavbarBrand>
      <NavbarToggler onClick={handleToggle} />
      <Collapse className="py-auto" isOpen={isOpen} navbar>
        <PlaceTypeSelector />
        {children}
      </Collapse>
    </Navbar>
  </Col>
);

CommonHeaderWrapper.propTypes = {
  children: PropTypes.node,
  props: PropTypes.any,
};

export default CommonHeaderWrapper;
