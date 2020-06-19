import React from "react";
import AboutUs from "../../resources/images/aboutus.jpg";

const About = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-12">
                    <h1 className="display-1">
                        About Us
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img src={AboutUs} alt="Skills For everyone" className="aboutus"/>
                </div>
                <div className="col-lg-6">
                    <div className="text-parallel-to-abt-img">
                        At Future Ace we have a team of highly skilled trainers that<br />
                        hold experience in the field of providing quality education<br />
                        in various streams.<br />
                        <p>
                            The institute provides a wide variety of career options professional courses,
                            short term and long duration certification programs designed by our experts
                            after a thorough and careful due diligence of market trends, job market
                            and industry research. All the courses are taught by experienced and certified
                            profesionals with decades of expertise in the fields. Our trainers constantly
                            keep themselves updated with fast paced and volatile industry needs to keep
                            our pupils ahead of the masses in field of choice.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-below-abt-img">
                    <div className="h4">Advantages of Future Ace</div>
                    <ul>
                        <li className="bg-light my-2">Focused on placement oriented courses and skill development</li>
                        <li className="bg-light my-2">Dedicated Placement division</li>
                        <li className="bg-light my-2">Experienced Faculty</li>
                        <li className="bg-light my-2">A broad spectrum of training courses</li>
                        <li className="bg-light my-2">One of the best multi skill development centre in Delhi</li>
                    </ul>
                    <div className="text-parallel-to-abt-img">
                        We, at Future Ace are proving a future secured education and training
                        opportunities.<br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;