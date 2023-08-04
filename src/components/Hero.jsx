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
        className={`flex md:flex-wrap flex-wrap-reverse w-full h-screen mx-auto ${styles.paddingX} md:py-[5rem] pb-[5rem]`}
      >
        {/* <!-----------------  LEFT COLUMN  -----------------> */}
        <div className={`w-full md:w-1/2 flex flex-row justify-end items-center`}>
          <div
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            transition={{ duration: 1.3, delay: 0.3 }} 
            className="font-body text-white mx-auto max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-semibold mb-4 md:text-start text-center">
              What is G<span className="text-glugBlue">l</span>
              ug?
            </h1>
            <p className="text-[0.9rem] md:text-md md:text-start text-center max-w-[500px]">
              Glug is a cool technology! Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a
              type specimen book.
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
      <div
        className="absolute xs:bottom-10 bottom-32 w-full md:flex justify-center items-center hidden"
      >
        <a href="#">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-glugBlue border-opacity-75 flex justify-center items-start p-2">
            <div
              className="w-3 h-3 rounded-full bg-glugBlue bg-opacity-75 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
