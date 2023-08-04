import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StarsCanvas from "./components/canvas/Star";
import "./components/CustomCursor.jsx";
import Why_joinGlug_Page from "./pages/WhyJoinPage";

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
                <div className="w-full h-screen">
                    <Navbar />
                    <Hero />
                </div>
                <Why_joinGlug_Page />
            </div>
        </BrowserRouter>
    );
}

export default App;
