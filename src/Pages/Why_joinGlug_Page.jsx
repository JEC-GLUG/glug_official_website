import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/image.png';
import Button from '../components/Button';

const Why_joinGlug_Page = () => {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const speed = 50; // Adjust this value to control the floating speed

  const handleLeftMouseEnter = () => {
    setIsLeftHovered(true);
  };

  const handleLeftMouseLeave = () => {
    setIsLeftHovered(false);
  };

  const handleRightMouseEnter = () => {
    setIsRightHovered(true);
  };

  const handleRightMouseLeave = () => {
    setIsRightHovered(false);
  };

  return (
    <>
      <section
        className="relative w-full h-screen mx-auto overflow-hidden text-white flex"
        style={{ fontFamily: "'Russo One', sans-serif" }}
      >
        {/* Left Column */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center relative"
          onMouseEnter={handleLeftMouseEnter}
          onMouseLeave={handleLeftMouseLeave}
          
        >
          <motion.img
            src={img1}
            alt="Image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: isLeftHovered ? -speed : 0 }}
            transition={{ duration: 1 }}
          />
          {/* Add a glow effect based on cursor position */}
          {isLeftHovered && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            />
          )}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-center">
              Why Join G<span className="text-glugBlue">l</span>ug...?
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto mt-5">
              Glug is a cool technology! Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
            
            <div className="mt-11">
              <Button> Join Us </Button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Why_joinGlug_Page;
