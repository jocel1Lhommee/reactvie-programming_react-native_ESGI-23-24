import React from 'react';
import '../styles/App.css';
import Bienvenue from '../components/bienvenue';

function App() {
  return (
    <React.Fragment><Bienvenue name="Maha"
      text="Enseignant permanent"
      date="05/05/2022" /></React.Fragment>
  )
}

export default App;
