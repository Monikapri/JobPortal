
import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NewCandidates.css";

const candidates = [
    {
        id: 1,
        name: "Amanda Cook",
        location: "Los Angeles, California",
        designation: "Junior Web Designer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 2,
        name: "John Smith",
        location: "New York, USA",
        designation: "Frontend Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 3,
        name: "Sarah Wilson",
        location: "Chicago, USA",
        designation: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

function NewCandidates() {
    return (
        <section className="new-candidates-section py-5">
            <Container>
                <div className="mb-4">
                    <h2>New Candidates</h2>
                    <p>Meet our recently registered candidates</p>
                </div>

                <Row className="g-4">
                    {candidates.map((candidate) => (
                        <Col key={candidate.id} xs={12} md={6} lg={4}>
                            <Card className="candidate-card h-100">
                                <Card.Body className="d-flex align-items-center gap-3">
                                    <img
                                        src={candidate.image}
                                        alt={candidate.name}
                                        className="candidate-image"
                                    />

                                    <div className="candidate-details">
                                        <h5>{candidate.name}</h5>

                                        <p className="candidate-location">
                                            <i className="bi bi-geo-alt me-2"></i>
                                            {candidate.location}
                                        </p>

                                        <span className="candidate-designation">
                                            {candidate.designation}
                                        </span>
                                    </div>

                                    <i className="bi bi-arrow-up-right candidate-arrow"></i>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default NewCandidates;

