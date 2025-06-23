import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      const { token } = res.data;
      const payload = JSON.parse(atob(token.split('.')[1]));

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(payload));

      toast.success(`Welcome ${payload.role === 'admin' ? 'admin' : 'user'}!`);
      navigate(payload.role === 'admin' ? '/admin' : '/');
    } catch {
      setError('Invalid credentials');
      toast.error('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.error}>{error}</p>
        <p style={styles.link}>
          Don't have an account? <a href="/register" style={styles.anchor}>Sign up</a>
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

export default LoginPage;
