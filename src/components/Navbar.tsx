import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
         AIGETAI <span>Dream Machine</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/try" className="cta-btn">Try Now</Link>
        </div>
      </div>
    </nav>
  );
}
