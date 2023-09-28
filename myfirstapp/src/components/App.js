import Header from './header';
import Footer from './footer';
import React from 'react';
import './style.css';
import Container from './formulaire';

function App() {
  return (<React.Fragment><Header /><Container /><Footer /></React.Fragment>)
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
