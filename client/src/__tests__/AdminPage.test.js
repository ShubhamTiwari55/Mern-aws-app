import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminPage from '../pages/AdminPage';
import { BrowserRouter } from 'react-router-dom';

describe('AdminPage', () => {
  test('renders admin dashboard for admin', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'admin@example.com', role: 'admin' }));

    render(
      <BrowserRouter>
        <AdminPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
  });
});
