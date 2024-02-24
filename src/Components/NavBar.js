import React from "react";
import Me from "../Images/Me.png";

function NavBar(props) {
    return (
        <div className="navbar">
            <img src={Me} className="brandlogo" alt="Brand Logo" />
            <div className="navelements">
                <span
                    onClick={() => {
                        props.scrollFunction("home");
                    }}
                >
                    Home
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("skills");
                    }}
                >
                    Skills
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("certificate");
                    }}
                >
                    Certificates
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("projects");
                    }}
                >
                    Projects
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("contact");
                    }}
                >
                    Contact
                </span>
            </div>
        </div>
    );
}

export default NavBar;
