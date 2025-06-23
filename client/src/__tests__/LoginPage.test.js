import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';

describe('LoginPage', () => {
  test('renders login form fields', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('displays error on invalid credentials (mocked)', async () => {
    // Mock API call if you want to test actual login
  });
});
