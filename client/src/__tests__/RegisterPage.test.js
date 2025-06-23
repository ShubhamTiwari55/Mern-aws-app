import { render, screen, fireEvent } from '@testing-library/react';
import RegisterPage from '../pages/RegisterPage';
import { BrowserRouter, useNavigate } from 'react-router-dom';

describe('RegisterPage', () => {
  test('renders register form fields', () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument(); // Role select
  });

  test('shows admin code field when admin is selected', () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'admin' } });

    expect(screen.getByPlaceholderText(/admin code/i)).toBeInTheDocument();
  });
});
