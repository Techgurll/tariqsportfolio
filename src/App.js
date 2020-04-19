import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Works from './Components/Works';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Header/> 
     <AboutMe/>
     <Works/>
    </div>
  );
}

export default App;
