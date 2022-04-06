import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../features/HomePage.component';
import { LoginPage } from '../features/LoginPage.component';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>page not found 404</h1>} />
        </Routes>
    );
}

export default App;
