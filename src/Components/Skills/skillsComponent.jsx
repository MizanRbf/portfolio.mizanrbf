import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiNpm,
  SiGithubpages,
} from "react-icons/si";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

const SkillBadge = ({ icon, name }) => (
  <div className="flex items-center gap-2 bg-[#000000] hover:bg-[#1f242d] text-white px-3 py-2 rounded-sm text-xs font-mono uppercase shadow-sm transition-all duration-200">
    <span className="text-base">{icon}</span>
    {name}
  </div>
);

const SkillSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold border-b pb-1 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <SkillBadge key={index} icon={item.icon} name={item.name} />
      ))}
    </div>
  </div>
);

const SkillsComponent = () => {
  return (
    <section id="skills" className=" text-black py-12 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <SkillSection
            title="Languages"
            items={[
              {
                name: "JavaScript",
                icon: <FaJs className="text-yellow-400" />,
              },
              { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
              { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            ]}
          />

          <SkillSection
            title="JS Framework/Library"
            items={[
              { name: "ReactJS", icon: <FaReact className="text-sky-400" /> },
            ]}
          />

          <SkillSection
            title="CSS Framework"
            items={[
              {
                name: "TailwindCSS",
                icon: <SiTailwindcss className="text-cyan-500" />,
              },
            ]}
          />

          <SkillSection
            title="Design Tools"
            items={[
              { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
              { name: "Framer", icon: <SiFramer className="text-white" /> },
            ]}
          />
        </div>

        <div>
          <SkillSection
            title="Database"
            items={[
              {
                name: "Firebase",
                icon: <SiFirebase className="text-yellow-400" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-600" />,
              },
            ]}
          />

          <SkillSection
            title="Backend"
            items={[
              { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
              {
                name: "ExpressJS",
                icon: <SiExpress className="text-gray-200" />,
              },
              {
                name: "API",
                icon: <BsFillFileEarmarkCodeFill className="text-teal-400" />,
              },
            ]}
          />

          <SkillSection
            title="Web Hosting"
            items={[
              { name: "Vercel", icon: <SiVercel className="text-white" /> },
              {
                name: "Firebase",
                icon: <SiFirebase className="text-yellow-400" />,
              },
              {
                name: "GitHub Pages",
                icon: <SiGithubpages className="text-white" />,
              },
              {
                name: "Netlify",
                icon: <SiNetlify className="text-cyan-500" />,
              },
            ]}
          />

          <SkillSection
            title="Package Manager"
            items={[{ name: "NPM", icon: <SiNpm className="text-red-500" /> }]}
          />

          <SkillSection
            title="Version Control"
            items={[
              { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
              { name: "GitHub", icon: <FaGithub className="text-white" /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
