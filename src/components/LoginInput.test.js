/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// * - LoginInput component
// *  - should handle email typing correctly
// *  - should handle password typing correctly
// *  - should call login function when login button is clicked
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle username typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const inpuEmail = await screen.getByPlaceholderText('Email Address');

    // action
    await userEvent.type(inpuEmail, 'user@gmail.com');

    // assert
    expect(inpuEmail).toHaveValue('user@gmail.com');
  });
  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'password');

    // assert
    expect(passwordInput).toHaveValue('password');
  });
  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const inpuEmail = await screen.getByPlaceholderText('Email Address');
    await userEvent.type(inpuEmail, 'user@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'password');
    const loginButton = await screen.getByRole('button', { name: 'Masuk' });

    // action
    await userEvent.click(loginButton);
    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'user@gmail.com',
      password: 'password',
    });
  });
});
