import React from 'react';
import './Header.css';
import { FaPaw } from 'react-icons/fa';
import AuthNav from '../../Account-setup/AuthNav';

const Header = () => {
  return (
    <div className="flex justify-between w-full h-16 bg-gradient-to-r from-yellow-300 via-blue-400 to-red-500 px-7 text-xl tracking-wide shadow-xl rounded-xl mb-4 ">
      <h1 className="flex pt-3">
        <a className="flex items-center" href="/">
          Paw Detective <FaPaw className="ml-2.5" />
        </a>
      </h1>
      <nav className="flex items-center">
        <AuthNav />
      </nav>
    </div>
  );
};

export default Header;
