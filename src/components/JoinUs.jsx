import React from "react";
import { styles } from "../styles";

import JoinUsForm from "./JoinUsForm";


const JoinUs = () => {
    return (
        <>
            <section
                className={`relative w-full h-screen mx-auto overflow-hidden text-white flex flex-wrap ${styles.paddingX} mt-4 font-inter`}
            >
                <div className="w-full flex items-center justify-center relative mt-[12rem]">
                    <h1 className={`${styles.headingText}`} id="join-us">
                        Join <span className="text-glugBlue">U</span>s
                    </h1>
                </div>

                {/* Form */}
                <div className="w-full flex flex-row align-middle justify-center -mt-[3rem]">
                    <div className=" h-[26rem] w-[32rem] px-6 pt-4">
                        <JoinUsForm />
                    </div>
                </div>
            </section>
        </>
    );
};

export default JoinUs;
