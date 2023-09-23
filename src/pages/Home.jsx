import React from "react";
import StarsCanvas from "../components/canvas/Star";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Why_joinGlug_Page from "./WhyJoinPage";
import EventsPage from "./EventsPage";
import Cardoverlay from "../components/ProjectCard";
import ProjectCard from "../components/ProjectCard";
import ProjectsPage from "./ProjectsPage";

const Home = () => {
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
            <div style={{ overflow: "auto" }} className="w-full h-screen">
                <Navbar />
                <Hero />
                <Why_joinGlug_Page />
                <EventsPage />
                <ProjectsPage/>
            </div>
        </div>
    );
};

export default Home;
