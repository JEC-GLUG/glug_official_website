import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alumni from "./pages/Alumni";
import Member from "./pages/Member";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ResourcesPage from "./pages/ResourcesPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import AllEvents from "./pages/AllEvents";
import CurrentMembers from "./pages/CurrentMembers";

function App() {
    const [scrolled, setScrolled] = useState(false);

    

    return (
        <BrowserRouter>
            <Navbar scrolled={scrolled} />
            <Routes>
                <Route exact path="/" element={<Home setScrolled={setScrolled} />} />
                <Route exact path="/alumni" element={<Alumni setScrolled={setScrolled} />} />
                <Route exact path="/members" element={<Member setScrolled={setScrolled} />} />
                <Route exact path="/resources" element={<ResourcesPage setScrolled={setScrolled} />} />
                <Route exact path="/projects" element={<AllProjectsPage setScrolled={setScrolled} />} />
                <Route exact path="/events" element={<AllEvents setScrolled={setScrolled} />} />
                <Route exact path="/currentMembers" element={<CurrentMembers setScrolled={setScrolled} />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
