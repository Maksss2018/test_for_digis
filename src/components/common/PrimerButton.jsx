import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


const PrimerButton = ({ color,name, activeClass, ...props }) =>(
        <Button className={`${activeClass}`} color={`${ color || "primary" }`} {...props}>
            {`${name}`}
        </Button>
    );

PrimerButton.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    activeClass: PropTypes.string,
};

export default PrimerButton;