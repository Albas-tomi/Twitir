/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Header({ Background }) {
  return (
    <nav className={`${Background === 'blue' ? 'bg-blue-500' : 'bg-black/10'} fixed z-20 left-20 md:left-60 border-solid backdrop-blur-md border-b-2 border-gray-100 h-28 w-full`}>
      <h1 className="text-blue-800 top-0 m-4 text-xl font-bold">
        Home
      </h1>
    </nav>
  );
}

export default Header;
