import React from "react";

const Landing = () => {
    return (
        <div>
            <div className="grad container-fluid">
                <div className="row my_h">
                    <div className="col-md-12 text-center text-light">
                        <div className="my_heading">
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
                            We provide Diploma as well as certificate courses for students who wish to make a career in I.T. industry.
                            We also provide hands-on practice to students for getting a better understanding of the computers.
                            Placements are readily provide post completion of the course.
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
                            Corporate Accounting Course is designed for students who wish to make a career in accounting profession.
                            It includes basic computer, tally, advance tally, GST return, ITR filing and Busy software.
                            We also provide live projects to students for hands-on experience in Accounting.
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
                            Fashion Deisgning is one of the top most thrilling career option is today's world.
                            It is considered as the best industry for people who are creative and striving for innovation.
                            It promises Glamour, Fame, Success and High pay-roll to talented people.
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
                            In the course, We provide deep understanding of the language, so that after completion of the course
                            you are guaranteed to be able to speak fluent english.
                            Which Boost one's personality and helps in overall development.
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
                            This is an idle course specially designed to meet the requirements for
                            nursery/primary teachers in schools.
                            It helps you to secure a job in public as well as private schools all over india.
                            It helps one to acquire adequate knowledge and understanding of teaching profession, practices
                            and methodologies.
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
                            We provide complete course from basic to advance levels of Make-up.
                            After completion of this course, You can work as a make-up artist in the booming
                            beauty and wellness industry.
                            You can also start your own make-up saloon and earn handsomely.
                        </p>
                    </div>
                    <div className="col-md-6 LandingCoursesBeautyCulture"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;