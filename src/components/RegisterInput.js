/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="inputLogin flex flex-col items-center space-y-4 ">
      <div className=" w-3/4 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap</label>
        <input value={name} onChange={onNameChange} className="p-3  w-full  h-12 rounded-md border-2  border-solid border-gray-300 transition ease-in-out m-0  focus:border-blue-600 focus:outline-none" type="text" placeholder="Nama" />
      </div>
      <div className=" w-3/4 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input value={email} onChange={onEmailChange} className="p-3  w-full  h-12 rounded-md border-2  border-solid border-gray-300 transition ease-in-out m-0  focus:border-blue-600 focus:outline-none" type="email" placeholder="Email" />
      </div>
      <div className=" w-3/4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input value={password} onChange={onPasswordChange} className=" p-3  w-full h-12 rounded-md border-2 border-solid border-gray-300 transition ease-in-out m-0  focus:border-blue-600 focus:outline-none" type="password" name="password" placeholder="Password" />
      </div>
      <button onClick={() => register({ name, email, password })} className="my-5 text-center hover:bg-gray-600 transition ease-linear text-white text-lg bg-black w-3/4 h-12 rounded-md" type="button" name="submit">Register</button>
    </div>
  );
}
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
export default RegisterInput;
