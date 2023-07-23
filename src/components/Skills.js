import "./Skills.css";

import { HashLink as Link } from "react-router-hash-link";
// import { TypeAnimation } from 'react-type-animation';

import React from 'react'
import Img from "../assets/bg5.jpg";


const Skills = () => {
  return (
    <div className="skill-body" id="skills">
      <div className="mask3">
        <img className="img3" src={Img} alt="intro"></img>

      </div>
      <div className="skill-head">
        <h1>Expertice
          <div className="line2"></div></h1>
      </div><br></br>

      <div className="skill-content">
        <ul>
          <li>        
            <h2>Web Development :<br></br> HTML, CSS, Javascript, Php,React JS, Bootstrap</h2><br></br>
          </li>
          <li>
            <h2> Python Django Framework</h2><br></br>
          </li>
          <li>
            <h2>Java, C, Python</h2><br></br>
          </li>
          <li>
            <h2>Database :<br></br> MySQL, PostgreSQL</h2><br></br>
            </li>
          <li>
            <h2>Technologies : <br></br>git and github</h2>
          </li>
        </ul>
        <br></br><br></br>
        <Link to="#projects" className="btn" smooth>projects</Link>

                        {/* <p>
                    <TypeAnimation
                        sequence={[
                            " Web Development : HTML, CSS, Javascript, Php,React JS, Bootstrap",
                            1000,
                            "Python Django Framework",
                            1000,
                            "Database : MySQL, PostgreSQL",
                            1000,
                            "Java,C,Python",
                            1000,
                            "Technologies : git and github",
                            1000




                        ]}
                        speed={50}
                        repeat={Infinity}
                        style={{ whiteSpace: 'pre-line', fontSize: '1.5rem' }} />
                </p> */}


      </div>


    </div >

  )
}

export default Skills