import Navbar from "./components/navigationbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import PageNotFound from "./components/pages/PageNotFound";
import Resume from "./components/pages/resume";

import {createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/reactjs/",
    children: [
        {
          path: "/reactjs/resume",
          element: <Resume/>,
        },
        {
          path: "/reactjs/*",
          element: <PageNotFound />,
        }
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Skills/>
      <Work/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
