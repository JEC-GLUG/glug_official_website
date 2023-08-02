import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StarsCanvas from "./components/canvas/Star";


function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "relative" }}>
        <StarsCanvas style={{position: "absolute", top: 0, left: 0, zIndex: -1 }} />
        <div>
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;