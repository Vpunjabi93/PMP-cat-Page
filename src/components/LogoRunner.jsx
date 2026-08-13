import React from 'react';

const logos = [
  '/assets/logos/iim-calcutta-new.png',
  '/assets/logos/iim-indore-new.jpg',
  '/assets/logos/iim-kashipur-new.png',
  '/assets/logos/iim-kozhikode-new.png',
  '/assets/logos/iim-nagpur-new.jpg'
];

export default function LogoRunner() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="logo-runner-wrapper">
      <div className="logo-runner-track">
        {/* Duplicating the array 3 times ensures a smooth infinite loop regardless of screen size */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-runner-item">
            <img src={`${base}${logo.replace(/^\//, '')}`} alt={`Institute Partner ${index}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
