import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary-translucent text-white fixed w-full z-10">
      <Link to="/" className="logo text-2xl font-bold text-accent">
        Sreshta Gorantla
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1hZLpExzCPV6MkVydtx0ZKdUeJjYZFJA2jDuWHYEXC-g/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <Link to="/#about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/#projects" className="nav-link">Projects</Link>
          </li>
          <li>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
