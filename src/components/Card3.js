import "./Card.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import Pro3 from "../assets/techneeds.png"


const Card3 = () => {
  return (
    <div className="project-container">
    <div className="project3">
        <div className="project-card">
            <img src={Pro3} alt="Project"></img>
            <h2 className="project-title">TechNeeds</h2>
            <div className="pro-details">
                <p>A Static website of a retail shop created using bootstrap</p>
                <div className="pro-btns">
                    <NavLink to="https://github.com/arjungangadhar/" className="btn">View Source Code</NavLink>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card3
