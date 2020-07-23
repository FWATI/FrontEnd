import React from "react";

const Landing = () => {
    return (
        <div>
            <div className="display-1 text-center grad text-light">
                COURSES:
            </div>
            <div className="container-fluid">
                <div className="row sep bg-green"/>
                <div className="row grad">
                    <div className="col-md-6 LandingCoursesCC"/>
                    <div className="col-md-6">
                        <div className="my-display-2 text-green">
                            Computer Courses
                        </div>
                        <p className="text-light desc_courses">
                            Computers have changed our lives so much.
                        </p>
                    </div>
                </div>
                <div className="row sep bg-blue"/>
                <div className="row grad">
                    <div className="col-md-6">
                        <div className="my-display-2 text-blue">
                            Graphic Designing
                        </div>
                        <p className="text-light desc_courses">
                            Good Design attracts more people thus more market.
                        </p>
                    </div>
                    <div className="col-md-6 LandingCoursesAccounting"/>
                </div>
                <div className="row sep bg-orange"/>
                <div className="row grad">
                    <div className="col-md-6 LandingCoursesFashionDesign"/>
                    <div className="col-md-6">
                        <div className="my-display-2 text-orange">
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
                        <div className="my-display-2 text-red">
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
                <div className="row sep bg-purple"/>
                <div className="row grad">
                    <div className="col-md-6">
                        <div className="my-display-2 text-purple">
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