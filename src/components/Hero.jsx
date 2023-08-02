import { motion } from "framer-motion";

import { styles } from "../styles";
import GlugCanvas from './canvas/Glug';


const Hero = () => {
  return (
    <>
   
    <section className={`relative w-full h-screen mx-auto text-black`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      > 
        <div className='flex flex-col justify-center items-center mt-5'>
          
          <div className='w-5 h-5 rounded-full bg-black' />
          
          <div className='w-1 sm:h-80 h-40 violet-gradient' />

          <div 
  className="font-Russo_One text-white mx-auto max-w-2xl p-1"style={{ position: "absolute", top: 200, right: "45rem", bottom: 0, left:0 ,fontFamily: "'Russo One', sans-serif" }}
>
  <h1 className="text-4xl sm:text-6xl font-semibold mb-4">
    What is G<span style={{ color: "#1B9FDC" }}>l</span>ug
  </h1>
  <p className="text-lg sm:text-2x2">
    Glug is a cool technology! Lorem Ipsum is simply dummy text of the
    printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently
    with desktop publishing software like Aldus PageMaker including
    versions of Lorem Ipsum
  </p>
</div>
        </div>

        <div>
        
          
          
        </div>
      </div>

      <div  style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "55rem" }}>
          <GlugCanvas />
        </div>
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-black mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    </>
  );
};

export default Hero;