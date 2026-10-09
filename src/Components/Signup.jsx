
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./Signup.css";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [success, setSuccess] = useState("");

    const validateField = (name, value, data = formData) => {
        switch (name) {
            case "name":
                if (!value.trim()) return "Full name is required.";
                if (value.trim().length < 2)
                    return "Name must contain at least 2 characters.";
                if (!/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(value.trim()))
                    return "Enter a valid name.";
                return "";

            case "email":
                if (!value.trim()) return "Email is required.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
                    return "Enter a valid email address.";
                return "";

            case "phone":
                if (!value.trim()) return "Phone number is required.";
                if (!/^[6-9]\d{9}$/.test(value))
                    return "Enter a valid 10-digit Indian mobile number.";
                return "";

            case "password":
                if (!value) return "Password is required.";
                if (value.length < 8)
                    return "Password must be at least 8 characters.";
                if (!/[A-Z]/.test(value))
                    return "Include at least one uppercase letter.";
                if (!/[a-z]/.test(value))
                    return "Include at least one lowercase letter.";
                if (!/\d/.test(value))
                    return "Include at least one number.";
                if (!/[^A-Za-z0-9]/.test(value))
                    return "Include at least one special character.";
                return "";

            case "confirmPassword":
                if (!value) return "Please confirm your password.";
                if (value !== data.password)
                    return "Passwords do not match.";
                return "";

            case "terms":
                if (!value) return "Please accept the terms and conditions.";
                return "";

            default:
                return "";
        }
    };

    const validateForm = (data) => {
        const newErrors = {};

        Object.keys(data).forEach((field) => {
            const error = validateField(field, data[field], data);
            if (error) newErrors[field] = error;
        });

        return newErrors;
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        const updatedData = {
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        };

        setFormData(updatedData);
        setSuccess("");

        // Validate the field being edited.
        if (touched[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: validateField(name, updatedData[name], updatedData),
            }));
        }

        // Recheck confirm password when the password changes.
        if (name === "password" && touched.confirmPassword) {
            setErrors((prev) => ({
                ...prev,
                confirmPassword: validateField(
                    "confirmPassword",
                    updatedData.confirmPassword,
                    updatedData
                ),
            }));
        }
    };

    const handleBlur = (event) => {
        const { name } = event.target;

        setTouched((prev) => ({ ...prev, [name]: true }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, formData[name], formData),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validateForm(formData);
        setErrors(newErrors);

        setTouched({
            name: true,
            email: true,
            phone: true,
            password: true,
            confirmPassword: true,
            terms: true,
        });

        if (Object.values(newErrors).some(Boolean)) {
            setSuccess("");
            return;
        }

        setSuccess("Your form is valid! Signup is ready to be connected to your backend.");

        // Connect your signup API here.
        // Do not store a password in localStorage or log it to the console.
    };

    const renderError = (field) =>
        touched[field] && errors[field] ? (
            <div className="signup-error" role="alert">
                {errors[field]}
            </div>
        ) : null;

    return (
        <section className="signup-section">
            <Container>
                <div className="signup-card">
                    <div className="signup-heading">
                        <h2>Create Your Account</h2>
                        <p>Join JobsFactory and take the next step in your career.</p>
                    </div>

                    {success && (
                        <Alert variant="success" role="status">
                            {success}
                        </Alert>
                    )}

                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="signupName">
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

                        <Form.Group className="mb-3" controlId="signupEmail">
                            <Form.Label>Email Address *</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={Boolean(touched.email && errors.email)}
                                autoComplete="email"
                            />
                            {renderError("email")}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupPhone">
                            <Form.Label>Mobile Number *</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                placeholder="10-digit mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={Boolean(touched.phone && errors.phone)}
                                inputMode="numeric"
                                maxLength={10}
                                autoComplete="tel-national"
                            />
                            {renderError("phone")}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupPassword">
                            <Form.Label>Password *</Form.Label>
                            <div className="signup-password-wrapper">
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Create a strong password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(touched.password && errors.password)}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="signup-password-toggle"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <small className="signup-hint">
                                8+ characters, uppercase, lowercase, number and special character.
                            </small>
                            {renderError("password")}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupConfirmPassword">
                            <Form.Label>Confirm Password *</Form.Label>
                            <div className="signup-password-wrapper">
                                <Form.Control
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Re-enter your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                        touched.confirmPassword && errors.confirmPassword
                                    )}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="signup-password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword((prev) => !prev)
                                    }
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide confirm password"
                                            : "Show confirm password"
                                    }
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {renderError("confirmPassword")}
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="signupTerms">
                            <Form.Check
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="I agree to the Terms and Conditions."
                                isInvalid={Boolean(touched.terms && errors.terms)}
                            />
                            {renderError("terms")}
                        </Form.Group>

                        <Button
                            type="submit"
                            className="signup-submit w-100"
                        >
                            Create Account
                        </Button>

                        <p className="signup-login-text">
                            Already have an account?{" "}
                            <a href="/login">Log in</a>
                        </p>
                    </Form>
                </div>
            </Container>
        </section>
    );
}

export default Signup;