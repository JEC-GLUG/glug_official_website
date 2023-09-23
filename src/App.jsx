import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alumni from "./pages/Alumni";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
        
                <Routes>
                
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/alumni" element={<Alumni />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
