
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./ContactSupport.css";

function ContactSupport() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [success, setSuccess] = useState("");

    const validateField = (name, value) => {
        switch (name) {
            case "name":
                if (!value.trim()) return "Full name is required.";
                if (value.trim().length < 2)
                    return "Name must contain at least 2 characters.";
                return "";

            case "email":
                if (!value.trim()) return "Email is required.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
                    return "Enter a valid email address.";
                return "";

            case "subject":
                if (!value.trim()) return "Subject is required.";
                if (value.trim().length < 3)
                    return "Subject must contain at least 3 characters.";
                return "";

            case "message":
                if (!value.trim()) return "Message is required.";
                if (value.trim().length < 10)
                    return "Message must contain at least 10 characters.";
                if (value.trim().length > 1000)
                    return "Message cannot exceed 1000 characters.";
                return "";

            default:
                return "";
        }
    };

    const validateForm = (data) => {
        const newErrors = {};

        Object.keys(data).forEach((field) => {
            const error = validateField(field, data[field]);
            if (error) newErrors[field] = error;
        });

        return newErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSuccess("");

        if (touched[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: validateField(name, value),
            }));
        }
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;

        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validateForm(formData);
        setErrors(newErrors);
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true,
        });

        if (Object.values(newErrors).some(Boolean)) {
            setSuccess("");
            return;
        }

        setSuccess(
            "Your message passed validation. Connect a backend to send your request."
        );

        // Connect your contact form API here.
    };

    const renderError = (field) =>
        touched[field] && errors[field] ? (
            <div className="contact-error" role="alert">
                {errors[field]}
            </div>
        ) : null;

    return (
        <section className="contact-support-section">
            <Container>
                <div className="contact-support-card">
                    <div className="contact-support-heading">
                        <h2>Contact Support</h2>
                        <p>
                            Have a question or need help? Send us a message
                            and we will be happy to assist you.
                        </p>
                    </div>

                    {success && (
                        <Alert variant="success" role="status">
                            {success}
                        </Alert>
                    )}

                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="contactName">
                            <Form.Label>Full Name *</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={Boolean(touched.name && errors.name)}
                                autoComplete="name"
                            />
                            {renderError("name")}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="contactEmail">
                            <Form.Label>Email Address *</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={Boolean(touched.email && errors.email)}
                                autoComplete="email"
                            />
                            {renderError("email")}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="contactSubject">
                            <Form.Label>Subject *</Form.Label>
                            <Form.Control
                                type="text"
                                name="subject"
                                placeholder="How can we help?"
                                value={formData.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={Boolean(touched.subject && errors.subject)}
                            />
                            {renderError("subject")}
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="contactMessage">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="message"
                                placeholder="Describe your issue or question..."
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={Boolean(touched.message && errors.message)}
                                maxLength={1000}
                            />
                            <div className="contact-character-count">
                                {formData.message.length}/1000 characters
                            </div>
                            {renderError("message")}
                        </Form.Group>

                        <Button
                            type="submit"
                            className="contact-submit w-100"
                        >
                            Send Message
                        </Button>
                    </Form>
                </div>
            </Container>
        </section>
    );
}

export default ContactSupport;