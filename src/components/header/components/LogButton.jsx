import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { IoMdLogOut, IoMdLogIn } from 'react-icons/io';
import { connect } from 'react-redux';
import { cleanAllReducer } from './../headerActions';

const LogButton = ({ logingin, adminFlag, cleanAllReducer }) => {
  const [switched, setSwitched] = useState(false);
  const history = useHistory();
  let { pathname } = useLocation();
  useEffect(() => {
    if (logingin !== switched) {
      setSwitched(logingin);
    }
  }, [logingin]);
  const relocate = () => {
    setSwitched(!switched);
    if (!adminFlag) {
      cleanAllReducer();
    }
    history.push(pathname.includes('/login') ? `${adminFlag ? 'admin' : ''}/map` : '/login');
  };
  return (
    <NavItem onClick={relocate}>
      {!switched && (
        <span className=" nav-link ">
          LogIn{` `} <IoMdLogIn size={30} />
        </span>
      )}
      {switched && (
        <span className=" nav-link ">
          LogOut{` `}
          <IoMdLogOut size={30} />
        </span>
      )}
    </NavItem>
  );
};

const stateFromProps = ({ userInfo: { auth } }) => ({ adminFlag: auth === 'admin' });
const dispatchedFromProps = dispatch => ({
  cleanAllReducer: () => dispatch(cleanAllReducer()),
});
export default connect(
  stateFromProps,
  dispatchedFromProps,
)(LogButton);
