import React from 'react';
import './backdrop.css';

function Backdrop(props) {
    return (
        props.show ? <div className="backdrop" onClick={props.modalClosed}></div> : null
    );
}

export default React.memo(Backdrop);
