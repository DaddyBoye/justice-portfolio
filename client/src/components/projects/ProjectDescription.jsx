import React from "react";
import projects from "./projectsData";
import { Helmet } from "react-helmet";
import GitBtn from "./GitBtn";
import DemoBtn from "./DemoBtn";
import SkillCard from "../resume/SkillCard";
import iconMap from "./iconMap";
import Contributors from "./Contributors";

const ProjectDescription = ({ projectId, onBack }) => {
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <article className="project-description active" data-page="projects">
      <Helmet>
        <title>{project.title}</title>
      </Helmet>
      <header>
        <h2 className="h2 article-title">Project</h2>
      </header>
      <img src={project.image} alt={project.title} className="rounded-xl" />
      <h3 className="h3 service-title mt-5">{project.title}</h3>
      <div className="mt-3 flex gap-x-3">
        {project.githubRepository && <GitBtn link={project.githubRepository} />}
        {project.liveDemo && <DemoBtn link={project.liveDemo} />}
      </div>
      <h3 className="h3 service-title mt-5">Project Description</h3>
      <section className="about-text">
        <p>{project.description}</p>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">Languages & Frameworks</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {project.techStack.map((tech) => (
            <SkillCard
              key={tech.name}
              icon={
                iconMap[tech.name] ? iconMap[tech.name]() : <DiJavascript1 />
              } // Call the function here
              name={tech.name}
              color={tech.color}
            />
          ))}
        </div>
      </section>
      <section className="skill mt-8">
        <h3 className="h3 skills-title">Contributors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.contributors.map((contributor) => (
            <Contributors
              key={contributor.name}
              image={contributor.image}
              name={contributor.name}
              link={contributor.githubLink}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default ProjectDescription;
