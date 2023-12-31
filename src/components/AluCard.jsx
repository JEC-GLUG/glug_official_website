import React from 'react';
import { BiLogoLinkedin, BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import './AluCard.css';

const AluCard = ({ name, profilePhoto }) => {
  const [iconHovered, setIconHovered] = React.useState(false);

  const handleIconHover = () => {
    setIconHovered(true);
  };

  const handleIconUnhover = () => {
    setIconHovered(false);
  };

  return (
    <div className="text-white mt-10">
      <div style={{ background: 'rgba(70, 81, 98, 0.4)' }} className="rounded-md p-3 max-w-md w-96">
        <div className="flex">
          {/* Left side (photo) */}
          <div className="w-1/4 pr-4 ProfilePhoto">
            <img src={profilePhoto} alt="Profile" className="w-full h-auto" />
          </div>
          <div className="w-2/3">
            {/* Name */}
            <h2 className="text-xl font-russo mb-2 Name">{name}</h2>

            {/* Icons */}
            <div className="flex items-center">
              <span className="mr-20 mt-4">
                <BiLogoLinkedin
                  style={{ color: '#0077B5' }}
                  className="fas fa-envelope icon-hover"
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconUnhover}
                />
              </span>
              <span className="mr-20  mt-4">
                <BiLogoFacebookCircle
                  style={{ color: '#0077B5' }}
                  className="fas fa-envelope icon-hover"
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconUnhover}
                />
              </span>
              <span className="mr-6  mt-4">
                <BiLogoInstagram
                  style={{ color: '#0077B5' }}
                  className="fas fa-envelope icon-hover"
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconUnhover}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluCard;

