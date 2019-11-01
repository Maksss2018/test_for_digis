import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import CommonHeaderWrapper from '../../common/CommonHeaderWrapper';
import LogButton from './LogButton';

const linksMap = [{ path: '/about', name: 'About' }, { path: '/map', name: 'Map' }];

const Header = ({auth,id}) => {
    const [name, setName] = useState("Visiter");
    useEffect(()=>{
        if(auth){
            setName(id);
        }
    },[auth]);
    return (
    <CommonHeaderWrapper>
      <Template authorName={name} />
    </CommonHeaderWrapper>
  );
};
const Template = ({authorName}) => (
  <>
    <>
      <Nav className="ml-auto" navbar>
          <NavItem >
              <span className=" nav-link ">
               Hello {authorName}
              </span>
          </NavItem>
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

const stateFromProps = ({ userInfo:{auth,id} }) => ({ auth,id });

export default connect(stateFromProps)(Header);
