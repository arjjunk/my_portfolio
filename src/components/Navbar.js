import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
    
  }

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="#home">
        <h1>Arjun Gangadhar</h1>
      </Link>
      <ul className={click ? "nav-menu active": "nav-menu"}>
        <li>
          <Link to="#home" smooth>Home</Link>
        </li>
        <li>
          <Link to="#about" smooth>About</Link>
        </li>
        <li>
          <Link to="#skills" smooth>Expertice</Link>
        </li>
        <li>
          <Link to="#projects" smooth>Projects</Link>
        </li>
        <li>
          <Link to="#contact" smooth>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />
        ) : (<FaBars size={20} style={{ color: "#fff" }} />
        )}

      </div>
    </div>
  )
}

export default Navbar


