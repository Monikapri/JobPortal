
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./RecentJobs.css";
import JobImg1 from "../assets/company-1-45x45.png";
import JobImg2 from "../assets/company-2-38x49.png";
import JobImg3 from "../assets/company-3-46x52.png";

const jobs = [
    {
        id: 1,
        posted: "1 hour ago",
        logo: JobImg1,
        title: "Senior UX Designer",
        company: "StarArt",
        salary: "$25–$35 / hour",
        location: "New York, NY, USA",
        type: "Full Time",
    },
    {
        id: 2,
        posted: "1 day ago",
        logo: JobImg2,
        title: "Marketing Director",
        company: "UpBook",
        salary: "$45–$53 / hour",
        location: "Saint-Etienne, France",
        type: "Part Time",
    },
    {
        id: 3,
        posted: "1 day ago",
        logo: JobImg3,
        title: "Social Media Executive",
        company: "UpBook",
        salary: "$45–$53 / hour",
        location: "Saint-Etienne, France",
        type: "Part Time",
    },
];

function RecentJobs() {
    return (
        <section className="recent-jobs-section py-5">
            <Container>
                <div className="mb-4">
                    <h2>Recent Jobs</h2>
                    <p>Explore the latest job opportunities</p>
                </div>

                <div className="table-responsive">
                    <Table className="recent-jobs-table align-middle mb-0">
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.id} className="job-row">
                                    <td className="job-posted">{job.posted}</td>

                                    <td className="job-company">
                                        <img
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            className="company-logo"
                                        />
                                        <div>
                                            <a
                                                href="/job-details.html"
                                                className="job-title"
                                            >
                                                {job.title}
                                            </a>
                                            <p className="company-name mb-0">
                                                {job.company}
                                            </p>
                                        </div>
                                    </td>

                                    <td className="job-salary">{job.salary}</td>

                                    <td className="job-location">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        {job.location}
                                    </td>

                                    <td>
                                        <span
                                            className={`job - type ${job.type === "Full Time"
                                                ? "full-time"
                                                : "part-time"
                                                } `}
                                        >
                                            {job.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </section>
    );
}

export default RecentJobs;

