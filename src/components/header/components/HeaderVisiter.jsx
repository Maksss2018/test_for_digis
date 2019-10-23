import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './../headerActions';
import {
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { IoMdLogIn } from 'react-icons/io';
import CommonHeaderWrapper from '../../common/CommonHeaderWrapper';
import SocialsList from '../../common/SocialsList';
import { useHistory } from "react-router-dom";
import LogButton from "./LogButton";

const Header = ({  main, dispatch, logingin,...props }) => {
    const history =  useHistory();
    const relocate = e =>history.push("/login");
    return (<CommonHeaderWrapper>
        <Template logingin={logingin} handelRelocate={relocate} />
    </CommonHeaderWrapper>);
}
const Template = () => (
    <Nav className="ml-auto" navbar>
        <SocialsList WrapperComponent={NavItem}/>
        <LogButton logingin={false} />
    </Nav>);

Header.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ main }) => ({ main });
const mapDispatchToProps = dispatch =>{
    return {
    reqData: () => dispatch(getData())
}};
export default connect(stateFromProps )(Header);