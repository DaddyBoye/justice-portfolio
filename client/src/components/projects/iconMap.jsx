// src/utils/iconMap.jsx

import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { DiMongodb, DiJavascript1, DiMysql } from 'react-icons/di';
import { SiExpress, SiFlutter, SiCplusplus, SiDjango, SiTailwindcss } from 'react-icons/si';

const iconMap = {
  "React": () => <FaReact />,
  "Node.js": () => <FaNodeJs />,
  "Python": () => <FaPython />,
  "JavaScript": () => <DiJavascript1 />,
  "Java": () => <FaJava />,
  "HTML5": () => <FaHtml5 />,
  "CSS3": () => <FaCss3Alt />,
  "Express": () => <SiExpress />,
  "MongoDB": () => <DiMongodb />,
  "MySQL": () => <DiMysql />,
  "Flutter": () => <SiFlutter />,
  "C++": () => <SiCplusplus />,
  "PHP": () => <FaPhp />,
  "Django": () => <SiDjango />,
  "TailwindCSS": () => <SiTailwindcss />
};

export default iconMap;
