import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './../headerActions';
import CommonHeaderWrapper from "../../common/CommonHeaderWrapper";

const Header = ({  main, dispatch,...props }) => {
    return (<CommonHeaderWrapper>
        <Template />
    </CommonHeaderWrapper>);
}
const Template = () => (<main>
<h4>Admin</h4>
</main>);

Header.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ main }) => ({ main });
const mapDispatchToProps = dispatch =>{
    return {
    reqData: () => dispatch(getData())
}};
export default connect(stateFromProps )(Header);