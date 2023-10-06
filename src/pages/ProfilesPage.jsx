import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';

const profiles = [
  {
    name: 'John Doe',
    position: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    instagram: 'https://www.instagram.com/johndoe',
    facebook: 'https://www.facebook.com/johndoe',
  },
  {
    name: 'asdasd',
    position: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    instagram: 'https://www.instagram.com/johndoe',
    facebook: 'https://www.facebook.com/johndoe',
  },
  {
    name: 'asdsad',
    position: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    instagram: 'https://www.instagram.com/johndoe',
    facebook: 'https://www.facebook.com/johndoe',
  },
  {
    name: 'John Doe',
    position: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    instagram: 'https://www.instagram.com/johndoe',
    facebook: 'https://www.facebook.com/johndoe',
  },
  {
    name: 'asdasd',
    position: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    instagram: 'https://www.instagram.com/johndoe',
    facebook: 'https://www.facebook.com/johndoe',
  },
  {
    name: 'asdsad',
    position: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    instagram: 'https://www.instagram.com/johndoe',
    facebook: 'https://www.facebook.com/johndoe',
  },
];

const ProfilesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profilesToShow = profiles.slice(currentIndex, currentIndex + 4);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (profiles.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (profiles.length - 3)) % (profiles.length - 3));
  };

  return (
    <div className="w-full mx-auto p-4 flex flex-col items-center">
      <div className="w-full max-w-lg relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>
          &lt;
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>
          &gt;
        </button>
        <div className="flex justify-between">
          {profilesToShow.map((profile, index) => (
            <div key={index} className="w-1/4 p-2">
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
