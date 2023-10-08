import React from "react";
import MemberCard from "../components/MemberCard";
import { styles } from "../styles";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { currentMembers } from "../constants";

const CurrentMembers = () => {
    return (
        <section
            className={`relative w-full h-[75vh] mx-auto overflow-hidden text-white flex flex-wrap ${styles.paddingX} mt-4 font-inter`}
        >
            <div className="w-full flex items-center justify-center relative">
                <h1 className={`${styles.headingText}`}>
                    Current Me<span className="text-glugBlue">m</span>
                    bers
                </h1>
            </div>

            <div className= " container bg-slate-100 items-center justify-center">

            
            
            <Swiper 
                breakpoints={{
                    200: {
                        spaceBetween: 60,
                        slidesPerView: 1,
                    },
                    500: {
                        spaceBetween: 60,
                        slidesPerView: 2,
                    },
                    900: {
                        spaceBetween: 60,
                        slidesPerView: 3,
                    },
                }}
            >
                {currentMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <MemberCard
                            name={member.name}
                            position={member.position}
                            imageUrl={member.imageURL}
                            github={member.github}
                            linkedIn={member.linkedIn}
                            insta={member.instagram}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
    );
};

export default CurrentMembers;
