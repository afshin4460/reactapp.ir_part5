import React from 'react';
import reactLogo from '../../assets/images/reactapp-logo.png';
import './logo.css';

function Logo(props) {
    return (
        <div className="logo" style={{height: props.height}}>
            <img src={reactLogo} alt="reactapp logo" />
        </div>
    );
}

export default React.memo(Logo);
