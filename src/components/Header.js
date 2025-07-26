import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          <nav className="nav">
            <ul className="nav-list">
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li 
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="nav-link dropdown-toggle">Capability</span>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/solution" className="dropdown-item">IT Service</Link></li>
                    <li><Link to="/hardware" className="dropdown-item">Products</Link></li>
                </ul>
                )}
              </li>

              <li><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
              <li><Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>News</Link></li>
            </ul>
          </nav>
          <Link to="/contact" className="btn btn-primary">
            Contract
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 