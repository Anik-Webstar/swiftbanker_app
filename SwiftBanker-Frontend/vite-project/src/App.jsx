import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Transfer from './pages/Transfer';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/">Home</Link>

          {!localStorage.getItem('user') && (
            <>
              <Link to="/register" style={{ marginLeft: '10px' }}>Register</Link>
              <Link to="/login" style={{ marginLeft: '10px' }}>Login</Link>
            </>
          )}

          {localStorage.getItem('user') && (
            <>
              <Link to="/dashboard" style={{ marginLeft: '10px' }}>Dashboard</Link>
              <Link to="/transfer" style={{ marginLeft: '10px' }}>Transfer</Link>
              <Link to="/transactions" style={{ marginLeft: '10px' }}>Transactions</Link>
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  window.location.href = '/';
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
