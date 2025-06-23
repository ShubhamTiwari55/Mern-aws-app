import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    toast.info('Logged out successfully');
    navigate('/login');
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brandContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Post_Office_Logo.svg/512px-Post_Office_Logo.svg.png"
            alt="Post Office Logo"
            style={styles.logo}
          />
          <h1 style={styles.brand}>Admin Dashboard</h1>
        </div>
        <div style={styles.userSection}>
          <p style={styles.email}>{user?.email}</p>
          <p style={styles.role}>({user?.role})</p>
          <button onClick={logout} style={styles.logoutBtn}>Logout</button>
        </div>
      </header>

      <main style={styles.main}>
        <h2>Welcome, Admin!</h2>
        <p>This section is only accessible to users with the <strong>admin</strong> role.</p>

        {/* Example Admin Tools Section */}
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Manage Users</h3>
            <p>Create, edit or delete users registered in the system.</p>
          </div>
          <div style={styles.card}>
            <h3>System Logs</h3>
            <p>View login history and recent activity.</p>
          </div>
          <div style={styles.card}>
            <h3>Reports</h3>
            <p>Access reports related to service usage and statistics.</p>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 UK Post Office. Admin access only.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: '"Open Sans", sans-serif',
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#c8102e',
    color: 'white',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logo: {
    height: '50px',
  },
  brand: {
    fontSize: '24px',
    margin: 0,
  },
  userSection: {
    textAlign: 'right',
  },
  email: {
    margin: 0,
    fontSize: '16px',
  },
  role: {
    margin: 0,
    fontSize: '14px',
    opacity: 0.85,
  },
  logoutBtn: {
    marginTop: '5px',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  main: {
    padding: '40px 20px',
    textAlign: 'center',
    flexGrow: 1,
  },
  cardContainer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'left',
  },
  footer: {
    backgroundColor: '#eeeeee',
    textAlign: 'center',
    padding: '15px',
    fontSize: '14px',
    color: '#555',
  },
};

export default AdminPage;
