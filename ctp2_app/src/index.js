import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import Propos from './components/propos';
import Contact from './components/contact';
import Invite from './components/invite';
import reportWebVitals from './reportWebVitals';
import App from './pages/App';
import Header from './components/header';
import Layout from './components/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
const headerComponent = (
  <Header />
);

root.render(
  <BrowserRouter>
    <Layout header={headerComponent}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='propos' element={<Propos />} />
        <Route path='contact' element={<Contact />} />
        <Route path='invite' element={<Invite />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
