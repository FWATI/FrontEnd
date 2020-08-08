import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container-fluid grad text-light">
                <div className="row text-center">
                    <div className="col-6 text-left pad_footer">
                        <b>Shahdara Branch:</b><br />
                        B-2/1449, Durga Puri Chowk<br />
                        Shahdara, Delhi-110093<br />
                        <b>Laxmi Nagar Branch:</b><br />
                        WA-119, First Floor<br/>
                        Opposite Shakrpur School Block <br/>
                        Delhi - 110092<br/>
                    </div>
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <a href="https://www.facebook.com/pages/category/Educational-Consultant/Future-Ace-Delhi-1716248581795109/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-square fa-3x"/><br/>
                                    </a>
                                </div>
                                <div className="col-md-3">
                                    <a href="https://www.instagram.com/futureacetechnicalinstitute/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-3x"/><br/>
                                    </a>
                                </div>
                                <div className="col-md-3">
                                    <a href="https://twitter.com/FutureAceDelhi" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter-square fa-3x"/><br/>
                                    </a>
                                </div>
                                <div className="col-md-3">
                                    <a href="https://www.youtube.com/channel/UCCFqlwSG_WRv4b0Zyorbaog" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube fa-3x"/><br/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        Quick Links
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        Created by Prashubh Atri
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;