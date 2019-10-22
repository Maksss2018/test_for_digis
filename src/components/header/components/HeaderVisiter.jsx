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
        <SocialsList WrapperComponent={NavItem}/>
        <NavItem>
            <NavLink href="/login">Login{` `}<IoMdLogIn size={30}/></NavLink>
        </NavItem>
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