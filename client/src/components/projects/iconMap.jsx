// src/utils/iconMap.jsx

import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { DiMongodb, DiJavascript1, DiMysql } from 'react-icons/di';
import { SiExpress, SiFlutter, SiCplusplus, SiDjango, SiTailwindcss, SiFirebase, SiArduino } from 'react-icons/si';
import { SiOpenai as OpenAIIcon } from 'react-icons/si'; // use destructuring to import the icon

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
  "TailwindCSS": () => <SiTailwindcss />,
  "OpenAI": () => <OpenAIIcon />,
  "Firebase": () => <SiFirebase />,
  "Arduino": () => <SiArduino />
};

export default iconMap;

