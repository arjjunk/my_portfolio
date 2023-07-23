import "./Contact.css";

import { FaTelegram, FaWhatsapp, FaMailBulk, FaGithub, FaInstagram } from "react-icons/fa";
import React from 'react'
import Img from "../assets/bg4.jpg";
import { NavLink } from "react-router-dom";
const Contact = () => {
    return (
        <div className="contact-body" id="contact">
            <div className="mask-contact">
                <img className="img3" src={Img} alt="intro"></img>

            </div>
            <div className="contact-head">

                <h1>Contact
                    <div className="line4"></div>
                </h1>
            </div>
            <div className="contact-content">
                <NavLink  to="https://t.me/arjun_gangadhar"><FaTelegram size={30} style={{ color: "#fff"}}></FaTelegram>&nbsp;&nbsp;&nbsp; Telegram</NavLink><br></br><br></br>
                <NavLink  to="https://wa.me/917510643820"> <FaWhatsapp size={30} style={{ color: "#fff" }}></FaWhatsapp> &nbsp;&nbsp;&nbsp;Whatsapp</NavLink><br></br><br></br>
                <NavLink  to="mailto: arjungangadhar729@gmail.com"> <FaMailBulk size={30} style={{ color: "#fff" }}></FaMailBulk>&nbsp;&nbsp;&nbsp;Email</NavLink><br></br><br></br>
                <NavLink  to="https://github.com/arjungangadhar"> <FaGithub size={30} style={{ color: "#fff" }}></FaGithub>&nbsp;&nbsp;&nbsp;Github</NavLink><br></br><br></br>
                <NavLink  to=""><FaInstagram size={30} style={{ color: "#fff" }}></FaInstagram>&nbsp;&nbsp;&nbsp;Instagram</NavLink><br></br>
            </div>



        </div>

    )
}

export default Contact