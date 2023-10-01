import React from "react";
import StarsCanvas from "../components/canvas/Star";
import Hero from "../components/Hero";
import Why_joinGlug_Page from "./WhyJoinPage";
import EventsPage from "./EventsPage";
import ProjectsPage from "./Projects";
import PageLayout from "../Layout/PageLayout";
import CurrentMembers from "./CurrentMembers";

const Home = ({ setScrolled }) => {
    return (
        <PageLayout setScrolled={setScrolled}>
            <Hero />
            <Why_joinGlug_Page />
            <EventsPage />
            <ProjectsPage />
            <CurrentMembers />
        </PageLayout>
    );
};

export default Home;
