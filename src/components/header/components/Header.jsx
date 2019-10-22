import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './../headerActions';
import {
    Collapse, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import CommonHeaderWrapper from "../../common/CommonHeaderWrapper";

const linksMap = [
    {path:"/about",name:"About"},
    {path:"/map",name:"Map"}
]

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
const Template = ({handleToggle,isOpen}) => (<>
    <>
        <Nav className="ml-auto" navbar>
            {linksMap.map(({path,name},ind)=>(
                <NavItem key={`${ind}-links-nav-bar`}>
                    <NavLink href={`${path}`}>{name}</NavLink>
                </NavItem>
            ))}
            <NavItem>
                <NavLink href="/logout">logout</NavLink>
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
    </>
Authorized user
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