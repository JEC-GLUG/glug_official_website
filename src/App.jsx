import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alumni from "./pages/Alumni";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [scrolled, setScrolled] = useState(false);

    

    return (
        <BrowserRouter>
            <Navbar scrolled={scrolled} />
            <Routes>
                <Route exact path="/" element={<Home setScrolled={setScrolled} />} />
                <Route exact path="/alumni" element={<Alumni setScrolled={setScrolled} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
