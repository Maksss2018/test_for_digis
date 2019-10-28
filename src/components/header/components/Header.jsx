import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './../headerActions';
import { Nav, NavItem, NavLink } from 'reactstrap';
import CommonHeaderWrapper from '../../common/CommonHeaderWrapper';
import LogButton from './LogButton';

const linksMap = [{ path: '/about', name: 'About' }, { path: '/map', name: 'Map' }];

const Header = () => {
  return (
    <CommonHeaderWrapper>
      <Template />
    </CommonHeaderWrapper>
  );
};
const Template = ({ handleToggle, isOpen }) => (
  <>
    <>
      <Nav className="ml-auto" navbar>
        {linksMap.map(({ path, name }, ind) => (
          <NavItem key={`${ind}-links-nav-bar`}>
            <NavLink href={`${path}`}>{name}</NavLink>
          </NavItem>
        ))}
        <LogButton logingin={true} />
      </Nav>
    </>
  </>
);

Header.propTypes = {
  props: PropTypes.any,
};

const stateFromProps = ({ userInfo }) => ({ userInfo });

export default connect(stateFromProps)(Header);
