import Header from './Header';
import Footer from './footer';
import React from 'react';
import './style.css';
import Formulaire from './formulaire';

function App() {
  return (<React.Fragment><Header /><Formulaire /><Footer /></React.Fragment>)
}

export default App;

import './App.css';
import Header from './Header';

function App() {
  return (
    <Header></Header>
  );
}

export default App;
