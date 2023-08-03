  import React, { useEffect, useState } from "react";
  import customCursorImage from "../assets/mouse.png";


  const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <div
        className="custom-cursor"
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "100px", 
          height: "110px", 
          background: `url(${customCursorImage}) no-repeat`,
          backgroundSize: "cover",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      ></div>
    );
  };

  export default CustomCursor;

