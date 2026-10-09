
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Pricing.css";

const plans = [
    {
        id: 1,
        name: "Startup",
        subtitle: "7 Days Free",
        price: "$59",
        cents: "00",
        jobs: [
            "Post 8 Jobs",
            "5 Highlighted Job Posts",
            "Browse Your Job Listings",
            "Access to Job Posting Stats",
            "Email Support",
            "Jobs Expire In 90 Days",
        ],
        featured: false,
    },
    {
        id: 2,
        name: "Company",
        subtitle: "Most Popular",
        price: "$89",
        cents: "00",
        jobs: [
            "Post 28 Jobs",
            "10 Highlighted Job Posts",
            "Edit Your Job Listings",
            "Access to Job Posting Stats",
            "Email and Phone Support",
            "Jobs Expire In 180 Days",
        ],
        featured: true,
    },
    {
        id: 3,
        name: "Enterprise",
        subtitle: "Premium Plan",
        price: "$199",
        cents: "00",
        jobs: [
            "Post 35 Jobs",
            "15 Highlighted Job Posts",
            "Replace Your Job Listings",
            "Access to Job Posting Stats",
            "24/7 Support",
            "Jobs Expire In 250 Days",
        ],
        featured: false,
    },
];

function Pricing() {
    return (
        <section className="pricing-section">
            <Container>
                <div className="pricing-heading text-center">
                    <span className="pricing-label">OUR PRICING</span>
                    <h2>Choose Your Perfect Plan</h2>
                    <p>
                        Find the right plan to grow your business
                        and hire the best talent.
                    </p>
                </div>

                <Row className="g-4 justify-content-center">
                    {plans.map((plan) => (
                        <Col key={plan.id} xs={12} md={6} lg={4}>
                            <Card
                                className={`pricing - card h - 100 ${plan.featured ? "featured-plan" : ""
                                    } `}
                            >
                                {plan.featured && (
                                    <div className="popular-badge">
                                        MOST POPULAR
                                    </div>
                                )}

                                <Card.Body className="text-center">
                                    <h3 className="plan-name">
                                        {plan.name}
                                    </h3>

                                    <p className="plan-subtitle">
                                        {plan.subtitle}
                                    </p>

                                    <div className="plan-price">
                                        <span className="price-main">
                                            {plan.price}
                                        </span>
                                        <span className="price-cents">
                                            {plan.cents}
                                        </span>
                                    </div>

                                    <p className="price-period">
                                        per subscription
                                    </p>

                                    <hr />

                                    <ul className="plan-features">
                                        {plan.jobs.map((job, index) => (
                                            <li key={index}>
                                                <i className="bi bi-check-circle-fill"></i>
                                                <span>{job}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`pricing - btn ${plan.featured
                                                ? "pricing-btn-primary"
                                                : ""
                                            } `}
                                    >
                                        Choose Plan
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Pricing;
