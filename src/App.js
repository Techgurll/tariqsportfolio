import React from 'react';
import './App.scss';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Works from './Components/Works';
import Footer from './Components/Footer';
import NavTop from './Components/NavTop';

function App() {
  return (
    <div className="App">
     <NavTop/>
     <Header/> 
     <AboutMe/>
     <Works/>
     <Footer/>
    </div>
  );
}

export default App;
