import React from 'react';

// XLRI Jamshedpur is the sixth partner — add its logo here once the asset is in /public.
const logos = [
  '/assets/logos/iim-indore-new.jpg',
  '/assets/logos/iim-kozhikode-new.png',
  '/assets/logos/iim-nagpur-new.jpg',
  '/assets/logos/iit-delhi.png',
  '/assets/logos/iitm-pravartak.png'
];

export default function LogoRunner() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="logo-runner-wrapper">
      <div className="logo-runner-track">
        {/* Duplicating the array 3 times ensures a smooth infinite loop regardless of screen size */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-runner-item">
            <img src={`${base}${logo.replace(/^\//, '')}`} alt="" aria-hidden="true" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
