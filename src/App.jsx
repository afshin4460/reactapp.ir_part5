import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './containers/header/toolbar/toolbar';
import HomePage from './pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Toolbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/add-student' element={<h1 style={{marginTop:'65px'}}>Mafakheri</h1>} />
                </Routes>
            </div>
        </BrowserRouter> 
    );
}

export default React.memo(App);
