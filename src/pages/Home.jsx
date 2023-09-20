import React from "react";
import StarsCanvas from "../components/canvas/Star";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Why_joinGlug_Page from "./WhyJoinPage";
import EventsPage from "./EventsPage";
import Cardoverlay from "../components/project card/Cardoverlay";

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
                <Cardoverlay
                    leftImage="../src/assets/mouse.png"
                    title="lorem10"
                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                />
            </div>
        </div>
    );
};

export default Home;
