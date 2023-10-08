import React from "react";
import StarsCanvas from "../components/canvas/Star";
import Hero from "../components/Hero";  
import Why_joinGlug_Page from "./WhyJoinPage";
import EventsPage from "./EventsPage";

import PageLayout from "../Layout/PageLayout";
import CurrentMembers from "./CurrentMembers";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

const Home = ({ setScrolled }) => {
    return (
        <PageLayout setScrolled={setScrolled}>
            <Hero />
            <Why_joinGlug_Page />
            <EventsPage />
         
            <CurrentMembers />
            <JoinUs />
            <Footer/>
        </PageLayout>
    );
};

export default Home;
