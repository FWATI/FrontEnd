import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container-fluid grad text-light">
                <div className="row text-center">
                    <div className="col-6 text-left">
                        <div className="pad_footer">
                            <ul>
                                <li>
                                    <b>Shahdara Branch:</b><br />
                                    B-2/1449, Durga Puri Chowk<br />
                                    Shahdara, Delhi-110093<br />
                                </li>
                                <li>
                                    <b>Laxmi Nagar Branch:</b><br />
                                    WA-119, First Floor<br/>
                                    Opposite Shakrpur School Block <br/>
                                    Delhi - 110092<br/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 p-1">
                                    <a href="https://www.facebook.com/pages/category/Educational-Consultant/Future-Ace-Delhi-1716248581795109/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-square fa-3x"/><br/>
                                    </a>
                                </div>
                                <div className="col-md-3 p-1">
                                    <a href="https://www.instagram.com/futureacetechnicalinstitute/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-3x"/><br/>
                                    </a>
                                </div>
                                <div className="col-md-3 p-1">
                                    <a href="https://twitter.com/FutureAceDelhi" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter-square fa-3x"/><br/>
                                    </a>
                                </div>
                                <div className="col-md-3 p-1">
                                    <a href="https://www.youtube.com/channel/UCCFqlwSG_WRv4b0Zyorbaog" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube fa-3x"/><br/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12 text-dark-red">
                        <a href="/" className="text-light">
                            Home |
                        </a>
                        <a href="/about" className="text-dark-red">
                            | About |
                        </a>
                        <a href="/courses" className="text-light">
                            | Courses |
                        </a>
                        <a href="/testimonials" className="text-dark-red">
                            | Testimonials |
                        </a>
                        <a href="/gallery" className="text-light">
                            | Gallery |
                        </a>
                        <a href="/franchise" className="text-dark-red">
                            | Franchise |
                        </a>
                        <a href="/contactUs" className="text-light">
                            | Contact Us
                        </a>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        Created by Prashubh Atri
                        <a href="https://github.com/PrashubhAtri"> <i className="fab fa-github text-light fa-md"/> </a><br/>
                        Copyright <i className="far fa-copyright"/> 2020  All Rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;