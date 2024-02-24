import React from "react";
import RJS from "../Images/react.png";
import NJS from "../Images/node.png";
import Responsive from "../Images/ui-design.png";
import UI from "../Images/layers.png";
import PHP from "../Images/php.png";
import Mongo from "../Images/mongo.svg";

function Skills() {
    return (
        <div className="Skills" id="skills">
            <div className="Skillcon">
                <h5>Skills</h5>
                <div className="skillrow">
                    <div className="skillcard box">
                        <img src={RJS} alt="ReactJS" />
                        <p className="skillname">ReactJS</p>
                        <p className="skilldesc">
                            Passionate ReactJS developer with a strong project
                            portfolio and a commitment to continuous learning.
                        </p>
                    </div>{" "}
                    <div className="skillcard box">
                        <img src={NJS} alt="NodeJS" />
                        <p className="skillname">NodeJS</p>
                        <p className="skilldesc">
                            Enthusiastic Node.js developer with a strong project
                            portfolio and a dedication to ongoing learning and
                            improvement.
                        </p>
                    </div>{" "}
                    <div className="skillcard box">
                        <img src={Responsive} alt="Responsive" />
                        <p className="skillname">Media Queries</p>
                        <p className="skilldesc">
                            Highly skilled in crafting responsive designs using
                            media queries, showcasing a wealth of experience in
                            creating visually appealing and adaptable web
                            interfaces.
                        </p>
                    </div>
                </div>
                <div className="skillrow">
                    <div className="skillcard box">
                        <img src={UI} alt="UI" />
                        <p className="skillname">UI/UX</p>
                        <p className="skilldesc">
                            Proficient in UI/UX design, particularly adept at
                            Figma, and have created numerous designs with a keen
                            eye for user-centric aesthetics and functionality.
                        </p>
                    </div>{" "}
                    <div className="skillcard box">
                        <img src={PHP} alt="PHP" />
                        <p className="skillname">PHP/Laravel</p>
                        <p className="skilldesc">
                            Skilled in PHP and Laravel, I excel in developing
                            and enhancing web applications through hands-on
                            experience in personal projects.
                        </p>
                    </div>
                    <div className="skillcard box">
                        <img src={Mongo} alt="MongoDB" />
                        <p className="skillname">MongoDB</p>
                        <p className="skilldesc">
                            Acquired proficiency in utilizing MongoDB within the
                            MERN Stack during my learning process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
