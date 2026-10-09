
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer text-white">
            <Container className="footer-content">
                <Row className="g-4">

                    {/* Quick Links */}
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <h5>Quick Links</h5>

                        <ul className="row list-unstyled">
                            <li className="col-6 mb-2">
                                <i className="bi bi-arrow-right text-white me-2"></i>
                                Browse Jobs
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-arrow-right text-white me-2"></i>
                                Browse Categories
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-arrow-right text-white me-2"></i>
                                Companies
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-arrow-right text-white me-2"></i>
                                Post a Job
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-arrow-right text-white me-2"></i>
                                Find a Candidate
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-arrow-right text-white me-2"></i>
                                Pricing Table
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-arrow-right text-white me-2"></i>
                                FAQ
                            </li>
                        </ul>
                    </Col>

                    {/* Recent News */}
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <h5>Recent News Posts</h5>

                        <ul className="list-unstyled news-list">
                            <li className="mb-3">
                                <span className="news-date">25 April</span>
                                <p className="mb-0">
                                    Canada adds 12,500 jobs in modest July rebound
                                </p>
                            </li>

                            <li className="mb-3">
                                <span className="news-date">14 April</span>
                                <p className="mb-0">
                                    Outsourcing vs. In-House Digital Marketing
                                </p>
                            </li>
                        </ul>
                    </Col>

                    {/* Popular Cities */}
                    <Col xs={12} md={12} lg={4} className="mb-3">
                        <h5>Jobs in Popular Cities</h5>

                        <ul className="row list-unstyled">
                            <li className="col-6 mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                San Francisco
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Washington
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Sacramento
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                New York
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Ontario
                            </li>
                            <li className="col-6 mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Chicago
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>

            {/* Copyright */}
            <div className="textpart mt-3 py-3">
                <Container>
                    <hr className="border-light opacity-50 mt-0" />
                    <p className="text-center mb-0">
                        JobsFactory © 2026 Privacy Policy
                    </p>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;

