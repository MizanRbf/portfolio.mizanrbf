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
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiNpm,
  SiNextdotjs,
} from "react-icons/si";

const SkillBadge = ({ icon, name }) => (
  <div className="flex flex-col justify-center items-center gap-4 bg-[#181818] hover:bg-[#1f242d] text-white rounded-sm text-base font-mono uppercase shadow-xl transition-all duration-150 w-40 h-40">
    <div>
      <span className="text-6xl">{icon}</span>
    </div>
    <div>{name}</div>
  </div>
);

const SkillSection = ({ title, items }) => (
  <div className="mb-15">
    <h3 className="text-lg font-semibold border-b-2  rounded-md  pb-1 mb-6">
      {title}
    </h3>
    <div className="flex flex-wrap  gap-4">
      {items.map((item, index) => (
        <SkillBadge key={index} icon={item.icon} name={item.name} />
      ))}
    </div>
  </div>
);

const SkillsComponent = () => {
  return (
    <section id="skills" className=" text-white py-12 md:px-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
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
              {
                name: "Next.js",
                icon: <SiNextdotjs className="text-white" />,
              },
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
            ]}
          />
        </div>
        {/* Right Side */}
        <div>
          {/* Database */}
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
              {
                name: "PostgreSQL",
                icon: <SiMongodb className="text-green-600" />,
              },
            ]}
          />

          {/* Backend */}
          <SkillSection
            title="Backend"
            items={[
              { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
              {
                name: "ExpressJS",
                icon: <SiExpress className="text-gray-150" />,
              },
            ]}
          />
          {/* Web Hosting */}
          <SkillSection
            title="Web Hosting"
            items={[
              { name: "Vercel", icon: <SiVercel className="text-white" /> },
              {
                name: "Firebase",
                icon: <SiFirebase className="text-yellow-400" />,
              },

              {
                name: "Netlify",
                icon: <SiNetlify className="text-cyan-500" />,
              },
            ]}
          />
          {/* Package Manager */}
          <SkillSection
            title="Package Manager"
            items={[{ name: "NPM", icon: <SiNpm className="text-red-500" /> }]}
          />

          {/* Version Control */}
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
