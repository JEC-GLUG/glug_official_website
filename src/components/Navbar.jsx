import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, glugLogo } from "../assets";

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
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={glugLogo}
                        alt="GLUG"
                        className="md:h-[1.6rem] h-5"
                    />
                </Link>

                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <Link to={link.id}>{link.title}</Link>{" "}
                            {/* Use 'to' here */}
                        </li>
                    ))}
                </ul>

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
                        } p-6 black-gradient absolute top-20 right-0 mx-4 sm:my-2 -my-7 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
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
                                    <Link to={link.id}>{link.title}</Link>{" "}
                                    {/* Use 'to' here */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
