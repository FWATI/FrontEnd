import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../../resources/images/logo.jpeg'

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-xl-1"/>
                    <div className="col-xl-3 text-center p-0 m-0">
                        <Link to='/'>
                            <img src={logo} className="logo" alt=""/>
                        </Link>
                    </div>
                    <div className="col-xl-8 text-center">
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">Home</NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/about">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/courses">Courses</NavLink>
                                    </NavItem>
                                    {/* <NavItem>
                                        <NavLink href="/testimonials">Testimonials</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/gallery">Gallery</NavLink>
                                    </NavItem> */}
                                    <NavItem>
                                        <NavLink href="https://franchiseform.netlify.app/">Franchise</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/contactUs">Contact Us</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
