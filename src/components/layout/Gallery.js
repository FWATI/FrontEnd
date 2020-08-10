import React from "react";
import Pic1 from "../../resources/images/1 (1).jpeg";
import Pic2 from "../../resources/images/1 (2).jpeg";
import Pic3 from "../../resources/images/1 (3).jpeg";
import Pic4 from "../../resources/images/1 (4).jpeg";
import Pic5 from "../../resources/images/1 (5).jpeg";
import Pic6 from "../../resources/images/1 (6).jpeg";
import Pic7 from "../../resources/images/1 (7).jpeg";
import Pic8 from "../../resources/images/1 (8).jpeg";
import Pic9 from "../../resources/images/1 (9).jpeg";
import Pic10 from "../../resources/images/1 (10).jpeg";
import Pic11 from "../../resources/images/1 (11).jpeg";
import Pic12 from "../../resources/images/1 (12).jpeg";
import Pic13 from "../../resources/images/1 (13).jpeg";
import Pic14 from "../../resources/images/1 (14).jpeg";
import Pic15 from "../../resources/images/1 (15).jpeg";
import Pic16 from "../../resources/images/1 (16).jpeg";
import Pic17 from "../../resources/images/1 (17).jpeg";


const Gallery = () => {
    return (
        <div className="container">
            <div className="row gallery_cont">
                <div className="col-md-12">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Pic1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic4} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic5} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic6} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic7} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic8} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic9} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic10} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic11} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic12} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic13} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic14} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic15} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic16} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Pic17} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>


            <div className="row">

            </div>
        </div>
    )
}

export default Gallery;