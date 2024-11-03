import React, { useState } from 'react';
import NavBar from '../nav/NavBar';
import About from '../about/About';
import Resume from '../resume/Resume';
import Projects from '../projects/Projects';
import Blogs from '../blog/Blogs';
import Wall from '../wall/Wall';
import ProjectDescription from '../projects/ProjectDescription';

const MainContainer = () => {
  const [activePage, setActivePage] = useState('About');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Function to render content based on active page or selected project
  const renderContent = () => {
    if (selectedProjectId) {
      return <ProjectDescription projectId={selectedProjectId} onBack={() => setSelectedProjectId(null)} />;
    }
    
    switch (activePage) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects onSelectProject={setSelectedProjectId} />;
      case 'Blog': 
        return <Blogs />;
      case 'Wall':
        return <Wall />;
      default:
        return <About />;
    }
  };

  // Clear selected project and set active page
  const handlePageChange = (page) => {
    setSelectedProjectId(null);  // Clear selected project when navigating
    setActivePage(page);          // Set the new active page
  };

  return (
    <div className="main-content">
      <NavBar onPageChange={handlePageChange} />
      {renderContent()} 
    </div>
  );
};

export default MainContainer;
