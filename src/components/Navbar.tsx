import { Link } from 'react-router-dom';
import {useState} from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
         AIGETAI 
        </Link>

         {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
        
       <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/blog" className='blog-btn'>Blog</Link>
          <Link to="/Career" className="login-btn">Career</Link>
          <a href="/enquiry">Software Enquiry</a>
          <a href="/classes">Online Classes</a>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    </nav>
  );
}
