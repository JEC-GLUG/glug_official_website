import React from 'react';
import img1 from '../assets/Glug1.png';
import { styles } from '../styles';

const Footer = () => {
  return (
    <footer style={{ background: "#060C19" }} className={`text-white py-4 ${styles.paddingX}`} >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFi6rS1D2JRM2k7Bj2Fr-sa49KLNXbiPYAtoj6lSoh&s"
            alt="Left Image"
            className="w-10 h-10 mr-2"
          />
          <img
            src={img1}
            alt="Left Image"
            className="w-10 h-10"
          />
           <div className="text-left text-sm ml-5"> 
          <h4 className='font-inter opacity-60'> &#169; GLUG, Jorhat Engineering College</h4>
        </div>
        </div>
        <div className="text-left text-sm"> 
          <h4 className='font-inter opacity-60'>Developed By:</h4>
          <p className='font-inter opacity-60'>Vashkarjya Das</p>
          <p className='font-inter opacity-60'>Zubayer Ahmed Zidhan Laskar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
