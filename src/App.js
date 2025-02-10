import Navbar from "./components/universal/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/universal/footer";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

import Portfolio from "./components/pages/Portfolio";

import NotFound from "./components/NotFound";
import Post from "./components/Post";
import ScrollToTop from "./components/PageLoad";
import {Routes, Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import {createBrowserRouter } from 'react-router-dom'



function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   <Home />
    //   <About />
    //   <Projects/>
    //   <Blog/>
    //   <Footer/>
    // </div>
    <Router>
      <ScrollToTop /> {/* Always scroll to top on route change */}
      <Navbar /> {/* Optional: Add navigation bar */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:postId" element={<Post/>} /> {/* Dynamic route */}
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all for 404 */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
