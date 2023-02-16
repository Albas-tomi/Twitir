/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
// *  - should handle username typing correctly
// *  - should handle email typing correctly
// *  - should handle password typing correctly
// *  - should call register function when login button is clicked
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

describe('RegisterInput component', () => {
  it('should handle username typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const inputUsername = await screen.getByPlaceholderText('Nama');

    // action
    await userEvent.type(inputUsername, 'albastomi');

    // assert
    expect(inputUsername).toHaveValue('albastomi');
  });
  it('should handle email typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const inputEmail = await screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(inputEmail, 'albastomi@gmail.com');

    // assert
    expect(inputEmail).toHaveValue('albastomi@gmail.com');
  });
  it('should handle password typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const inputPassword = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(inputPassword, 'passwordtest');

    // assert
    expect(inputPassword).toHaveValue('passwordtest');
  });
  it('should call login function when register button is clicked', async () => {
    // arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const inputUsername = await screen.getByPlaceholderText('Nama');
    await userEvent.type(inputUsername, 'albastomi');
    const inpuEmail = await screen.getByPlaceholderText('Email');
    await userEvent.type(inpuEmail, 'albastomi@gmail.com');
    const inputPassword = await screen.getByPlaceholderText('Password');
    await userEvent.type(inputPassword, 'passwordtest');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(registerButton);
    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'albastomi',
      email: 'albastomi@gmail.com',
      password: 'passwordtest',
    });
  });
});
