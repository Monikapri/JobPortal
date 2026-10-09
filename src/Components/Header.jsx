
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"

import Logo1 from "../assets/logo-default-286x52.png";
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`custom-navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`} >
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={Logo1}
                        alt="Logo"
                        className="header-logo"
                        width={`200px`}
                    />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    aria-label="Toggle navigation"
                />

                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav className="align-items-start align-items-lg-center gap-2">

                        <NavDropdown
                            title="For Candidates"
                            id="candidates-dropdown"
                            className="custom-nav-dropdown"
                        >
                            <NavDropdown.Item href="#blog-post">
                                Job Listing
                            </NavDropdown.Item>


                            <NavDropdown.Item href="#action">
                                Job Listing Full
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#something">
                                Job Details
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#something">
                                Job Details
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#something">
                                Job Details
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#separated">
                                Submit Resume
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="For Employers"
                            id="employers-dropdown"
                            className="custom-nav-dropdown"
                        >
                            <NavDropdown.Item href="#blog-post">
                                Blog post
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action">
                                Another action
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#something">
                                Something else here
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#separated">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Blog"
                            id="blog-dropdown"
                            className="custom-nav-dropdown"
                        >
                            <NavDropdown.Item href="#blog-post">
                                Blog post
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action">
                                Another action
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#something">
                                Something else here
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#separated">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Pages"
                            id="pages-dropdown"
                            className="custom-nav-dropdown"
                        >
                            <NavDropdown.Item href="#blog-post">
                                Blog post
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action">
                                Another action
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#something">
                                Something else here
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#separated">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Link
                            to="/signup"
                            className="btn btn-grey text-white fw-bold ms-lg-2 my-2 my-lg-0 target-btn"
                        >
                            Sign Up
                        </Link>

                        <Link
                            to="/contact-support"
                            className="btn btn-grey text-white fw-bold ms-lg-2 my-2 my-lg-0 target-btn"
                        >
                            Contact Support
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

