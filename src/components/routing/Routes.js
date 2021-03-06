import React from "react";
import {Switch , Route} from 'react-router-dom';
import About from "../layout/About";
import ContactUs from "../layout/Contact";
import Courses from "../layout/Courses";
import Franchise from "../layout/Franchise";
import Gallery from "../layout/Gallery";
import Testimonials from "../layout/Testmonials";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contactUs" component={ContactUs}/>
            <Route exact path="/courses" component={Courses}/>
            <Route exact path="/franchise" component={Franchise}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/testimonials" component={Testimonials}/>
        </Switch>
    )
}

export default Routes;