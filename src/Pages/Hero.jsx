
import React from "react";
import Img1 from "../assets/home-1-748x528.png";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero-section" id="home">

            {/* Blue SVG background - desktop only */}

            {/* Layered blue SVG background */}
            <div className="jc-decoration-item jc-decoration-item-1" aria-hidden="true">
                <svg
                    viewBox="0 0 1446 970"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M-0.000,33.000 C-0.000,33.000 80.000,54.000 113.000,83.000 C146.000,112.000 147.000,152.000 183.000,174.000 C219.000,196.000 288.000,172.000 334.000,193.000 C380.000,214.000 379.000,282.000 427.000,317.000 C475.000,352.000 548.000,336.000 588.000,371.000 C628.000,406.000 614.000,483.000 647.000,513.000 C680.000,543.000 786.000,537.000 841.000,587.000 C896.000,637.000 885.000,739.000 932.000,776.000 C979.000,813.000 1026.000,796.000 1069.000,817.000 C1112.000,838.000 1135.000,865.000 1189.000,893.000 C1243.000,921.000 1433.000,970.000 1433.000,970.000 L1446.000,0.000 L-0.000,33.000 Z" />
                </svg>
            </div>

            <div className="jc-decoration-item jc-decoration-item-2" aria-hidden="true">
                <svg
                    viewBox="0 0 1446 970"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M-0.000,33.000 C-0.000,33.000 80.000,54.000 113.000,83.000 C146.000,112.000 147.000,152.000 183.000,174.000 C219.000,196.000 288.000,172.000 334.000,193.000 C380.000,214.000 379.000,282.000 427.000,317.000 C475.000,352.000 548.000,336.000 588.000,371.000 C628.000,406.000 614.000,483.000 647.000,513.000 C680.000,543.000 786.000,537.000 841.000,587.000 C896.000,637.000 885.000,739.000 932.000,776.000 C979.000,813.000 1026.000,796.000 1069.000,817.000 C1112.000,838.000 1135.000,865.000 1189.000,893.000 C1243.000,921.000 1433.000,970.000 1433.000,970.000 L1446.000,0.000 L-0.000,33.000 Z" />
                </svg>
            </div>


            <div className="leftpart">
                <h1>Start Building Your Own Career Now</h1>

                <div className="hero-search">
                    <input
                        type="text"
                        placeholder="Keywords"
                        aria-label="Keywords"
                    />

                    <input
                        type="text"
                        placeholder="All Regions"
                        aria-label="All Regions"
                    />

                    <button type="button" className="search-btn">
                        Search Jobs
                    </button>
                </div>

                <p>We offer 2,989 job vacancies right now!</p>
            </div>

            <div className="rightpart">
                <img
                    src={Img1}
                    alt="People exploring career opportunities"
                    className="hero-image"
                />
            </div>
        </section>
    );
}

export default Hero;

