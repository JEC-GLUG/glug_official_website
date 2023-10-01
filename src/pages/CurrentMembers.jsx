import React from "react";
import MemberCard from "../components/MemberCard";
import { styles } from "../styles";

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
            <div className="mt-0 flex items-center justify-center gap-8">
                <MemberCard name={"Sourabh Koch Gohain"} position={"Head"} />
                <MemberCard name={"Vaskarjya Das"} position={"Co-Head"} />
                <MemberCard name={"Zubayer Ahmed Zidhan"} position={"Co-Head"} />
                <MemberCard name={"Tilok Doley"} position={"Co-Head"} />
            </div>
        </section>
    );
};

export default CurrentMembers;
