import React, { useEffect, useRef } from "react";
import AluCard from "../components/AluCard";
import PageLayout from "../Layout/PageLayout";
import StarsCanvas from "../components/canvas/Star";

const alumniData = [
    {
        batch: "Batch 2020",
        alumni: [
            {
                name: "VD",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
        ],
    },

    {
        batch: "Batch 2020",
        alumni: [
            {
                name: "VD",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
        ],
    },
    {
        batch: "Batch 2020",
        alumni: [
            {
                name: "VD",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
        ],
    },
    {
        batch: "Batch 2020",
        alumni: [
            {
                name: "VD",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
            {
                name: "Jane Smith",
                profilePhoto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
            },
        ],
    },
];

const Alumni = ({ setScrolled }) => {
    const layoutStyle = {
        minHeight: "100vh",
        overflow: "auto",
        padding: "90px 60px 60px",
    };

    return (
        <PageLayout setScrolled={setScrolled} passedLayoutStyle={layoutStyle}>
            <div className="mt-10 ">
                <div className="font-russo text-2xl text-center justify-center text-white">
                    Meet our Alumni
                </div>
                <div className="container mt-10 md:ml-align-content-center sm:mp-20">
                    {alumniData.map((batch, batchIndex) => (
                        <div key={batchIndex} className="mt-5">
                            <div className="batch text-lg text-white">
                                {batch.batch}
                            </div>
                            <div className="Cards grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                                {batch.alumni.map((alumni, alumniIndex) => (
                                    <div
                                        key={alumniIndex}
                                        className="flex justify-center items-center"
                                    >
                                        <AluCard
                                            name={alumni.name}
                                            profilePhoto={alumni.profilePhoto}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default Alumni;
