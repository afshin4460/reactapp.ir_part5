import React from 'react';
import './signin.css';
import ReactLogo from '../../../assets/images/reactapp-logo.png';
import Button from '../../ui/button/button';

function SignIn() {
    return (
        <div className='signin'>
            <img src={ReactLogo} alt="React Logo" />
            <input type="text" placeholder='UserName' />
            <input type="password" placeholder='Password' />
            <Button btnType='success' clicked={() => alert('Hello')}>ورود</Button>
        </div>
    );
}

export default React.memo(SignIn);
