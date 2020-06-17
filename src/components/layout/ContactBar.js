import React from "react";

const ContactBar = () => {
    return (
        <div className="container-fluid p-0 bg-info">
            <div className="row p-0">
                <div className="col-6 p-0 text-center">
                    <a href="mailto:prashubh27@gmail.com"
                       className="text-decoration-none text-dark"
                    >
                        <i className="fas fa-envelope"/><span>  </span>
                        <span className="hide-sm">
                            prashubh27@gmail.com
                        </span>
                    </a>
                </div>
                <div className="col-6 p-0 text-center">
                    <a href="tel:9910581734"
                       className="text-decoration-none text-dark"
                    >
                        <i className="fas fa-phone-alt"/><span>  </span>
                        <span className="hide-sm">
                            +91 9910581734
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactBar;