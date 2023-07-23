import "./projects.css";
import "./Card.css"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"
import React from 'react'
import Img from "../assets/bg3.jpg";
import { NavLink } from "react-router-dom";
// import Work from "../components/Work"
const Projects = () => {
    return (
        <div className="project-body" id="projects">
            <div className="mask-prjct">
                <img className="img3" src={Img} alt="intro"></img>

            </div>
            <div className="project-head">

                <h1>Projects
                    <div className="line3"></div>
                </h1>
            </div>
        
            <div className="project-content1">
                <Card1/>
            </div>
             <div className="project-content2">
                <Card2/>
            </div>
            <div className="project-content3">
                <Card3/>
            </div> 
            <NavLink className="more-projects" to="https://github.com/arjungangadhar/">See more projects</NavLink>


        </div>

    )
}

export default Projects