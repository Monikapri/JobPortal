
import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import "./Categories.css";

const categories = [
    {
        title: "Accounting & Finance",
        positions: "2590 open positions",
        icon: "bi-calculator",
    },
    {
        title: "Sales & Marketing",
        positions: "1214 open positions",
        icon: "bi-megaphone",
    },
    {
        title: "Information Technology",
        positions: "3213 open positions",
        icon: "bi-laptop",
    },
    {
        title: "Food Service",
        positions: "850 open positions",
        icon: "bi-cup-hot",
    },
    {
        title: "Design & Art",
        positions: "950 open positions",
        icon: "bi-palette",
    },
    {
        title: "Healthcare",
        positions: "1120 open positions",
        icon: "bi-heart-pulse",
    },
    {
        title: "Automotive",
        positions: "720 open positions",
        icon: "bi-car-front",
    },
    {
        title: "Construction",
        positions: "640 open positions",
        icon: "bi-building",
    },
    {
        title: "Education",
        positions: "1020 open positions",
        icon: "bi-mortarboard",
    },
];

function Categories() {
    const sliderRef = useRef(null);

    const slide = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction * sliderRef.current.clientWidth * 0.8,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="categories-section py-5">
            <Container>
                <div className="categories-heading d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2>Popular Categories</h2>
                        <p>Explore jobs by your preferred category</p>
                    </div>

                    <div className="slider-controls">
                        <button
                            type="button"
                            className="slider-arrow"
                            aria-label="Previous categories"
                            onClick={() => slide(-1)}
                        >
                            <i className="bi bi-arrow-left"></i>
                        </button>

                        <button
                            type="button"
                            className="slider-arrow"
                            aria-label="Next categories"
                            onClick={() => slide(1)}
                        >
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <div className="categories-slider" ref={sliderRef}>
                    {categories.map((category, index) => (
                        <div className="category-slide" key={category.title}>
                            <div className={`category-card card-color-${(index % 3) + 1}`}>
                                <div className="category-icon">
                                    <i className={`bi ${category.icon} `}></i>
                                </div>

                                <h5>{category.title}</h5>
                                <p>{category.positions}</p>


                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Categories;

