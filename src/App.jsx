import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StarsCanvas from "./components/canvas/Star";
import "./components/CustomCursor.jsx";
import Why_joinGlug_Page from "./pages/WhyJoinPage";

import CardOverlay from "./components/project card/Cardoverlay";

import EnvetsPage from "./pages/EnvetsPage";


function App() {
    return (
        <BrowserRouter>
            <div className="custom-cursor" style={{ position: "relative", }}>
                <StarsCanvas
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        
                       
                    }}
                />
                <div style={{overflow: "auto"}} className="w-full h-screen">
                    <Navbar />
                    <Hero />
                    <Why_joinGlug_Page />
                    <EnvetsPage/>
                    <CardOverlay 
                    leftImage = "../src/assets/mouse.png"
                    title = "lorem10"
                    description= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    />

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;