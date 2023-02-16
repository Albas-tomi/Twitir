/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import logo from '../assets/android.svg';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };
  return (
    <div className=" h-screen w-full md:bg-black/30 items-center">
      <div className="overflow-y-scroll  p-6 rounded md:w-1/2 md:h-[470px] md:relative md:top-14 bg-white mx-auto my-auto">
        <img className="w-[90px] mx-auto" src={logo} alt="Logo" />
        <h1 className="text-center text-2xl my-4 font-bold">Birgibing Dingin Twitir Sikiring</h1>
        <RegisterInput register={onRegister} />
        <div className="flex justify-center items-center">
          <p>
            Sudah Punya akun ?
          </p>
          {' '}

          {' '}
          <Link to="/" className="text-blue-700 mx-2"> Masuk</Link>
          {' '}
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
