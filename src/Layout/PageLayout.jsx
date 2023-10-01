import React from "react";
import StarsCanvas from "../components/canvas/Star";
import { useRef } from "react";
import { useEffect } from "react";

const PageLayout = ({ children, setScrolled, passedLayoutStyle }) => {
    const scrollContainerRef = useRef(null);

    const handleScroll = () => {
        if (scrollContainerRef.current.scrollTop > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener("scroll", handleScroll);

        return () => {
            scrollContainer.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="custom-cursor" style={{...passedLayoutStyle, position: "relative"}}>
            <StarsCanvas
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            />
            <div
                ref={scrollContainerRef}
                style={{ overflow: "auto" }}
                className="w-full h-screen"
            >
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
