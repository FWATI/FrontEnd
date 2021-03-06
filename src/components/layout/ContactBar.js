import React from "react";

const ContactBar = () => {
    return (
        <div>
            <div className="container-fluid p-0 grad text-contactbar text-light">
                <div className="row p-0">
                    <div className="col-6 p-0 text-center">
                        <a href="mailto:futureacedelhi@gmail.com"
                           className="text-decoration-none text-light"
                        >
                            <i className="fas fa-envelope"/><span>  </span>
                            <span className="hide-sm">
                            futureacedelhi@gmail.com
                        </span>
                        </a>
                    </div>
                    <div className="col-6 p-0 text-center">
                        <a href="tel:9873731755"
                           className="text-decoration-none text-light"
                        >
                            <i className="fas fa-phone-alt"/><span>  </span>
                            <span className="hide-sm">
                            +91 9873731755
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBar;