import React from "react";
import MemberCard from "../components/MemberCard";
import { styles } from "../styles";

const CurrentMembers = () => {
    return (
        <section
            className={`relative w-full mx-auto overflow-hidden text-white flex flex-wrap ${styles.paddingX} mt-0 font-inter`}
        >
            <div className="w-full flex items-center justify-center relative mb-24">
                <h1 className={`${styles.headingText}`}>
                    Current Me<span className="text-glugBlue">m</span>
                    bers
                </h1>
            </div>

            <MemberCard />
        </section>
    );
};

export default CurrentMembers;
