import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './containers/header/toolbar/toolbar';
import HomePage from './pages/HomePage';
import AddStudent from './pages/AddStudent';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Toolbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/add-student' element={<AddStudent />} />
                </Routes>
            </div>
        </BrowserRouter> 
    );
}

export default React.memo(App);
