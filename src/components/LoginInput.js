/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <div className="inputLogin flex flex-col items-center space-y-4 ">
      <div className=" w-3/4 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input value={email} onChange={onEmailChange} className="p-3  w-full  h-12 rounded-md border-2  border-solid border-gray-300 transition ease-in-out m-0  focus:border-blue-600 focus:outline-none" type="email" placeholder="Email Address" />
      </div>
      <div className=" w-3/4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input value={password} onChange={onPasswordChange} className=" p-3  w-full h-12 rounded-md border-2 border-solid border-gray-300 transition ease-in-out m-0  focus:border-blue-600 focus:outline-none" type="password" name="passsword" placeholder="Password" />
      </div>
      <button onClick={() => login({ email, password })} className="my-5 text-center hover:bg-gray-600 transition ease-linear text-white text-lg bg-black w-3/4 h-12 rounded-md" type="button" name="button">Masuk</button>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
export default LoginInput;
