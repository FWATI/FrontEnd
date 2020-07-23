import React from "react";
import logo from '../../resources/images/logo.jpeg'

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-12 m-0 p-0">
                    <img src={logo} alt="Logo" className="footer-logo"/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-6 text-left pad_footer">
                    <b>Durga Puri Branch, Shahdara:</b><br />
                    B-2/1449, Durga Puri Chowk<br />
                    Shahdara, Delhi-110093<br />
                    <b>Laxmi Nagar Branch:</b><br />
                    WA-119, First Floor<br/>
                    Opposite Shakrpur School Block <br/>
                    Delhi - 110092<br/>
                </div>
                <div className="col-6 text-right">
                    Icons
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    Quick Links
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