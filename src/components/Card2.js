import "./Card.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import Pro2 from "../assets/sporthub.png"


const Card2 = () => {
  return (
    <div className="project-container">
    <div className="project2">
        <div className="project-card">
            <img src={Pro2} alt="Project"></img>
            <h2 className="project-title">Sporthub</h2>
            <div className="pro-details">
                <p>A Web Application create using Python Django Framework to book slots in football turfs</p>
                <div className="pro-btns">
                    <NavLink to="https://github.com/arjungangadhar/sporthub" className="btn">View Source Code</NavLink>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card2
