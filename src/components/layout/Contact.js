import React from "react";

const ContactUs = () => {
    return (
        <div className="grad text-light">
            <div className="container pb-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <i className="fas fa-map-marker-alt fa-2x text-light p-3"/>
                        <div className="h2">Location</div>
                        B-2/1449, Durga Puri Chowk<br />
                        Shahdara, Delhi-110093<br />
                        <a href="https://www.google.com/maps/dir//Future+Ace+Technical+Institute,+1449%2FB2+Durgapuri+extension+Durgapuri+Crossing+(,+above+siyaram+showroom,+West+Jyoti+Nagar,+Durgapuri+Extension,+Durga+Puri,+Shahdara,+Delhi+110093/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390cfb88ca412049:0x130f4a16cc1846cd?sa=X&ved=0ahUKEwjtuK3espLrAhWpILcAHa-HA7gQ48ADCCcwAA" target="_blank" className="text-light" rel="noopener noreferrer">
                            Click for Directions
                            <i className="fas fa-location-arrow text-light p-3"/>
                        </a>
                    </div>
                    <div className="col-12 text-center">
                        <i className="fas fa-mobile-alt fa-2x text-light p-3"/>
                        <div className="h2">Call us on</div>
                        +91 9873731755<br/>
                        Or click on
                        <a href="tel:9873731755"
                           className="text-decoration-none text-light"
                        >
                            {' '}<i className="fas fa-phone-alt"/>
                        </a>
                    </div>
                    <div className="col-12 text-center">
                        <i className="fas fa-envelope-open fa-2x text-light p-3"/>
                        <div className="h2">For enquiry </div>
                        Drop a mail at futureace@gmail.com<br/>
                        Or click on
                        <a href="mailto:futureacedelhi@gmail.com"
                           className="text-decoration-none text-light"
                        >
                            {' '}<i className="fas fa-envelope"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;