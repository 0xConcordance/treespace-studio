// UTILS
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom"

// PAGES
import App from './App'

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Universal.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
