import React from "react";
import Pic1 from "../../resources/images/1 (1).JPG";
import Pic2 from "../../resources/images/1 (2).jpg";
import Pic3 from "../../resources/images/1 (3).jpg"



const Gallery = () => {
    return (
        <div className="container">
            <div className="row">
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
        </div>
    )
}

export default Gallery;