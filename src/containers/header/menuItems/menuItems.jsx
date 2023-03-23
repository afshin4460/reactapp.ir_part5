import React from 'react';
import './menuItems.css';
import MenuItem from './menuItem/menuItem';

function MenuItems() {
    return (
        <ul className='menuItems'>
            <MenuItem link='/' acitve>صفحه اصلی</MenuItem>
            <MenuItem link='/'>لیست دانشجویان</MenuItem>
        </ul>
    );
}

export default MenuItems;
