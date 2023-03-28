import React from 'react';
import './button.css';
import PropTypes from 'prop-types'

function Button(props) {

    const classes = ['Button'];
    switch(props.btnType) {
        case 'danger':
            classes.push('Danger');
            break;
        case 'success':
            classes.push('Success');
            break;
        case 'violet':
            classes.push('Violet');
            break;
        default:
            break;
    }

    return (
        <button className={classes.join(' ')} onClick={props.clicked}>{props.children}</button>
    );
}

export default React.memo(Button);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    btnType: PropTypes.string
};
Button.defaultProps = {
    btnType: 'success'
};
