import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './../headerActions';
import {
    Collapse, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav, Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import CommonHeaderWrapper from '../../common/CommonHeaderWrapper';

const Header = ({  main, dispatch,...props }) => {
    useEffect(()=>{
        if( main === null  ){
            console.log("reqData");
            dispatch(getData());
        }
    },[]);
    return (<CommonHeaderWrapper>
        <Template />
    </CommonHeaderWrapper>);
}
const Template = ({}) => (<>
    <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink href="/login">Login</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Options
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Option 1
                </DropdownItem>
                <DropdownItem>
                    Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Reset
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>
</>);

Header.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ main }) => ({ main });
const mapDispatchToProps = dispatch =>{
    return {
    reqData: () => dispatch(getData())
}};
export default connect(stateFromProps )(Header);