import { Suspense } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Navbar from "./components/universal/Navbar";
import Footer from "./components/universal/footer";
import ScrollToTop from "./components/PageLoad";
import "./index.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import Experience from "./components/pages/Experience";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-300 dark:bg-universal-dark min-h-screen">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/blog/:postId" element={<Post />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}