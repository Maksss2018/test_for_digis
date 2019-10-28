import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Nav, NavItem, NavLink } from 'reactstrap';
import CommonHeaderWrapper from '../../common/CommonHeaderWrapper';
import SocialsList from '../../common/SocialsList';
import { useHistory } from 'react-router-dom';
import LogButton from './LogButton';

const Header = ({ main, dispatch, logingin, ...props }) => {
  const history = useHistory();
  const relocate = e => history.push('/login');
  return (
    <CommonHeaderWrapper>
      <Template logingin={logingin} handelRelocate={relocate} />
    </CommonHeaderWrapper>
  );
};
const Template = () => (
  <Nav className="ml-auto" navbar>
    <SocialsList WrapperComponent={NavItem} />
    <NavItem className="d-flex align-items-center text-light ">to became a member click</NavItem>
    <NavItem className=" d-flex align-items-center">
      <NavLink
        className=" text-success "
        href="https://geometry-dash.fandom.com/ru/wiki/Insane_Club"
      >
        here
      </NavLink>
    </NavItem>
    <LogButton logingin={false} />
  </Nav>
);

Header.propTypes = {
  props: PropTypes.any,
};

const stateFromProps = ({ main }) => ({ main });

export default connect(stateFromProps)(Header);
