import { motion } from "framer-motion";

import { styles } from "../styles";
import GlugCanvas from "./canvas/Glug";
import CustomCursor from "./CustomCursor";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div className={`flex flex-wrap w-full h-screen mx-auto ${styles.paddingX} py-14`}>
                <div class={`w-full md:w-1/2 p-4 `}>
                {/* <!-- Content for the first column --> */}
                    <div class={`bg-gray-200 p-4 `}>
                        <h2 class="text-xl font-bold">Column 1</h2>
                        <p>This is the content of the first column.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 p-4">
                {/* <!-- Content for the second column --> */}
                <div class="bg-gray-300 p-4">
                    <h2 class="text-xl font-bold">Column 2</h2>
                    <p>This is the content of the second column.</p>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default Hero;
