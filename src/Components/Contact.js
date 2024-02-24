import React from "react";
import Phone from "../Images/phone.png";
import Mail from "../Images/mail.png";
import Signature from "../Images/signature.png";

const Contact = () => {
    const openMail = () => {
        window.location.href = `mailto:${"saiyedfahzain191@gmail.com"}`;
    };

    const openPhone = () => {
        window.location.href = `tel:${"6352749553"}`;
    };

    return (
        <div className="Contact" id="contact">
            <div>
                <p className="contacthead">Let's Talk!</p>
                <p className="subhead">Hit me up, let's make things happen!</p>
            </div>
            <div className="visitcon">
                <div className="visitcard">
                    <pre>
                        <p className="bracs">{"{"}</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <span className="jsonkeys">"name"</span> :{" "}
                            <span className="jsonvalues">"Fahzain Ahmed"</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <span className="jsonkeys">"email"</span> :{" "}
                            <span className="jsonvalues">
                                "saiyedfahzain191@gmail.com"
                            </span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <span className="jsonkeys">"phone"</span> :{" "}
                            <span className="jsonvalues">"+91 6352749553"</span>
                        </p>
                        <p className="bracs">{"}"}</p>
                    </pre>
                    <img src={Signature} alt="Signature" className="sign" />
                </div>
                <div className="contactelement">
                    <div className="phonecontact">
                        <img src={Phone} alt="Phone" className="contactimg" />
                        <p className="reachme">Contact me at</p>
                        <p className="reachme2">+91 6352749553</p>
                        <button className="call" onClick={openPhone}>
                            Call
                        </button>
                    </div>
                    <div className="phonecontact">
                        <img src={Mail} alt="Mail" className="contactimg" />
                        <p className="reachme">Mail me at</p>
                        <p className="reachme2">saiyedfahzain191@gmail.com</p>
                        <button className="call" onClick={openMail}>
                            Mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
