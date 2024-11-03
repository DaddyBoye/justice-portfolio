import React, { useState } from "react";
import { Helmet } from "react-helmet";
import projects from "./projectsData";

const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects =
    activeFilter === "all"
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
          {["all", "web design", "applications", "web development"].map(
            (category) => (
              <li className="filter-item" key={category}>
                <button
                  className={activeFilter === category ? "active" : ""}
                  onClick={() => handleFilterChange(category)}
                  data-filter-btn
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            )
          )}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href="#" onClick={() => onSelectProject(project.id)}>
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
