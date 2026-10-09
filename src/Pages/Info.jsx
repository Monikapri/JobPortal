
import React from "react";
import PeopleImg from "../assets/home-2-540x413.jpg";
import "./Info.css";

function Info() {
    const infoItems = [
        {
            icon: "bi-people-fill",
            text: "More than 3.8 million visitors every day",
        },
        {
            icon: "bi-globe",
            text: "Leading recruiting website in the US and Europe",
        },
        {
            icon: "bi-headset",
            text: "24/7 Dedicated and free Support",
        },
        {
            icon: "bi-patch-check-fill",
            text: "Only relevant and verified vacancies",
        },
    ];

    return (
        <section className="infosection container py-5">
            <div className="row align-items-center g-4">
                {/* Left content and image */}
                <div className="infoheading col-12 col-md-6">
                    <h2>Welcome to JobsFactory</h2>

                    <p>
                        A place where leading employers are already looking
                        for your talent and experience.
                    </p>

                    <div className="infoimg">
                        <img
                            src={PeopleImg}
                            alt="People working together"
                            className="info-people-image"
                        />
                    </div>
                </div>

                {/* Information cards */}
                <div className="infocards col-12 col-md-6">
                    <div className="row g-3">
                        {infoItems.map((item, index) => (
                            <div className="col-6" key={index}>
                                <div className="info-card">
                                    <div className="info-card-icon">
                                        <i className={`bi ${item.icon} `} aria-hidden="true"></i>
                                    </div>

                                    <h6>{item.text}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;

