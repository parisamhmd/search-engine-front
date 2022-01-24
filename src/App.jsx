import React from 'react'

import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';

import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

import MainPage from './pages'
import ResultsPage from './pages/resultsPage'

import './App.css';

const queryClient = new QueryClient()

const App=() =>{

    return (
        <ThemeProvider  >
            <QueryClientProvider  client={queryClient}>
                <div className='App'>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/:query" element={<ResultsPage />} />
                </Routes>
                </div>
            </QueryClientProvider>      
        </ThemeProvider>

  );
}

export default App;
