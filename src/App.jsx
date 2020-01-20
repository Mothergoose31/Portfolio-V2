import React from 'react';

import Main from "./components/MainComponent/MainComponent"
import About from './components/AboutComponent/About'
import Projects  from "./components/ProjectsComponent/ProjectsComponent"


import './App.css';

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
