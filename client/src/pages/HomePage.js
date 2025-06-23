import React from 'react';
import { toast } from 'react-toastify';

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear();
    toast.info('Logged out successfully');
    window.location.reload();
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src="https://static.independent.co.uk/2021/03/12/15/Post%20Office%20Corporate%203.jpg"
            alt="UK Post Office"
            style={styles.logo}
          />
          <h1 style={styles.brand}>UK Post Office Portal</h1>
        </div>
        <div style={styles.userInfo}>
          <p style={styles.email}>{user?.email}</p>
          <p style={styles.role}>({user?.role})</p>
        </div>
      </header>

      <main style={styles.main}>
        <img
        height={400}
        width={600}
  
          src="https://c8.alamy.com/comp/R57725/london-englanduklongfordheathrow-airport-lhr-terminalpost-officecounterman-men-malewoman-female-womenagentuk-gb-english-europeuk180829005-R57725.jpg"
          alt="Post Office Banner"
          style={styles.banner}
        />
        <h2 style={styles.title}>Welcome to Your Secure Dashboard</h2>
        <p style={styles.subtitle}>Manage access, deliveries, and more.</p>

      <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Track & Send Mail</h3>
            <p>Manage your mail and packages.</p>
          </div>

          <div style={styles.card}>
            <h3>Pay Bills</h3>
            <p>Access bill payment options securely.</p>
          </div>

          <div style={styles.card}>
            <h3>Passport Services</h3>
            <p>Apply or renew your passport.</p>
          </div>
           </div>

        <div style={styles.buttonContainer}>
          {user?.role === 'admin' && (
            <a href="/admin" style={{ ...styles.button, backgroundColor: '#b1001d' }}>
              Go to Admin Dashboard
            </a>
          )}
          <button onClick={logout} style={styles.button}>
            Logout
          </button>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 UK Post Office. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: '"Open Sans", sans-serif',
    backgroundColor: '#f8f8f8',
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
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  cardContainer: {
    display: 'flex',
    marginBottom: 20,
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    width: '260px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  logo: {
    height: '50px',
  },
  brand: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '600',
  },
  userInfo: {
    color: '#ffffff',
    textAlign: 'right',
  },
  email: {
    color: 'white',
    margin: 0,
    fontSize: '16px',
  },
  role: {
    margin: 0,
    color: 'white',
    fontSize: '14px',
    opacity: 0.8,
  },
  main: {
    flexGrow: 1,
    padding: '30px 20px',
    textAlign: 'center',
  },
  banner: {
    maxWidth: '100%',
    height: 250,
    width: 900,
    borderRadius: '8px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '26px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '25px',
    color: '#333',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    width: 400,
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: '#eeeeee',
    padding: '15px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
  },
};

export default HomePage;
