import "./Footer.css"
import { FaHome, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import React from 'react'
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
    return (
        <div className="footer-body">
            <div className="footer-left">
                <FaHome size={30} style={{ color: "#fff" }}></FaHome>&nbsp;&nbsp;&nbsp; Calicut, Kerala<br></br><br></br>
                <NavLink to="https://wa.me/917510643820"> <FaWhatsapp size={30} style={{ color: "#fff" }}></FaWhatsapp> &nbsp;&nbsp;&nbsp;Whatsapp</NavLink><br></br><br></br>
                <NavLink to="mailto: arjungangadhar729@gmail.com"> <FaMailBulk size={30} style={{ color: "#fff" }}></FaMailBulk>&nbsp;&nbsp;&nbsp;Email</NavLink><br></br><br></br>
            </div>
            <div className="footer-right">
            <ul className="footer-menu">
        <li>
          <Link to="#home" smooth>Home<br></br><br></br></Link>
        </li>
        <li>
          <Link to="#about" smooth>About</Link><br></br><br></br>
        </li>
        <li>
          <Link to="#skills" smooth>Expertice</Link><br></br><br></br>
        </li>
        <li>
          <Link to="#projects" smooth>Projects</Link><br></br><br></br>
        </li>
        <li>
          <Link to="#contact" smooth>Contact</Link>
        </li>
      </ul>
            </div>
        </div>
    
  )
}

export default Footer