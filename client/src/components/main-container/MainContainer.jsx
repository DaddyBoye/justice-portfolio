import React, { useState } from 'react';
import NavBar from '../nav/NavBar';
import About from '../about/About';
import Resume from '../resume/Resume';
import Projects from '../projects/Projects';
import Blogs from '../blog/Blogs';
import Wall from '../wall/Wall';

const MainContainer = () => {
  // Initialize active page state
  const [activePage, setActivePage] = useState('About');

  // Function to render content based on active page
  const renderContent = () => {
    console.log("Current active page:", activePage);
    switch (activePage) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />;
      case 'Blog':
        return <Blogs />;
      case 'Wall':
        return <Wall />;
      default:
        return <About />;
    }
  };

  return (
    <div className="main-content">
      {/* Pass setActivePage to NavBar to handle page switching */}
      <NavBar onPageChange={setActivePage} />
      {renderContent()} {/* Only display the content of the active page */}
    </div>
  );
};

export default MainContainer;
