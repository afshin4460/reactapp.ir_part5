import React from 'react';
import './modal.css';
import Backdrop from '../backdrop/backdrop';

function Modal(props) {
    return(
        <>
            <Backdrop show={props.show} modalClosed={props.modalClosed} />
            <div className="modal" style={{
                transform: props.show ? 'translateX(0)' : 'translateX(-100vw)',
                opacity: props.show ? '1' : '0'
            }}>{props.children}</div>
        </>
    );
}

export default React.memo(Modal);
