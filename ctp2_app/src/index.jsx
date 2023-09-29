import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import App from './pages/App';
import First from './pages/First';


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='first' element={<First />} />
    </ Routes>
  </ BrowserRouter>
);

