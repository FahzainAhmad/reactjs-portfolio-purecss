import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SocialBar from "./Components/SocialBar";
import ResumeIcon from "./Images/resume.png";
import ContactIcon from "./Images/contact.png";
import ProgramIcon from "./Images/myava.png";
import Skills from "./Components/Skills";
import SocialMobile from "./Components/SocialBarMobile";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Certificates from "./Components/Certificates";
import NavMobile from "./Components/NavMobile";

function App() {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const GoToResume = () => {
        window.location.href =
            "https://drive.google.com/drive/folders/1N5lutZuH6VhU97oagVjpeZNt9hnVNGh6?usp=sharing";
    };

    const GoToContact = () => {
        window.location.href = "#contact";
    };

    const [titletext, setTitleText] = useState("H");

    useEffect(() => {
        setTimeout(() => {
            setTitleText("Hi");
        }, 600);
        setTimeout(() => {
            setTitleText("Hi!");
        }, 800);
        setTimeout(() => {
            setTitleText("Hi! I");
        }, 1000);
        setTimeout(() => {
            setTitleText("Hi! I a");
        }, 1200);
        setTimeout(() => {
            setTitleText("Hi! I am");
        }, 1400);
        setTimeout(() => {
            setTitleText("Hi! I am F");
        }, 1600);
        setTimeout(() => {
            setTitleText("Hi! I am Fa");
        }, 1800);
        setTimeout(() => {
            setTitleText("Hi! I am Fax");
        }, 2000);
        setTimeout(() => {
            setTitleText("Hi! I am Faxh");
        }, 2200);
        setTimeout(() => {
            setTitleText("Hi! I am Fax");
        }, 2400);
        setTimeout(() => {
            setTitleText("Hi! I am Fa");
        }, 2600);
        setTimeout(() => {
            setTitleText("Hi! I am Fah");
        }, 2800);
        setTimeout(() => {
            setTitleText("Hi! I am Fahz");
        }, 3000);
        setTimeout(() => {
            setTitleText("Hi! I am Fahza");
        }, 3200);
        setTimeout(() => {
            setTitleText("Hi! I am Fahzai");
        }, 3400);
        setTimeout(() => {
            setTitleText("Hi! I am Fahzain");
        }, 3600);
    }, []);

    return (
        <div className="App">
            <SocialBar />
            <div className="Home" id="home">
                <NavBar scrollFunction={scrollToElement} />
                <NavMobile scrollFunction={scrollToElement} />
                <div className="homecon">
                    <div className="alltexts">
                        <div className="wintopcon">
                            <div className="closebtn"></div>
                            <div
                                className="closebtn"
                                style={{ backgroundColor: "#fabf2f" }}
                            ></div>
                            <div
                                className="closebtn"
                                style={{ backgroundColor: "#29cd3f" }}
                            ></div>
                        </div>
                        <p className="typewriter">
                            {titletext}
                            <span className="typewritercursor">|</span>
                        </p>
                        <p className="titledesc">
                            Dedicated 3rd-year student with a dynamic skill set.
                            Experienced in utilizing
                            <span className="swappingtext"></span>.
                            <p>
                                Proven in translating creative concepts into
                                visually appealing web solutions, showcasing
                                strong problem-solving skills and attention to
                                detail. Successfully applied expertise during a
                                3-month work experience, contributing to
                                innovative and responsive web designs.
                            </p>
                        </p>
                        <div className="mainbtncon">
                            <button className="mainbtn" onClick={GoToContact}>
                                <img
                                    src={ContactIcon}
                                    alt="Resume"
                                    style={{ width: "1.3rem" }}
                                />
                                Contact Me
                            </button>
                            <button className="mainbtn" onClick={GoToResume}>
                                <img
                                    src={ResumeIcon}
                                    alt="Resume"
                                    style={{ width: "1.3rem" }}
                                />
                                Resume
                            </button>
                        </div>
                    </div>
                    <div className="mainimg">
                        <img
                            src={ProgramIcon}
                            className="main-img"
                            alt="Programmer"
                        />
                    </div>
                </div>
                <SocialMobile />
            </div>
            <Skills />
            <Certificates />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
