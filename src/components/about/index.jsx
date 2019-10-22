import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './aboutActions';

const Index = ({  main, dispatch,...props }) => {
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

Index.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ main }) => ({ main });
const mapDispatchToProps = dispatch =>{
    return {
    reqData: () => dispatch(getData())
}};
export default connect(stateFromProps )(Index);