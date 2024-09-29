import React from 'react';
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from 'react-icons/bi';
import './AluCard.css';

const AluCard = ({ name, position, profilePhoto, linkedIn, github, instagram }) => {
  const [iconHovered, setIconHovered] = React.useState(false);

  const handleIconHover = () => {
    setIconHovered(true);
  };

  const handleIconUnhover = () => {
    setIconHovered(false);
  };

  const handleIconClick = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="text-white mt-10">
      <div style={{ background: 'rgba(70, 81, 98, 0.4)' }} className="rounded-md p-3 max-w-md w-96">
        <div className="flex" style={{ height: "8rem", alignItems: "center" }}>
          {/* Left side (photo) */}
          <div className="w-1/4 ProfilePhoto" style={{ maxHeight: "100px", width: "100px", height: "100px", marginRight: "1rem" }}>
            <img src={profilePhoto} alt="Profile" className="w-full h-auto" style={{ height: "100%", width: "100%", borderRadius: "50%" }} />
          </div>
          <div className="w-2/3">
            {/* Name and Position */}
            <h2 className="text-xl font-russo mb-2 Name">{name}</h2>
            {position && <p className="text-sm text-gray-400">{position}</p>}

            {/* Icons */}
            <div className="flex items-center">
              <span className="mr-20 mt-4">
                <BiLogoLinkedin
                  style={{ color: '#0077B5', cursor: linkedIn ? 'pointer' : 'default', fontSize: '24px' }}
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconUnhover}
                  onClick={() => handleIconClick(linkedIn)}
                />
              </span>

              <span className="mr-20 mt-4">
                <BiLogoGithub
                  style={{ color: '#000', cursor: github ? 'pointer' : 'default', fontSize: '26px', fontWeight: 'bold' }}
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconUnhover}
                  onClick={() => handleIconClick(github)}
                />
              </span>

              <span className="mr-6 mt-4">
                <BiLogoInstagram
                  style={{ color: '#E4405F', cursor: instagram ? 'pointer' : 'default', fontSize: '24px' }}
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconUnhover}
                  onClick={() => handleIconClick(instagram)}
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
