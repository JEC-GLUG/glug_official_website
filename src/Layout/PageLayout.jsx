import React from "react";
import StarsCanvas from "../components/canvas/Star";

const PageLayout = ({ children }) => {
  const layoutStyle = {
   
    position: "relative",
    minHeight: "100vh",
    overflow: "auto",
    padding: "90px 60px 60px",
    
  };

  return (
    <div style={layoutStyle}>
    
      <StarsCanvas />


      {children}
    </div>
  );
};

export default PageLayout;
