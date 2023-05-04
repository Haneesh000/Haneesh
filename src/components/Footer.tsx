import React from "react";
import "../CSS/footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return <footer className="section-gray" style={{
        backgroundColor: "rgb(215, 215, 215)",
    }}>
        <div className="title">
            That's it for this page...
            {/*Well if you need to contact me you can by <Link to="/contact">clicking here</Link>!*/}
        </div>
        <hr/>
        <div className="content">
            <div className="social-media-links">
                <a href="https://github.com/Haneesh000" target="_blank" rel="noreferrer" className="sm-link">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://twitter.com/Haneesh_HL" target="_blank" rel="noreferrer" className="sm-link">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://instagram.com/haneesh.in" target="_blank" rel="noreferrer" className="sm-link">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
}

export default Footer;
