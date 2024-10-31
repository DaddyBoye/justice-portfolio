import React, { useState } from 'react';

const NavBar = ({ onPageChange }) => {
  const [activePage, setActivePage] = useState('About');

  const handlePageChange = (page) => {
    setActivePage(page);        // Update NavBar's active link state
    onPageChange(page);          // Notify MainContainer of the page change
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['About', 'Resume', 'Projects', 'Blog', 'Wall'].map((page) => (
          <li className="navbar-item" key={page}>
            <button
              className={`navbar-link ${activePage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
              data-nav-link
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
