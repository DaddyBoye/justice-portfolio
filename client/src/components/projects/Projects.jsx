import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Projects = () => {
  // State to manage the active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // List of project items (data could come from props, state, or an API)
  const projects = [
    { id: 1, title: 'Finance', category: 'web development', image: '/images/project-1.jpg' },
    { id: 2, title: 'Orizon', category: 'web development', image: '/images/project-2.png' },
    { id: 3, title: 'Fundo', category: 'web design', image: '/images/project-3.jpg' },
    { id: 4, title: 'Brawlhalla', category: 'applications', image: '/images/project-4.png' },
    { id: 5, title: 'DSM', category: 'web design', image: '/images/project-5.png' },
    { id: 6, title: 'MetaSpark', category: 'web design', image: '/images/project-6.png' },
    { id: 7, title: 'Summary', category: 'web development', image: '/images/project-7.png' },
    { id: 8, title: 'Task Manager', category: 'applications', image: '/images/project-8.jpg' },
    { id: 9, title: 'Arrival', category: 'web development', image: '/images/project-9.png' },
  ];

  // Function to update the active filter
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  // Filtered projects based on active filter
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <article className="projects active" data-page="projects">
      <Helmet>
        <title>Lawson Buabassah | Projects</title>
      </Helmet>

      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {['all', 'web design', 'applications', 'web development'].map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={activeFilter === category ? 'active' : ''}
                onClick={() => handleFilterChange(category)}
                data-filter-btn
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;

