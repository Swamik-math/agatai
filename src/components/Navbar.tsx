import { Link } from 'react-router-dom';
import {useState} from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
         AIGETAI <span>Dream Machine</span>
        </Link>

         {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
        
       <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/Career" className="login-btn">Career</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    </nav>
  );
}
