import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//uncomment for test
//  jest.mock('../api', () => ({
//    post: jest.fn(() => Promise.resolve({ data: { message: 'User registered' } }))
//  }));

const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', password: '', role: 'user', adminCode: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      toast.success('Registered successfully');
      navigate('/login');
    } catch (err) {
      console.error('Register error:', err.response?.data || err.message);
      toast.error(err.response?.data?.message || 'Registration failed');
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            required
            style={styles.input}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
            style={styles.input}
          />
          <select
            name="role"
            onChange={handleChange}
            value={form.role}
            style={styles.input}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {form.role === 'admin' && (
            <input
              name="adminCode"
              type="text"
              placeholder="Admin Code"
              onChange={handleChange}
              value={form.adminCode}
              required
              style={styles.input}
            />
          )}
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        <p style={styles.error}>{error}</p>
        <p style={styles.link}>
          Already have an account? <a href="/login" style={styles.anchor}>Login</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #c8102e 0%, #003366 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#c8102e',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#003366',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '15px',
    border: 'none',
    borderRadius: '4px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  link: {
    marginTop: '15px',
    fontSize: '14px',
  },
  anchor: {
    color: '#c8102e',
    textDecoration: 'none',
  },
};

export default RegisterPage;
