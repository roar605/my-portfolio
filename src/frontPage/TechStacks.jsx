import { useState } from "react";
function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  const techs = {
    frontend: [
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "NextJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }],
    backend: [
      { name: "NodeJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "ExpressJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Mongoose", img: "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" },
      { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "JWT", img: "https://jwt.io/img/pic_logo.svg" },
    ],
    others: [
      { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Postman", img: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-16">
      <h2 className="text-4xl font-bold mb-8">Tech Stacks</h2>

      {/* Tabs */}
      <div className="flex space-x-6 mb-10 text-lg">
        {["frontend", "backend", "others"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 ${
              activeTab === tab
                ? "text-gray-700 border-b-2 border-pink-400"
                : "text-pink-400 hover:text-pink-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20">
        {techs[activeTab].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full  flex items-center justify-center shadow ">
              <img src={tech.img} alt={tech.name} className="w-12 h-12" />
            </div>
            <p className="mt-3 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default TechStack