import React from "react";

import "../CSS/styles.css";
import "../CSS/contact.css";

function Contact() {
    return <div className="contact">
        <form className="contactForm">
            <div className="section-gray">
                <div className="heading">Contact @Haneesh for work or general enquiries</div>
            </div>
            <div className="contact-content">
                <div className="form-container">
                    <label htmlFor="name">Your Name: </label>
                    <input type="text" name="name" id="name" className="form-inp" />
                </div>
                <div className="form-container">
                    <label htmlFor="email">Your Email: </label>
                    <input type="email" name="email" id="email" className="form-inp" />
                    <div className="emailHelp" style={{fontSize: "15px", color: "#191970", fontFamily: "Poppins"}}>I'll never share your email with anyone else</div>
                </div>
                <div className="form-container">
                    <label htmlFor="phone">Your Phone (with country code): </label>
                    <input type="number" name="phone" id="phone" className="form-inp" />
                    <div className="emailHelp" style={{fontSize: "15px", color: "#191970", fontFamily: "Poppins"}}>I'll never share your phone number with anyone else</div>
                </div>
                <div className="form-container">
                    <label htmlFor="enquiry">Enquiry: </label>
                    <br/><br/>
                    <textarea name="enquiry" id="enquiry" />
                </div>
                <div className="form-container" style={{fontSize: "1rem"}}>
                    <input type="checkbox" name="project" id="project"/>
                    <label htmlFor="project" style={{marginLeft: "0.5rem"}}>I want you to work on a project with me</label>
                </div>
                <div className="form-container">
                    <button type="submit" className="btn submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
}

export default Contact;
