import { Card } from "@/components/retroui/Card";
import youtube from "../assets/youtube.png";
import tictactoe from "../assets/tictactoe.png";
import ecommerce from "../assets/ecommerce.png";
import onlinecourse from "../assets/onlinecourse.png";
import quiz from "../assets/quiz.png";
import tech from "../assets/tech.png"


const projects = [
  {
    name: "Youtube-Clone",
    desc: "A simple frontend video streaming platform using reactjs",
    image: youtube,
    githubLink: "https://github.com/roar605/youtube-clone",
    deployedLink: "https://youtube-clone-dun-three.vercel.app/",
    tech: ["react", "html", "javascript", "tailwindcss"]
  },
  {
    name: "Tic-Tac-Toe",
    desc: "play tic-tac-toe game",
    image: tictactoe,
    githubLink: "https://github.com/roar605/Tic-Tac-Toe",
    deployedLink: "https://tic-tac-toe-beryl-mu.vercel.app/",
    tech: ["react", "html", "javascript", "tailwindcss"]
  },
  {
    name: "Football Quiz",
    desc: "A simple quizzing platform using html, css, javascript",
    image: quiz,
    githubLink: "https://github.com/roar605/project-Quiz",
    deployedLink: "https://project-quiz-six.vercel.app/",
    tech: ["react", "html", "javascript", "tailwindcss"]
  },
  {
    name: "Online Course Backend",
    desc: "Backend project for understanding authentication, routing and built REST API using nodejs nd express",
    image: onlinecourse,
    githubLink: "https://github.com/roar605/OnlineCourseBackend",
    deployedLink: "https://github.com/roar605/OnlineCourseBackend",
    tech: ["react", "html", "javascript", "tailwindcss"]
  },
  {
    name: "e-commerce website",
    desc: "Full stack live website with payment integration",
    image: ecommerce,
    githubLink: "https://github.com/roar605/e-commerce",
    deployedLink: "https://github.com/roar605/e-commerce",
    tech: ["react", "html", "javascript", "tailwindcss"]
  }
]

function Projects() {
  console.log(projects);

  return (
    <div className="min-h-screen  px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
function ProjectCard({ image, name, desc, githubLink ,deployedLink}) {
  return (
    <div className="rounded-xl overflow-hidden group">
      <img
        src={image}
        alt={name}
        className="w-full h-70 object-cover rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="p-4 flex">
        <div className="w-2/3">
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
        <div className="">
          <a href={deployedLink} target="_blank">
            <button className="mx-2 border-pink-400 border-2 rounded-lg px-2 text-pink-400 hover:cursor-pointer hover:text-black hover:bg-pink-400">Demo</button>
          </a>
          <a href={githubLink} target="_blank"><button className="mx-2 border-pink-400 border-2 rounded-lg px-2 text-pink-400 hover:cursor-pointer hover:text-black hover:bg-pink-400">Github</button>
          </a>
        </div>


      </div>
    </div>
  );
}


export default Projects