import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouterLayout =  ({ listOfComponents:arr }) => {
    return (
        <Switch>
            { arr.map( (props, ind) =>
                (<Route  key={`${props.path}-${ind}`}  {...props} />)) }
        </Switch>
    );
}


RouterLayout.propTypes = {
    listOfComponents: PropTypes.array.isRequired
};

export default RouterLayout;