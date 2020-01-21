import React from 'react';

import Main from "./components/MainComponent/MainComponent"
import About from './components/AboutComponent/About'
import Projects  from "./components/ProjectsComponent/ProjectsComponent"
import TitleCarousel from "./components/TitleCarousel/TittleCarousel"


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
    </div>
  );
}

export default App;
