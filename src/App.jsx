import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './containers/header/toolbar/toolbar';
import HomePage from './pages/HomePage';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Toolbar />
                <div style={{marginTop: '65px'}}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='add-student' element={<AddStudent />} />
                        <Route path='student/:studentId' element={<EditStudent />} />
                        <Route path='*' element={<h1>Not Found</h1>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter> 
    );
}

export default React.memo(App);
