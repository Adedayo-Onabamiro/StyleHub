// AvatarContainer.js
import React from 'react';

const AvatarContainer = () => {
  const avatars = [
    './img/a1.jpg',
    './img/a2.jpg',
    './img/a3.jpg',
    './img/a4.jpg',
    './img/a5.jpg',
  ];

  return (
    <div className="relative flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`rounded-full border-2 border-white ${index !== 0 ? '-ml-4' : ''}`}
        >
          <img
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      ))}
      <span className="ml-4 text-xl font-bold">+90</span>
    </div>
  );
};

export default AvatarContainer;
