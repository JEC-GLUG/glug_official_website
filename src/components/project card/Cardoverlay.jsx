import React from 'react';
import { styles } from '../../styles';

const Cardoverlay = () => {

  return (
    <section
      className={`relative w-full mx-auto overflow-hidden text-white flex flex-wrap justify-center items-center ${styles.paddingX} mt-5`}
      style={{ fontFamily: "'Russo One', sans-serif" }}
    >
      <div
        style={{
          width: "700px",
          height: "400px",
          fontFamily: "'Russo One', sans-serif",
          backgroundColor: 'transparent', 
          border: '1px solid white', 
          borderRadius: '10px',
          display: 'flex', 
          padding: '50px',
          position: 'relative', // Add relative positioning
        }}
      > 
        {/* First Column */}
        <div
          style={{
            flex: 1, // Take up 50% of the container
            display: 'flex', // Use flexbox for centering
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            
          }}
        ><img
        src="src\assets\engineering.png"
        alt="Your Image"
        style={{
         
          position: 'absolute', // Absolute positioning
          top: "10px" , // Use the numerical adjustment for top
          right: "20px", // Use the numerical adjustment for left
          width: '50px', // Set the width of the image
          height: '50px', // Set the height of the image
          borderRadius: '10px', // Add rounded corners
        }}
      />
          {/* Content for the first column */}
          <div
            style={{
              width: '250px', // Set the width of the square
              height: '250px', // Set the height of the square
              backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent white
              borderRadius: '10px', // Add rounded corners
              position: 'relative', // Add relative positioning
            }}
          >
            {/* Image */}
            <img
              src="src\assets\Clipboard blank.png"
              alt="Your Image"
              style={{
                position: 'absolute', // Absolute positioning
                top: "-40px" , // Use the numerical adjustment for top
                left: "-40px", // Use the numerical adjustment for left
                width: '100px', // Set the width of the image
                height: '100px', // Set the height of the image
                borderRadius: '10px', // Add rounded corners
              }}
            />
            <img
              src="src\assets\Caution.png"
              alt="Your Image"
              style={{
               
                position: 'absolute', // Absolute positioning
                bottom: "-20px" , // Use the numerical adjustment for top
                right: "-20px", // Use the numerical adjustment for left
                width: '50px', // Set the width of the image
                height: '50px', // Set the height of the image
                borderRadius: '10px', // Add rounded corners
              }}
            />
          </div>
        </div>

        {/* Second Column */}
        <div
          style={{
            flex: 1, // Take up 50% of the container
            display: 'flex', // Use flexbox for centering
            flexDirection: 'column', // Arrange header and description vertically
            alignItems: 'flex-start', // Align to the left
            padding: '20px', // Add padding for spacing
          }}
        >
          {/* Header */}
          <div className="ProjectHeader mb-2">Header</div>
          
          {/* Description */}
          <div className="flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </div>
      </div>
    </section>
  );
};

export default Cardoverlay;
