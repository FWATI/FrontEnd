import React from "react";

const Landing = () => {
    return (
        <div>
            <div className="grad container-fluid">
                <div className="row my_h">
                    <div className="col-md-12 text-center text-light">
                        <div className="display-1 my_heading">
                            Welcome to <span className="text-dark-red">Future Ace</span>
                        </div>
                        <div className="my_heading2">
                            Enrollment <span className="text-dark-red"> |  Training  | </span> Assessment <span className="text-dark-red"> |  Certification  | </span> Placement
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row sep bg-cyan"/>
                <div className="row grad">
                    <div className="col-md-6 LandingCoursesCC"/>
                    <div className="col-md-6">
                        <div className="my-display-2 text-cyan">
                            Computer Courses
                        </div>
                        <p className="text-light desc_courses">
                            We provide different job oriented certificate and diploma courses in computers.
                        </p>
                    </div>
                </div>
                <div className="row sep bg-red"/>
                <div className="row grad">
                    <div className="col-md-6">
                        <div className="my-display-2 text-dark-red">
                            Corporate Accounting
                        </div>
                        <p className="text-light desc_courses">

                        </p>
                    </div>
                    <div className="col-md-6 LandingCoursesAccounting"/>
                </div>
                <div className="row sep bg-cyan"/>
                <div className="row grad">
                    <div className="col-md-6 LandingCoursesFashionDesign"/>
                    <div className="col-md-6">
                        <div className="my-display-2 text-cyan">
                            Fashion Designing
                        </div>
                        <p className="text-light desc_courses">
                            Good Design attracts more people thus more market.
                        </p>
                    </div>
                </div>
                <div className="row sep bg-red"/>
                <div className="row grad">
                    <div className="col-md-6">
                        <div className="my-display-2 text-dark-red">
                            Spoken English
                        </div>
                        <p className="text-light desc_courses">
                            Better English can make you stand out from the crowd <br/>
                            and help in a better personality too.
                        </p>
                    </div>
                    <div className="col-md-6 LandingCoursesSpokenEnglish"/>
                </div>
                <div className="row sep bg-cyan"/>
                <div className="row grad">
                    <div className="col-md-6 LandingCoursesECCE"/>
                    <div className="col-md-6">
                        <div className="my-display-2 text-cyan">
                            ECCE
                        </div>
                        <p className="text-light desc_courses">
                            Now, who doesn't like kids?
                        </p>
                    </div>
                </div>
                <div className="row sep bg-red"/>
                <div className="row grad">
                    <div className="col-md-6">
                        <div className="my-display-2 text-dark-red">
                            Beauty Culture
                        </div>
                        <p className="text-light desc_courses">
                            Make-Up
                        </p>
                    </div>
                    <div className="col-md-6 LandingCoursesBeautyCulture"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;