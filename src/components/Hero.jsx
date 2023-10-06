import { motion } from "framer-motion";
import { styles } from "../styles";
import GlugCanvas from "./canvas/Glug";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <motion.div
        initial={{ x: "-100%" }} 
        animate={{ x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`flex flex-wrap-reverse w-full h-screen mx-auto ${styles.paddingX} md:py-[5rem] pb-[5rem]`}
      >
        {/* <!-----------------  LEFT COLUMN  -----------------> */}
        <div className={`w-full md:w-1/2 flex flex-row justify-end items-center`}>
          <div
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            transition={{ duration: 1.3, delay: 0.3 }} 
            className="text-white mx-auto max-w-2xl"
          >
            <h1 className={`${styles.headingText}`}>
              What is G<span className="text-glugBlue">l</span>
              ug?
            </h1>
            <p className={`${styles.bodyText}`}>
            The GNU Linux Users Group, or GLUG is a community of Jorhat Engineering College, which welcomes 
every enthusiast about technology. GLUG serves as your gateway for entering into the realm of open source software and technologies that will blow your minds! Our aim is to foster a vibrant and inclusive 
environment for everyone where we share, work on new ideas and help each other lean and grow. We at 
JEC GLUG believe in the freedom of knowledge and thus “Free as in freedom” is our proud moto
            </p>
          </div>
        </div>

        {/* <!-----------------  RIGHT COLUMN  -----------------> */}
        <motion.div
          initial={{ x: "1000%" }} 
          animate={{ x: 0 }} 
          transition={{ duration: 1.6, delay: 0.1 }} 
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <div className="w-full h-full">
            <GlugCanvas />
          </div>
        </motion.div>
      </motion.div>

      {/* <!-----------------  Scroll Animation -----------------> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full md:flex justify-center items-center hidden">
                <a href="#why-join-glug">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-glugBlue border-opacity-75 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-glugBlue bg-opacity-75 mb-1"
                        />
                    </div>
                </a>
            </div>
    </section>
  );
};

export default Hero;
