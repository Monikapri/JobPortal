
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./LatestPosts.css";

const posts = [
    {
        id: 1,
        title: "8 Surprising Predictions About the Future of Work",
        description:
            "There’s no denying that the landscape of work is changing. More and more companies are adopting flexible work policies",
        date: "November 23, 2019",
        link: "https://livedemo00.template-help.com/wt_prod-20039/blog-post.html",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
    },
    {
        id: 2,
        title: "Job Search Success: Finding a Business Development Job",
        description:
            "Business development professionals are at the heart of all sorts of organizations, from startups to multinational corporations.",
        date: "November 23, 2019",
        link: "https://livedemo00.template-help.com/wt_prod-20039/blog-post.html",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80",
    },
    {
        id: 3,
        title: "How to Impress Your Future Employer",
        description:
            "You’re committed to your job search, and you use every ounce of your free time you have to comb through listings, write cover letters, and prepare for interviews.",
        date: "November 23, 2019",
        link: "https://livedemo00.template-help.com/wt_prod-20039/blog-post.html",
        image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80",
    },
];

function LatestPosts() {
    return (
        <section className="latest-posts-section">
            <Container>
                <div className="latest-posts-heading text-center">
                    <span className="latest-posts-label">OUR BLOG</span>
                    <h2>Latest Posts</h2>
                    <p>
                        Discover career advice, job search tips, and the
                        latest workplace trends.
                    </p>
                </div>

                <Row className="g-4">
                    {posts.map((post) => (
                        <Col key={post.id} xs={12} md={6} lg={4}>
                            <article className="latest-post-card h-100">
                                <a
                                    href={post.link}
                                    className="latest-post-image-link"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="latest-post-image"
                                    />
                                </a>

                                <div className="latest-post-content">
                                    <p className="latest-post-date">
                                        <i className="bi bi-calendar3"></i>
                                        {post.date}
                                    </p>

                                    <h3 className="latest-post-title">
                                        <a href={post.link}>
                                            {post.title}
                                        </a>
                                    </h3>

                                    <p className="latest-post-description">
                                        {post.description}
                                    </p>

                                    <a
                                        href={post.link}
                                        className="latest-post-readmore"
                                    >
                                        Read More
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </article>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default LatestPosts;

