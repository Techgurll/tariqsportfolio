import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Works from './Components/Works';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Header/> 
     <AboutMe/>
     <Works/>
     <Footer/>
    </div>
  );
}

export default App;
