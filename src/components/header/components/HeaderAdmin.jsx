import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveMarks, cleanAll } from './../headerActions';
import CommonHeaderWrapper from '../../common/CommonHeaderWrapper';
import { useLocation } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import LogButton from './LogButton';
import PrimerButton from './../../common/PrimerButton';
const linksMap = [{ path: '/about', name: 'About' }, { path: '/map', name: 'Map' }];

const Header = ({ main, mapInfo, id, saveData, cleanAll, dispatch, ...props }) => {
  const { pathname } = useLocation();
  const [admin, setAdmin] = useState(false);
  const handleSave = e => {
    e.preventDefault();
    if (mapInfo.length) {
      saveData(mapInfo, id);
    }
  };
  const handleCleanAll = e => {
    e.preventDefault();
    const trg = mapInfo.map(({ id }) => id);
    cleanAll(trg);
  };
  useEffect(() => {
    if (pathname.includes('admin')) {
      setAdmin(true);
    }
  }, []);

  return (
    <CommonHeaderWrapper>
      <Template flagSaveBtn={admin} handleCleanAll={handleCleanAll} handleSave={handleSave} />
    </CommonHeaderWrapper>
  );
};
const Template = ({ flagSaveBtn, handleSave, handleCleanAll }) => (
  <>
    <Nav className="ml-auto" navbar>
      {linksMap.map(({ path, name }, ind) => (
        <NavItem key={`${ind}-links-nav-bar`}>
          <NavLink href={`${path}`}>
            {name} {`${flagSaveBtn}`}
          </NavLink>
        </NavItem>
      ))}
      {flagSaveBtn && (
        <>
          <NavItem onClick={handleCleanAll}>
            <PrimerButton outline activeClass=" mx-2 " color="danger" name=" Clear marks " />
          </NavItem>
          <NavItem onClick={handleSave}>
            <PrimerButton activeClass={`  mx-2 `} name=" Save marks " />
          </NavItem>
        </>
      )}
      <LogButton logingin={true} />
    </Nav>
  </>
);

Header.propTypes = {
  props: PropTypes.any,
};

const stateFromProps = ({ main, mapInfo, userInfo: { id } }) => ({ main, mapInfo, id });
const mapDispatchToProps = dispatch => ({
  saveData: (arr, id) => dispatch(saveMarks(arr, id)),
  cleanAll: trg => dispatch(cleanAll(trg)),
});
export default connect(
  stateFromProps,
  mapDispatchToProps,
)(Header);
