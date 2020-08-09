import React from "react";

const Franchise = () => {
    return (
        <div className="grad text-light">
            <div className="container p-5">
                <div className="row">
                    <div className="col-xl-6">
                        Advantages
                    </div>
                    <div className="col-xl-6 box-from">
                        <form name="franchise" method="POST" data-netlify="true">
                            <p className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Applicant Name: "/>
                            </p>
                            <p className="form-group">
                                <input type="text" name="fatherName" className="form-control" placeholder="Father/Husband Name: "/>
                            </p>
                            <p className="form-group">
                                <select className="form-control" id="exampleFormControlSelect1" name="gender">
                                    <option>--Select Gender--</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </p>
                            <p className="form-group">
                                <input type="date" name="dob" placeholder="DOB" className="form-control"/>
                            </p>
                            <p className="form-group">
                                <input type="email" name="email" placeholder="Email" className="form-control"/>
                            </p>
                            <p className="form-group">
                                <input type="tel" name="contactNumber" placeholder="Contact Number" className="form-control"/>
                            </p>
                            <p className="form-group">
                                <input type="tel" name="altContactNumber" placeholder="Alternative Contact Number" className="form-control"/>
                            </p>
                            <p className="form-group">
                                <input type="text" name="qualification" placeholder="Highest Qualification" className="form-control"/>
                            </p>
                            <p className="form-group">
                                <input type="text" name="centreName" placeholder="Centre Name" className="form-control"/>
                            </p>
                            <p className="form-group">
                                <input type="text" name="proposedCentreName" placeholder="Proposed Centre Name" className="form-control"/>
                            </p>
                            <p className="form-group">
                                <input type="text" name="address" className="form-control" placeholder="Address"/>
                            </p>
                            <p className="form-group">
                                <input type="text" name="info" className="form-control" placeholder="Any other Info"/>
                            </p>
                            <button type="submit" className="btn btn-success form-control">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Franchise;