import "./Bgimg.css";
import { HashLink as Link } from "react-router-hash-link";

import React from 'react'
import IntroImg from "../assets/vid1.mp4";

const Bgimg = () => {
  return (


    <div className="body" id="home">
        <div className="mask">
          <video className="intro-img" src={IntroImg} type="video/mp4" alt="video is not supported"  autoPlay loop  muted>
            
          </video>
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCE</p>
          <h1>Software Developer</h1>
          <Link to="#projects" className="btn" smooth>projects</Link>
          <Link to="#contact" className="btn btn-light" smooth>contact</Link>
        </div>


    </div>

  )
}

export default Bgimg