
import { useEffect, useState } from 'react';
import Logo from '../../assets/2023-2024/SB nice color.png'
import {FaBars, FaTimes, FaCloudMoon, FaCloudSun} from "react-icons/fa"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [darkMode, setDarkMode] = useState(
      document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 text-white shadow-[0_20px_50px_rgba(15,23,42,0.32)] backdrop-blur-xl">
      <div className="mx-auto flex h-[84px] w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <nav>
          <Link to="/" className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10">
            <img src={Logo} alt="Logo" style={{ width: "52px" }} />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <nav className="hidden md:block">
            <ul className='flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-100'>
              <li className='px-0'>
                <Link className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li className='px-0'>
                <Link className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white" to="/about">
                  About
                </Link>
              </li>
              <li className='px-0'>
                <Link className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white" to="/experience">
                  Experience
                </Link>
              </li>
              <li className='px-0'>
                <Link className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white" to="/projects">
                  Projects
                </Link>
              </li>
              <li className='px-0'>
                <Link className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white" to="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={handleClick}
            className='z-10 rounded-2xl border border-white/10 bg-white/5 p-3 text-white md:hidden'
            aria-label="Toggle navigation menu"
          >
            {!nav ? <FaBars className="h-6 w-6"/> : <FaTimes className="h-6 w-6"/>}
          </button>

          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaCloudMoon className="h-6 w-6 text-slate-300" />
            ) : (
              <FaCloudSun className="h-6 w-6 text-amber-300" />
            )}
          </button>
        </div>

        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute inset-x-4 top-[96px] rounded-[28px] border border-white/10 bg-slate-950/95 p-6 shadow-[0_24px_55px_rgba(15,23,42,0.45)] backdrop-blur-xl md:hidden'
          }
        >
          <li className='px-0'>
            <Link className="block rounded-2xl px-4 py-4 text-lg font-semibold hover:bg-white/10" onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className='px-0'>
            <Link className="block rounded-2xl px-4 py-4 text-lg font-semibold hover:bg-white/10" onClick={handleClick} to="/about">
              About
            </Link>
          </li>
          <li className='px-0'>
            <Link className="block rounded-2xl px-4 py-4 text-lg font-semibold hover:bg-white/10" onClick={handleClick} to="/experience">
              Experience
            </Link>
          </li>
          <li className='px-0'>
            <Link className="block rounded-2xl px-4 py-4 text-lg font-semibold hover:bg-white/10" onClick={handleClick} to="/projects">
              Projects
            </Link>
          </li>
          <li className='px-0'>
            <Link className="block rounded-2xl px-4 py-4 text-lg font-semibold hover:bg-white/10" onClick={handleClick} to="/portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar