import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const ProfileCard = ({ name, position, linkedin, instagram, facebook }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{name}</h2>
      <p className="text-gray-600 mb-4">{position}</p>
      <div className="flex items-center mb-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaLinkedin size={24} color="#0077B5" />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaInstagram size={24} color="#E4405F" />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color="#1877F2" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
