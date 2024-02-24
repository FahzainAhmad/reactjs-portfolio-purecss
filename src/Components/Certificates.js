import React from "react";

const Certificates = () => {
    const GoToCerti = (link) => {
        window.location.href = link;
    };

    return (
        <div className="certicon" id="certificate">
            <h5>Certificates</h5>
            <h1> </h1>
            <div className="certirow">
                <div className="certidiv1">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">Google</p>
                            <span className="certititle">
                                Foundations of User Experience Design
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">01 Oct 2023</span>
                            <button
                                className="verifycerti"
                                onClick={() => {
                                    GoToCerti(
                                        "https://www.coursera.org/account/accomplishments/verify/B37S5XVMLT3Z"
                                    );
                                }}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="certidiv2">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">IBM</p>
                            <span className="certititle">
                                Developing Front End with React.
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">15 Oct 2023</span>
                            <button
                                className="verifycerti"
                                onClick={() => {
                                    GoToCerti(
                                        "https://www.coursera.org/account/accomplishments/verify/MDVCKUASJHXQ"
                                    );
                                }}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certirow side">
                <div className="certidiv3">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">META</p>
                            <span className="certititle">
                                Introduction to Front End Development
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">16 Sept 2023</span>
                            <button
                                className="verifycerti"
                                onClick={() => {
                                    GoToCerti(
                                        "https://www.coursera.org/account/accomplishments/verify/7P56CCGN2QZG"
                                    );
                                }}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="certidiv4">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">META</p>
                            <span className="certititle">React Basics</span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">15 Sept 2023</span>
                            <button
                                className="verifycerti"
                                onClick={() => {
                                    GoToCerti(
                                        "https://www.coursera.org/account/accomplishments/verify/L9QJPS9WHC69"
                                    );
                                }}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
