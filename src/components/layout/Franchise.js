import React from "react";
import ContactForm from "./Form";

const Franchise = () => {
    return (
        <div className="grad text-light">
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-xl-6 text-center p-4">
                        <div className="franchise-head text-dark-red">Business Opportunities:</div>
                        <div className="franchise-desc">
                            Anyone having a passion for education and training could partner with us as a franchise.
                            As a Future Ace franchise you will be involved in more than simply running a learning center,
                            you will have an active role in creating positive change in students and their families life.
                            If you are interested by what we have achieved and would love to become a part of the growing network,
                            Contact Us by filling out this form or Call on
                            <a href="tel:9873731755" className="text-light text-cyan">+91-9873731755</a>.
                        </div>
                    </div>


                    <div className="col-xl-6">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Franchise;