import React, { useState, useEffect } from "react";
import StarsCanvas from "../components/canvas/Star";
import Hero from "../components/Hero";
import Why_joinGlug_Page from "./WhyJoinPage";
import EventsPage from "./EventsPage";
import PageLayout from "../Layout/PageLayout";
import CurrentMembers from "./CurrentMembers";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import "../components/Loader.css"; 

const Home = ({ setScrolled }) => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., data fetching)
        setTimeout(() => {
            setLoading(false); // Set loading to false when the operation is complete
        }, 2000); // Simulated loading time: 2 seconds
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <PageLayout setScrolled={setScrolled}>
            {isMobile && loading ? <Loader /> : null} {/* Display loader in mobile view */}
            <Hero />
            <Why_joinGlug_Page />
            <EventsPage />
            <CurrentMembers />
            <JoinUs />
            <Footer />
        </PageLayout>
    );
};

export default Home;
