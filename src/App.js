import { Suspense, lazy } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Navbar from "./components/universal/Navbar";
import Footer from "./components/universal/footer";
import ScrollToTop from "./components/PageLoad";
import "./index.css";  // Assuming you have global styles here

// Lazy-loaded components
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Blog = lazy(() => import("./components/pages/Blog"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Experience = lazy(() => import("./components/pages/combine/Experience"));
const Portfolio = lazy(() => import("./components/pages/Portfolio"));
const Post = lazy(() => import("./components/Post"));
const NotFound = lazy(() => import("./components/NotFound"));

// If using custom fonts, load them through CSS instead
// Add font classes to your CSS file or use a font loading solution
const geistSans = "font-geist-sans";  // Example class name
const geistMono = "font-geist-mono";  // Define these in your CSS

export default function App() {
  return (
    <Router>
      <div className={`${geistSans} ${geistMono} bg-gray-300 dark:bg-universal-dark min-h-screen`}>
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