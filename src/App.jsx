import React from 'react'

import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';

import MainPage from './pages'
import ResultsPage from './pages/resultsPage'
import theme from './theme.js';

import './App.css';

const App=() =>{

    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:query" element={<ResultsPage />} />
            </Routes>
            </div>      
        </ThemeProvider>

  );
}

export default App;
