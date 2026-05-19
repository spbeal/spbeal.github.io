import { Suspense } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Navbar from "./components/universal/Navbar";
import Footer from "./components/universal/footer";
import ScrollToTop from "./components/PageLoad";
import "./index.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import NotFound from "./components/NotFound";
import Experience from "./components/pages/Experience";
import Resume from "./components/pages/Resume";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen page-shell">
        <ScrollToTop />
        <Navbar />
        
        <main className="relative flex-grow">
          <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}