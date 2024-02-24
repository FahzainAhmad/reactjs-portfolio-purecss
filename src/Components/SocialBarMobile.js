import React from "react";
import Gitlogo from "../Images/github.png";
import Linkedin from "../Images/linkedin.png";
import Behancelogo from "../Images/behance.png";

const GoToLinkedin = () => {
    window.location.href =
        "https://www.linkedin.com/in/fahzain-ahmed-0b4a33193";
};

const GoToGit = () => {
    window.location.href = "https://github.com/FahzainAhmad/";
};

const GoToBehance = () => {
    window.location.href = "https://www.behance.net/fahzainahmad";
};

function SocialBarMobile() {
    return (
        <div className="socialbarmobile">
            <h5>My Socials</h5>
            <div className="socialcon">
                <img src={Gitlogo} alt="Github" onClick={GoToGit} />
                <img src={Linkedin} alt="Linkedin" onClick={GoToLinkedin} />
                <img src={Behancelogo} alt="Behance" onClick={GoToBehance} />
            </div>
        </div>
    );
}

export default SocialBarMobile;
