import React from 'react';
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
function LandingPage() {
    return (
        <div className="container">

            <div className="hero">
                <img
                    src="/myphoto.jpg"
                    alt="Mohit Raj"
                    className="image"
                />

                <h1 className="name">Mohit Raj</h1>

                <h3 className="role">Full Stack Developer</h3>

                <p className="description">
                    Hi, I'm Mohit Raj. I am passionate about React, Java,
                    Spring Boot, AWS and modern web development.
                </p>

                <button className="button">
                    View My Work
                </button>
            </div>

            <div className="navbar">
                <div className="navItem">
                    <FaHome />
                    <span>Home</span>
                </div>

                <div className="navItem">
                    <FaUser />
                    <span>About</span>
                </div>

                <div className="navItem">
                    <FaCode />
                    <span>Projects</span>
                </div>

                <div className="navItem">
                    <FaEnvelope />
                    <span>Contact</span>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;