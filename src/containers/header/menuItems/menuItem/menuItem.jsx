import React from 'react';
import './menuItem.css';
import { NavLink } from 'react-router-dom';

function MenuItem(props) {
    
    return (
        <li className="menuItem">
            <NavLink style={({isActive}) => {
                return {
                    color: isActive ? 'blue' : ''
                }
            }} to={props.link}>{props.children}</NavLink>
        </li>
    );
}

export default MenuItem;
