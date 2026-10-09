
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./SuccessStories.css";

const stories = [
    {
        id: 1,
        name: "Emily Johnson",
        role: "Marketing Specialist",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote:
            "I found my dream job within weeks. The process was simple and smooth!",
    },
    {
        id: 2,
        name: "Michael Carter",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "This platform connected me with amazing companies and opportunities.",
    },
    {
        id: 3,
        name: "Sophia Martinez",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote:
            "The support team guided me through every step. I love my new role!",
    },
];

function SuccessStories() {
    return (
        <section className="success-stories-section">
            <Container>
                <div className="success-heading text-center">
                    <span className="success-label">SUCCESS STORIES</span>
                    <h2>Real People. Real Stories.</h2>
                    <p>
                        Discover how job seekers found their dream careers
                        <br className="d-none d-md-block" /> through our platform.
                    </p>
                </div>

                <Row className="g-4">
                    {stories.map((story) => (
                        <Col key={story.id} xs={12} md={6} lg={4}>
                            <Card className="success-card h-100">
                                <Card.Body>
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="story-avatar"
                                        />

                                        <div>
                                            <h5 className="story-name">{story.name}</h5>
                                            <p className="story-role mb-1">{story.role}</p>
                                            <div className="story-stars" aria-label="5 out of 5 stars">
                                                ★★★★★
                                            </div>
                                        </div>
                                    </div>

                                    <div className="story-quote-icon">“</div>

                                    <p className="story-quote">
                                        “{story.quote}”
                                    </p>

                                    <div className="story-divider"></div>

                                    <div className="story-footer">
                                        <i className="bi bi-patch-check-fill"></i>
                                        <span>Successful placement</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default SuccessStories;

