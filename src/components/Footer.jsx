import React from 'react';

const Footer = () => {
  return (
    <footer style={{background:"#060C19"}} className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFi6rS1D2JRM2k7Bj2Fr-sa49KLNXbiPYAtoj6lSoh&s"
            alt="Left Image"
            className="w-10 h-10 mr-2"
          />
          <img
            src="left-image-url.png"
            alt="Left Image"
            className="w-10 h-10"
          />
        </div>
        <div className="text-center">
          Footer Content Here
        </div>
      </div>
    </footer>
  );
};

export default Footer;
