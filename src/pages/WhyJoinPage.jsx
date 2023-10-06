import React, { useState } from "react";
import { motion } from "framer-motion";

import { img1 } from "../assets";
import Button from "../components/Button";
import { styles } from "../styles";

const Why_joinGlug_Page = () => {
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);
    const speed = 50; // Adjust this value to control the floating speed

    const handleLeftMouseEnter = () => {
        setIsLeftHovered(true);
    };

    const handleLeftMouseLeave = () => {
        setIsLeftHovered(false);
    };

    const handleRightMouseEnter = () => {
        setIsRightHovered(true);
    };

    const handleRightMouseLeave = () => {
        setIsRightHovered(false);
    };

    return (
        <>
            <section
                id="why-join-glug"
                className={`relative w-full h-screen mx-auto overflow-hidden text-white flex flex-wrap ${styles.paddingX} mt-5`}
                style={{ fontFamily: "'Russo One', sans-serif" }}
            >
                {/* Left Column */}
                <div
                    className="w-full md:w-1/2 flex flex-col justify-center items-center relative "
                    onMouseEnter={handleLeftMouseEnter}
                    onMouseLeave={handleLeftMouseLeave}
                >
                    <motion.img
                        src={img1}
                        alt="Image"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: isLeftHovered ? -speed : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="w-[50%] md:w-auto"
                    />
                    {/* Add a glow effect based on cursor position */}
                    {isLeftHovered && (
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                borderRadius: "50%",
                                width: "100px",
                                height: "100px",
                            }}
                        />
                    )}
                </div>

                {/* Right Column */}
                <div className="w-full md:w-1/2 flex items-start md:items-center justify-center relative">
                    <div>
                        <h1 className={`${styles.headingText}`}>
                            Why Join G<span className="text-glugBlue">l</span>
                            ug?
                        </h1>
                        <p className={`${styles.bodyText}`}>
                        Skill Development: Whether you're a beginner or an experienced, GLUG provides you with the 
valuable tools and opportunities to expand your arena of knowledge and explore further. Its like launching 
you to greater heights!

<li>Networking: Connect with peers who share your passion for technology and build relationships that 
could lead to future collaborations or career opportunities. Learning and growing together.</li>

<li>Community: Feel a sense of belonging within our welcoming and supportive community of GLUG. 
Here, everyone is equal</li>

<li>
Career Advancement: Linux skills are highly sought after in the tech industry. In addition, we also 
provide training for other latest technologies of computer science. By joining our club, you can enhance 
your resume and gain a competitive edge in the job market
</li>



                        </p>
                        {/* Join Us button */}
                        <div className="mt-11 flex justify-center md:justify-start">
                            <Button
                                onClick={() => {
                                    const element =
                                        document.getElementById(
                                            "join-us"
                                        );
                                    console.log(element);
                                    
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {" "}
                                Join Us{" "}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Why_joinGlug_Page;
