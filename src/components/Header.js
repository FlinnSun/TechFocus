import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownBlur = (e) => {
    // 检查焦点是否仍在下拉菜单内
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
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
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                onFocus={handleDropdownFocus}
                onBlur={handleDropdownBlur}
                onKeyDown={handleKeyDown}
              >
                <button 
                  className={`nav-link dropdown-toggle ${location.pathname === '/solution' || location.pathname === '/hardware' ? 'active' : ''}`}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Solution
                </button>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <Link 
                      to="/solution" 
                      className="dropdown-item"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      IT Service
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/hardware" 
                      className="dropdown-item"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Hardware
                    </Link>
                  </li>
                </ul>
              </li>
              <li><Link to="/contract-vehicles">Contract vehicles</Link></li>
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