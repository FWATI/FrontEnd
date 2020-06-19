import React from "react";
import logo from '../../resources/images/logo.jpeg'

const Footer = () => {
    return (
        <div className="container-fluid" id="footer">
            <div className="row text-center">
                <div className="col-12">
                    <img src={logo} alt="Logo" className="footer-logo"/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    Address
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    Quick Links
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    Icons
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    Watermark
                </div>
            </div>
        </div>
    )
}

export default Footer;