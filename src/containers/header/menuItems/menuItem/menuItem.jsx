import React from 'react';
import './menuItem.css';
import { Link } from 'react-router-dom';

function MenuItem(props) {
    const classes = [];
    if (props.acitve) {
        classes.push('active');
    }
    return (
        <li className="menuItem">
            <Link to={props.link} className={classes}>{props.children}</Link>
        </li>
    );
}

export default MenuItem;
