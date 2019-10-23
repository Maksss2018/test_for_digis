import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './mainActions';

const Main = ({ main,dispatch,...props }) => {
    useEffect(()=>{
        if( main === null  ){
            console.log("reqData");
            dispatch(getData());
        }
    },[]);
    return ( <MainJsx />);
}
const MainJsx = () => (<h5 className="h1"> Hello visitor </h5>);

Main.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ main }) =>{

     return{ main };
};
const mapDispatchToProps = dispatch =>{
    return {
    reqData: () => dispatch(getData())
}};
export default connect(stateFromProps )(Main);