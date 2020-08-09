import React from "react";

const Franchise = () => {
    return (
        <div className="grad text-light">
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-xl-6 text-center p-5">
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
                    <div className="col-xl-4 box-from">
                        <form method="POST" data-netlify="true">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Applicant Name: "/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="fatherName" className="form-control" placeholder="Father/Husband Name: "/>
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="exampleFormControlSelect1" name="gender">
                                    <option>--Select Gender--</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="date" name="dob" placeholder="DOB" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" name="contactNumber" placeholder="Contact Number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" name="altContactNumber" placeholder="Alternative Contact Number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="qualification" placeholder="Highest Qualification" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="centreName" placeholder="Centre Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="proposedCentreName" placeholder="Proposed Centre Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="address" className="form-control" placeholder="Address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="info" className="form-control" placeholder="Any other Info"/>
                            </div>
                            <button type="submit" className="btn btn-success form-control">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Franchise;