import React from 'react';
import Logo from '../../../components/logo/logo';
import MenuItems from '../menuItems/menuItems';
import Button from '../../../components/ui/button/button';
import './sideDrawer.css';
import Backdrop from '../../../components/ui/backdrop/backdrop';

function SideDrawer(props) {
    let classes = ['sideDrawer', 'close'];
    if (props.show) {
        classes = ['sideDrawer', 'open'];
    }
    return (
        <>
            <Backdrop show={props.show} modalClosed={props.modalClosed} />
            <div className={classes.join(' ')}>
                <Logo height='10%' />
                <nav>
                    <MenuItems />
                </nav>
                <div className="boxButton">
                    <Button btnType='violet'>ورود یا ثبت نام</Button>
                </div>
            </div>
        </>
        
    );
}

export default React.memo(SideDrawer);
