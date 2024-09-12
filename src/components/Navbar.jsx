import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants"; // Ensure 'Members' is not part of this array
import { menu, close, glugLogo } from "../assets";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ scrolled }) => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
            className={`${
                styles.paddingX
            } w-full flex items-center py-8 fixed top-0 z-20 font-russo ${
                scrolled ? "bg-navbarBG bg-opacity-96   " : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/" // Set the root path as the 'to' attribute
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        const element = document.getElementById("hero");
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <img
                        src={glugLogo}
                        alt="GLUG"
                        className="md:h-[1.6rem] h-5"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? "text-white" : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <Link to={link.id}>{link.title}</Link>
                        </li>
                    ))}
                    <li
                        key={"join-us"}
                        className={`${
                            active === "join-us" ? "text-white" : "text-secondary"
                        } hover:text-white text-[18px] font-medium cursor-pointer`}
                        onClick={() => setActive("join-us")}
                    >
                        <HashLink smooth to="/#join-us">Join Us</HashLink>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-[7rem] right-0 ml-4 sm:my-2 -my-7 min-w-[9rem] z-10 rounded-xl ${
                            scrolled
                                ? "bg-navbarBG bg-opacity-96"
                                : "bg-transparent"
                        }`}
                    >
                        <ul className="list-none flex justify-start items-end flex-col gap-4 -mt-[1rem]">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <Link to={link.id}>{link.title}</Link>
                                </li>
                            ))}
                            <li
                                key={"join-us"}
                                className={`${
                                    active === "join-us"
                                        ? "text-white"
                                        : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive("join-us");
                                }}
                            >
                                <HashLink smooth to="/#join-us">
                                    Join Us
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
