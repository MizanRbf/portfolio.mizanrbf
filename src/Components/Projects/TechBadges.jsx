import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const techs = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "ReactJS", icon: <FaReact className="text-sky-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-700" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-700" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Netlify", icon: <SiNetlify className="text-blue-500" /> },
];

const TechBadges = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="flex items-center gap-1  px-2 py-1 rounded-sm shadow-md bg-white hover:scale-105 transition-transform duration-300"
        >
          <span className="text-sm">{tech.icon}</span>
          <span className="text-sm font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechBadges;
