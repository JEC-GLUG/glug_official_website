import React from "react";
import StarsCanvas from "../components/canvas/Star";
import Navbar from "../components/Navbar";

const Alumni = () => {
  return (
    <div className="custom-cursor">
      <StarsCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="relative">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Add margin on the sides */}
          <div className="mt-1">
            {/* Your content here */}
            <h1 className="text-3xl font-semibold">Alumni Page</h1>
            <p className="mt-4">Your alumni content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
