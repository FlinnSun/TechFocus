import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [capabilitiesDropdownOpen, setCapabilitiesDropdownOpen] = useState(false);

  const handleCapabilitiesMouseEnter = () => {
    setCapabilitiesDropdownOpen(true);
  };

  const handleCapabilitiesMouseLeave = () => {
    setCapabilitiesDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          <nav className="nav">
            <ul className="nav-list">
              <li><Link to="/company" className={location.pathname === '/company' ? 'active' : ''}>Company</Link></li>
              <li 
                className="nav-item dropdown"
                onMouseEnter={handleCapabilitiesMouseEnter}
                onMouseLeave={handleCapabilitiesMouseLeave}
              >
                <span className="nav-link dropdown-toggle">Capabilities</span>
                {capabilitiesDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/solution" className="dropdown-item">IT Service</Link></li>
                    <li><Link to="/hardware" className="dropdown-item">IT Products & Hardware</Link></li>
                </ul>
                )}
              </li>

              <li><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
            </ul>
          </nav>
          <Link to="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 