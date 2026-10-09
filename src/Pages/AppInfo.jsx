
import React from "react";
import Container from "react-bootstrap/Container";
import "./AppInfo.css";

function AppInfo() {
    return (
        <section className="app-info-section">
            <Container>
                <div className="app-info-content text-center">
                    <span className="app-info-label">
                        JOBSFACTORY MOBILE APP
                    </span>

                    <h2>Get JobsFactory App for Your Mobile</h2>

                    <p>
                        Searching for jobs has never been that easy.
                        Now you can find jobs matched to your career
                        expectations, apply for jobs and receive feedback
                        right on your mobile. Start your job search now!
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default AppInfo;

