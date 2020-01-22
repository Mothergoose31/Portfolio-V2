import React from 'react';

import Main from "./components/MainComponent/MainComponent"
import TitleCarousel from "./components/TitleCarousel/TittleCarousel"
import About from './components/AboutComponent/About'
import Projects  from "./components/ProjectsComponent/ProjectsComponent"
import Footer from './components/Footer/Footer'





import './App.css';



function App() {
  return (
    <div className="App">
      <div id='container'>
        <Main/>
        <TitleCarousel/>
      </div>
      
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
