
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Steps.css";

const steps = [
    {
        id: 1,
        title: "Browse Jobs",
        description: "Easy search by category",
        link: "https://livedemo00.template-help.com/wt_prod-20039/job-listing.html",
        icon: "bi-search",
    },
    {
        id: 2,
        title: "Find Your Vacancy",
        description: "Choose a suitable job",
        link: "https://livedemo00.template-help.com/wt_prod-20039/job-details.html",
        icon: "bi-briefcase",
    },
    {
        id: 3,
        title: "Submit Resume",
        description: "Get a personal job offer",
        link: "https://livedemo00.template-help.com/wt_prod-20039/submit-resume.html",
        icon: "bi-file-earmark-text",
    },
];

function Steps() {
    return (
        <section className="steps-section">
            <Container>
                <div className="steps-heading text-center">
                    <span className="steps-label">HOW IT WORKS</span>
                    <h2>Just 3 Easy Steps to New Capabilities</h2>
                </div>

                <Row className="g-4 justify-content-center">
                    {steps.map((step) => (
                        <Col key={step.id} xs={12} md={4}>
                            <div className="step-card text-center">
                                <div className="step-icon-wrapper">
                                    <svg
                                        className="step-circle-svg"
                                        viewBox="-1 -1 102 102"
                                        aria-hidden="true"
                                    >
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="50"
                                            fill="none"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>

                                    <i className={`bi ${step.icon} step - icon`}></i>

                                    <span className="step-number">
                                        {step.id}
                                    </span>
                                </div>

                                <h3>
                                    <a href={step.link}>
                                        {step.title}
                                    </a>
                                </h3>

                                <p>{step.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Steps;
