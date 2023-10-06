import React from "react";
import StarsCanvas from "../components/canvas/Star";
import Hero from "../components/Hero";
import Why_joinGlug_Page from "./WhyJoinPage";
import EventsPage from "./EventsPage";
import ProjectsPage from "./ProjectsPage";
import { useEffect } from "react";
import { useRef } from "react";
import ProfilesPage from "./profilesPage";

const Home = ({ setScrolled }) => {
    const scrollContainerRef = useRef(null);

    const handleScroll = () => {
        if (scrollContainerRef.current.scrollTop > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener("scroll", handleScroll);

        return () => {
            scrollContainer.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="custom-cursor" style={{ position: "relative" }}>
            <StarsCanvas
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            />
            <div ref={scrollContainerRef} style={{ overflow: "auto" }} className="w-full h-screen">
                <Hero />
                <Why_joinGlug_Page />
                <EventsPage />
                <ProjectsPage />
                <ProfilesPage/>
            </div>
        </div>
    );
};

export default Home;
