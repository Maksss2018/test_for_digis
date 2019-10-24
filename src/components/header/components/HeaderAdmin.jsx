import React, {  useState,useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './../headerActions';
import CommonHeaderWrapper from "../../common/CommonHeaderWrapper";
import { useLocation } from "react-router-dom";
import {Nav, NavItem, NavLink} from "reactstrap";
import LogButton from "./LogButton";
import PrimerButton from "./../../common/PrimerButton";
const linksMap = [
    {path:"/about",name:"About"},
    {path:"/map",name:"Map"}
]

const Header = ({  main, dispatch,...props }) => {
    const { pathname } = useLocation();
    const [ admin, setAdmin ] = useState(false);
    useEffect(()=>{
        if( pathname.includes("admin") ){
            setAdmin(true);
          }
    },[]);

    return (<CommonHeaderWrapper>
        <Template flagSaveBtn={admin}/>
    </CommonHeaderWrapper>);
}
const Template = ({flagSaveBtn}) => (<>
    <Nav className="ml-auto" navbar>
        {linksMap.map(({path,name},ind)=>(
            <NavItem key={`${ind}-links-nav-bar`}>
                <NavLink href={`${path}`}>{name} {`${flagSaveBtn}`}</NavLink>
            </NavItem>
        ))}
        {flagSaveBtn && (<>
            <NavItem >
                <PrimerButton outline activeClass=" mx-2 " color="danger" name=" Clear marks " />
            </NavItem>
            <NavItem >
                <PrimerButton activeClass=" mx-2 "  name=" Save marks " />
            </NavItem>
        </>)}
        <LogButton logingin={true} />
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