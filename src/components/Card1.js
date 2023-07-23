import "./Card.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import Pro1 from "../assets/g4s.png"


const Card1 = () => {
  return (
    <div className="project-container">
    <div className="project1">
        <div className="project-card">
            <img src={Pro1} alt="Project1"></img>
            <h2 className="project-title">G4S</h2>
            <div className="pro-details">
                <p>A Web Application create using Python Django Framework as a part of the academic project</p>
                <div className="pro-btns">
                    <NavLink to="https://github.com/arjungangadhar/g4s" className="btn">View Source Code</NavLink>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card1
