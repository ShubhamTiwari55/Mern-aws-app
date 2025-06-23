import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

beforeEach(() => {
  localStorage.setItem('user', JSON.stringify({ email: 'test@example.com', role: 'user' }));
});

afterEach(() => {
  localStorage.clear();
});

test('renders home page with user info', () => {
  render(<HomePage />);
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  expect(screen.getByText(/\(user\)/i)).toBeInTheDocument();
});
