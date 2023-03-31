import React, {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './containers/header/toolbar/toolbar';
import HomePage from './pages/HomePage';
import EditStudent from './pages/EditStudent';
const AddStudent = React.lazy(() => import('./pages/AddStudent'));

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Toolbar />
                <div style={{marginTop: '65px'}}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='add-student' element={
                            <Suspense fallback={<p>...loading</p>}>
                                <AddStudent />
                            </Suspense>
                        } />
                        <Route path='student/:studentId' element={<EditStudent />} />
                        <Route path='*' element={<h1>Not Found</h1>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter> 
    );
}

export default React.memo(App);
