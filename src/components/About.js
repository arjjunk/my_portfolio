import "./about.css";

import { TypeAnimation } from 'react-type-animation';
import { NavLink } from "react-router-dom";
import React from 'react'
import Img from "../assets/bg2.jpg";
import Me from "../assets/my_photo.png";
// import Resume from "../assets/Arjun_K.pdf";

const About = () => {
    return (
        <div className="about-body" id="about">
            <div className="mask-abt">
                <img className="img3" src={Img} alt="intro"></img>

            </div>
            <div className="about-head">

                <h1>About Me
                    <div className="line1"></div>
                </h1>
            </div>
            <div className="about-content">
                <p>
                    <TypeAnimation
                        sequence={[
                            "Hii, I'm Arjun K \n  I'm a Software Developer",
                            1000,
                            " ",
                            1000



                        ]}
                        speed={50}
                        repeat={Infinity}
                        style={{ whiteSpace: 'pre-line', fontSize: '2em' }} />
                </p>
            </div>
            <div className="my-photo">
                    <img src={Me} alt="My Photo" width="350px" height="350px"></img>
                    <a href="../assets/Arjun_K.pdf" download><p>Download  Resume</p></a>

            </div>


        </div>

    )
}

export default About