/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { GoHome } from 'react-icons/go';
import { FaHashtag } from 'react-icons/fa';
import { MdLeaderboard } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/android.svg';

function SideBar({ authUser, signOut }) {
  const { id, name, avatar } = authUser;
  return (
    <div>
      <div className="fixed  md:w-60 md:items-end flex flex-col items-center justify-between border-solid border-r-2 border-gray-100  w-20 h-screen  ">
        <div className=" flex items-center flex-col  gap-8 items_icons">
          <img
            className="mt-5 w-[50px] md:w-[65px] p-2 rounded-full hover:bg-blue-400/20 md:mr-5"
            src={logo}
            alt="logo"
          />
          <nav>
            <Link to="/">
              <GoHome className="text-[40px] md:text-[50px] hover:bg-black/20 rounded-full transition-all duration-800 p-2 md:mr-5" />
            </Link>
            <FaHashtag className=" text-[40px] md:text-[50px] hover:bg-black/20 rounded-full  transition-all duration-800 p-2 md:mr-5" />
            <Link to="leaderboards">
              <MdLeaderboard className="text-[40px] md:text-[50px] hover:bg-black/20  transition-all duration-800 rounded-full p-2 md:mr-5" />
            </Link>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center profile my-5 md:mr-7">
          <img
            src={avatar}
            alt={id}
            title={name}
            className="w-[60px] md:text-[50px] hover:bg-black/20  transition-all duration-800 rounded-full p-2"
          />
          <button type="submit" onClick={signOut}>
            <AiOutlineLogout className="text-[40px] md:text-[50px] hover:bg-black/20  transition-all duration-800 rounded-full p-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  authUser: PropTypes.objectOf(PropTypes.string).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default SideBar;
