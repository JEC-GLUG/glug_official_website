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
                            Whether you're a beginner or an experienced tech
                            enthusiast, GLUG offers valuable resources to expand
                            your knowledge and reach new heights online.
                        </p>
                        <p className={`${styles.bodyText} mt-[0.6rem]`}>
                            Connect with like-minded peers, fostering
                            relationships that can lead to future collaborations
                            or career prospects. Learn and grow together.
                        </p>
                        <p className={`${styles.bodyText} mt-[0.6rem]`}>
                            Experience a strong sense of belonging within our
                            inclusive and supportive GLUG community, where
                            everyone is equal.
                        </p>
                        <p className={`${styles.bodyText} mt-[0.6rem]`}>
                            By joining our club, you can enhance your resume and
                            gain a competitive edge in the job market
                        </p>
                        {/* Join Us button */}
                        <div className="mt-8 flex justify-center md:justify-start">
                            <Button
                                onClick={() => {
                                    const element =
                                        document.getElementById("join-us");
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
