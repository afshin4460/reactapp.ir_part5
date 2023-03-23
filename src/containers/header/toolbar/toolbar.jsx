import React, {useState} from 'react';
import './toolbar.css';
import Logo from '../../../components/logo/logo';
import MenuItems from '../menuItems/menuItems';
import Button from '../../../components/ui/button/button';
import Modal from '../../../components/ui/modal/modal';
import SignIn from '../../../components/user/signin/signin';
import SideDrawer from '../sideDrawer/sideDrawer';

function Toolbar() {
    
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(true);
    };
    const handleModalClosed = () => {
        setShowModal(false);
    };
    const [openSideDrawer, setOpenSideDrawer] = useState(false);
    const sideDrawerHandler = () => {
        setOpenSideDrawer(true);
    };
    const handleSideDrawerClose = () => {
        setOpenSideDrawer(false);
    };

    return (
        <>
            <SideDrawer show={openSideDrawer} modalClosed={handleSideDrawerClose} />
            <header className="toolbar">
                <div className='icon' onClick={sideDrawerHandler}>Icon</div>
                <div className="showNav">
                    <Logo height='80%' />
                    <nav>
                        <MenuItems />
                    </nav>
                    <Button btnType='violet' clicked={handleModal}>ورود یا ثبت نام</Button>
                </div>
                <Modal show={showModal} modalClosed={handleModalClosed}><SignIn /></Modal>
            </header>
        </>
    );
}

export default Toolbar;
