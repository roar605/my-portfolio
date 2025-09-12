import React from 'react'
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import bgImg from "../assets/background.jpg"
import { Dialog } from '@radix-ui/react-dialog';
import DialogStyleDefault from './Dialogue';

const projects=[
  {
    id:1,
    name:"Youtube-Clone",
    desc:"A simple frontend video streaming platform using reactjs",
    image:"",
    githubLink:"https://github.com/roar605/youtube-clone",
    deployedLink:"https://youtube-clone-dun-three.vercel.app/"
  },
  {
    id:2,
    name:"Tic-Tac-Toe",
    desc:"play tic-tac-toe game",
    image:"",
    githubLink:"https://github.com/roar605/Tic-Tac-Toe",
    deployedLink:"https://tic-tac-toe-beryl-mu.vercel.app/"
  },
  {
    id:3,
    name:"Football Quiz",
    desc:"A simple quizzing platform using html, css, javascript",
    image:"",
    githubLink:"https://github.com/roar605/project-Quiz",
    deployedLink:"https://project-quiz-six.vercel.app/"
  },
  {
    id:4,
    name:"Online Course Backend",
    desc:"Backend project for understanding authentication, routing and built REST API using nodejs nd express",
    image:"",
    githubLink:"https://github.com/roar605/OnlineCourseBackend",
    deployedLink:"https://github.com/roar605/OnlineCourseBackend"
  },
  {
    id:5,
    name:"e-commerce website",
    desc:"Full stack live website with payment integration",
    image:"",
    githubLink:"https://github.com/roar605/e-commerce",
    deployedLink:"https://github.com/roar605/e-commerce"
  }
]

function Projects() {
  return (
    <div className='flex p-8 gap-4 grid-cols-3'>
      
      {projects.map((project)=>(
        <CommerceCard key={project.id} p={project}></CommerceCard>
      ))}
    </div>
  )
}

function CommerceCard(props) {
  const project=props.p
  
  return (
    <Card className="w-[350px] shadow-none hover:shadow-none">
      <Card.Content className="pb-0">
        <img
          src={bgImg}
          className="w-full h-full"
          alt="Gameboy"
        />
      </Card.Content>
      <Card.Content className="flex justify-between items-center">
        <DialogStyleDefault p={project}></DialogStyleDefault>
      </Card.Content>
    </Card>
  );
}


export default Projects