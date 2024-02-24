import React from "react";
import Procard from "./Procard";

const Projects = () => {
    return (
        <div className="Skills" id="projects">
            <h5 className="heads">Projects</h5>
            <h1> </h1>
            <div className="projectsbtncon">
                <Procard
                    title="This Portfolio"
                    date="17 Feb 2024"
                    frontdesc="ReactJS portfolio with advanced CSS, responsive design, and modular components for a polished user experience."
                    backdesc="Sleek ReactJS portfolio featuring cutting-edge CSS and modular components for a seamless, responsive showcase of skills and projects."
                    tags={["ReactJS", "Responsive"]}
                    git="https://github.com/FahzainAhmad/tictactoe-realtime-nodejs-express-reactjs-socketio"
                />
                <Procard
                    title="Realtime TicTacToe"
                    date="10 Feb 2024"
                    frontdesc="A real-time Tic-Tac-Toe game using NodeJS, ExpressJS, ReactJS, and Socket.IO."
                    backdesc="Designed to enhance coding skills, it features smart algorithms, multiplayer capability, and a responsive ReactJS interface."
                    tags={[
                        "ReactJS",
                        "NodeJS",
                        "ExpressJS",
                        "SocketIO",
                        "MediaQueries",
                    ]}
                    git="https://github.com/FahzainAhmad/tictactoe-realtime-nodejs-express-reactjs-socketio"
                />
                <Procard
                    title="Github Profile Viewer"
                    date="21 Nov 2023"
                    frontdesc=" This ReactJS project allows you to explore GitHub user profiles and their repositories with ease without needing to open github."
                    backdesc="Offering an intuitive user interface, GitHub integration, and error handling for a streamlined showcase of user details and repositories."
                    tags={["ReactJS", "Responsive", "Mobile First"]}
                    git="https://github.com/FahzainAhmad/github-profile-viewer-reactjs"
                />
                <Procard
                    title="NewsDash - Live News"
                    date="09 Aug 2023"
                    frontdesc="Built News Dash with ReactJS, harnessing NewsAPI and FetchAPI for real-time news delivery."
                    backdesc="Developed News Dash, a ReactJS app using NewsAPI and FetchAPI for real-time news with efficient headline and article delivery."
                    tags={["ReactJS", "Responsive", "Mobile First"]}
                    git="https://github.com/FahzainAhmad/tictactoe-realtime-nodejs-express-reactjs-socketio"
                />
            </div>
            <div className="projectsbtncon">
                <Procard
                    title="Quote Generator"
                    date="03 Mar 2023"
                    frontdesc="Schnizel is a quote generator. I have used Rest API in order to get quotes.."
                    backdesc="It is completely responsive and has TTS built-in as an accessibility feature. Almost all styling is done using Tailwindcss."
                    tags={[
                        "HTML",
                        "TailwindCSS",
                        "JS",
                        "FetchAPI",
                        "TTS",
                        "Responsive",
                    ]}
                    git="https://github.com/FahzainAhmad/tailwindcss-quote-api-project?tab=readme-ov-file"
                    live="http://schnizelquote.000webhostapp.com"
                />
                <Procard
                    title="Live Weather"
                    date="09 Mar 2023"
                    frontdesc="Compact weather app, responsive with OpenWeatherAPI for real-time updates."
                    backdesc="Simple weather app using OpenWeatherAPI, built with HTML, CSS, and JavaScript for real-time updates in any web browser."
                    tags={["OpenweatherAPI", "Mobile First", "MediaQueries"]}
                    git="https://github.com/FahzainAhmad/tictactoe-realtime-nodejs-express-reactjs-socketio"
                    live="https://ndr4szqanmqia47zanlvcq.on.drv.tw/Rex%20Weather%20App/"
                />
                <Procard
                    title="mCash Landing Page"
                    date="27 Feb 2023"
                    frontdesc="Crafted a sleek mCash app landing page with TailwindCSS for a competition."
                    backdesc="I designed a sleek and modern landing page for the mCash app using TailwindCSS for styling and responsiveness. This project was created for a competition."
                    tags={["HTML", "TailwindCSS", "Mobile First", "Responsive"]}
                    git="https://github.com/FahzainAhmad/tailwindCSS-landing-page"
                    live="https://mcashassignmentsite.000webhostapp.com"
                />
                <Procard
                    title="Laravel Management Sytem"
                    date="01 Mar 2023"
                    frontdesc="Laravel-based Database Project: Streamlined web app for attendance, marksheets, timetables and more."
                    backdesc="Newland Database Project: A Laravel-based web app for streamlined management of attendance, marksheets, timetables, complaints, and more, featuring an intuitive admin and user interface."
                    tags={["Laravel", "Bootstrap", "Breeze"]}
                    git="https://github.com/FahzainAhmad/laravel-university-management-project"
                />
            </div>
        </div>
    );
};

export default Projects;
