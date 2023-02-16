/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import logo from '../assets/android.svg';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return (
    <div className="flex flex-col items-center h-screen w-full md:bg-black/30">
      <div className=" p-4 rounded md:w-1/2 md:h-[600px] md:relative bg-white mx-auto my-auto">
        <img className="w-[90px] mx-auto" src={logo} alt="Logo" />
        <h1 className="text-center text-2xl my-4 font-bold">Misik ki Twitir</h1>
        <LoginInput login={onLogin} />
        <div className="flex items-center justify-center">
          <p className="">
            Sudah Punya akun ?
          </p>
          {' '}
          <Link to="/register" className="text-blue-700 mx-2"> Register</Link>
          {' '}
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
