import React from "react";
import { styles } from "../styles";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';

const JoinUs = () => {
    return (
        <>
            <section
                className={`relative w-full h-screen mx-auto overflow-hidden text-white flex flex-wrap ${styles.paddingX} mt-4 font-inter`}
            >
                <div className="w-full flex items-center justify-center relative">
                    <h1 className={`${styles.headingText}`} id="join-us">
                        Join<span className="text-glugBlue">U</span>s
                    </h1>
                </div>
            </section>
        </>
    );
};

export default JoinUs;
