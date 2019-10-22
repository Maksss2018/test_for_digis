import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './mainActions';

const Main = ({  main, dispatch,...props }) => {
    useEffect(()=>{
        if( main === null  ){
            console.log("reqData");
            dispatch(getData());
        }
    },[]);
    return ( <MainJsx />);
}
const MainJsx = () => (<main>

</main>);

Main.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ main }) => ({ main });
const mapDispatchToProps = dispatch =>{
    return {
    reqData: () => dispatch(getData())
}};
export default connect(stateFromProps )(Main);