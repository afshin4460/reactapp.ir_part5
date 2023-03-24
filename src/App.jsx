import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './containers/header/toolbar/toolbar';

function App() {
    return (
        <BrowserRouter>
            <Toolbar />
            <Routes>
                <Route path='/' element={<h1 style={{marginTop:'65px'}}>Afshin</h1>} />
                <Route path='/add-student' element={<h1 style={{marginTop:'65px'}}>Mafakheri</h1>} />
            </Routes>
        </BrowserRouter> 
    );
}

export default React.memo(App);
