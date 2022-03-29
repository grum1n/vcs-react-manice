import React from 'react';
import './styles/layout.css';
import './styles/normalize.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/router';

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
  }

export default App;