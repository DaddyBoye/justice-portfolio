import React from "react";
import { Helmet } from "react-helmet";
import {
  FaPython,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDjango,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";
import SkillCard from "./SkillCard";

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <Helmet>
        <title>Lawson Buabassah | Resume</title>
      </Helmet>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              University of Mines and Technology, SRID
            </h4>

            <span>2022 — 2025</span>

            <p className="timeline-text">
              BSc. Computer Science and Engineering
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Aggrey Memorial A.M.E Zion Senior High School
            </h4>

            <span>2018 — 2021</span>

            <p className="timeline-text">General Science</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Intern, Software Engineer
            </h4>

            <p className="timeline-text">Amalitech</p>

            <span>October 2024 — November 2024</span>

            <p className="timeline-text">
              Collaborated with team players to design, develop, and deploy
              software solutions, while honing my skills in Agile development
              methodologies and industry-standard best practices.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer</h4>

            <p className="timeline-text">Ekke Ltd.</p>

            <span>2022 — 2024</span>

            <p className="timeline-text">
              Developed and maintained responsive, scalable, and secure web
              applications that meet client expectations.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Intern, Software Engineer
            </h4>

            <p className="timeline-text">Soso Care</p>

            <span>November 2022 — January 2023</span>

            <p className="timeline-text">
              Contributed to the development of USSD systems for Soso Care,
              working closely with senior developers to ensure seamless
              operations.
            </p>
          </li>
        </ol>
      </section>

      <section className="download-resume flex justify-between w-full mb-8">
        <a href="/resume/resume.pdf" download className="form-btn ml-0">
          <button>Download Full Resume</button>
        </a>
      </section> 

      <section className="skill">
        <h3 className="h3 skills-title">My Tech Stack</h3>

        <ul className="skills-list ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            <SkillCard icon={<FaReact />} name="React" color="#61dafb" />
            <SkillCard icon={<FaNode />} name="Node.js" color="#68a063" />
            <SkillCard icon={<FaPython />} name="Python" color="#3572a5" />
            <SkillCard
              icon={<SiJavascript />}
              name="JavaScript"
              color="yellow"
            />
            <SkillCard icon={<FaJava />} name="Java" color="orange" />
            <SkillCard icon={<FaHtml5 />} name="HTML5" color="#e34c26" />
            <SkillCard icon={<FaCss3Alt />} name="CSS3" color="#264de4" />
            <SkillCard icon={<SiExpress />} name="Express" color="gray" />
            <SkillCard icon={<SiMongodb />} name="MongoDB" color="#4DB33D" />
            <SkillCard icon={<SiMysql />} name="MySQL" color="#00758F" />
            <SkillCard icon={<SiFlutter />} name="Flutter" color="#02569B" />
            <SkillCard icon={<SiCplusplus />} name="C++" color="#00599C" />
            <SkillCard icon={<FaPhp />} name="PHP" color="#777BB4" />
            <SkillCard icon={<SiDjango />} name="Django" color="#092E20" />
            <SkillCard
              icon={<FaCss3Alt />}
              name="TailwindCSS"
              color="#0ea5e9"
            />
          </div>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
