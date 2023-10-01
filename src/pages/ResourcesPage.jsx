import React from "react";
import PageLayout from "../Layout/PageLayout";

const ResourcesPage = ({ setScrolled }) => {
    return (
        <PageLayout setScrolled={setScrolled}>
            <div className="text-white mt-24 ml-32 text-5xl">Resources</div>
        </PageLayout>
    );
};

export default ResourcesPage;
