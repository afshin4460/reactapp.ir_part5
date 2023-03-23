import React from 'react';
import './menuItem.css';

function MenuItem(props) {
    const classes = [];
    if (props.acitve) {
        classes.push('active');
    }
    return (
        <li className="menuItem">
            <a href={props.link} className={classes}>{props.children}</a>
        </li>
    );
}

export default MenuItem;
