import React from 'react';
import './menuItems.css';
import MenuItem from './menuItem/menuItem';

function MenuItems() {
    return (
        <ul className='menuItems'>
            <MenuItem link='/'>صفحه اصلی</MenuItem>
            <MenuItem link={{
                pathname: '/add-student',
                search: '?sort=name',
                hash: '#the-hash',
                state: {fromDashboard: true}
            }}>اضافه کردن دانشجو</MenuItem>
        </ul>
    );
}

export default MenuItems;
