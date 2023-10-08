import React from "react";
import PageLayout from "../Layout/PageLayout";

const AllProjectsPage = ({ setScrolled }) => {
    return (
        <PageLayout setScrolled={setScrolled}>
            <div className="text-white mt-24 ml-32 text-5xl">Projects</div>
        </PageLayout>
    );
};

export default AllProjectsPage;
