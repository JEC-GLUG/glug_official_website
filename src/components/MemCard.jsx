import React from "react";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import "./MemCard.css";

const MemCard = ({ name, position, profilePhoto, linkedIn, github, instagram }) => {
  return (
    <div className="text-white mt-10">
      <div style={{ background: "rgba(70, 81, 98, 0.4)" }} className="rounded-md p-3 max-w-md w-96">
        <div className="flex" style={{ height: "8rem", alignItems: "center" }}>
          {/* Profile Photo */}
          <div className="w-1/4 ProfilePhoto">
            <img src={profilePhoto} alt="Profile" className="w-full h-auto"/>
          </div>

          {/* Name, Position, and Social Icons */}
          <div className="w-2/3">
            <h2 className="text-xl font-russo mb-2 Name">{name}</h2>
            {position && <h3 className="text-sm font-light mb-2">{position}</h3>} {/* Position Display */}
            <div className="flex items-center mt-4">
              {linkedIn && (
                <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="mr-4">
                  <BiLogoLinkedin style={{ color: "#0077B5" }} size="1.5em" />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="mr-4">
                  <BiLogoGithub style={{ color: "#000" }} size="1.5em" />
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <BiLogoInstagram style={{ color: "#C13584" }} size="1.5em" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemCard;
