import Navbar from "./components/navigationbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import {Routes, Route} from 'react-router-dom'

import {createBrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Contact/>
    </div>

  );
}

export default App;
