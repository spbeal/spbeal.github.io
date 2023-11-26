import Navbar from "./components/navigationbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import PageNotFound from "./components/pages/PageNotFound";
import {Routes, Route} from 'react-router-dom'

import {createBrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Education/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>

  );
}

export default App;
{/*
        <Route path = '/' element = {<About/>}/>
        <Route path = '/' element = {<About/>}/>
        <Route path = '/' element = {<Skills/>}/>
        <Route path = '/' element = {<Work/>}/>
        <Route path = '/' element = {<Education/>}/>
        <Route path = '/' element = {<Contact/>}/>
      
      */}