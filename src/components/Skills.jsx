import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaCss3Alt,
  FaTools,
  FaGithub,
  FaFigma
} from 'react-icons/fa';

import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiPostman
} from 'react-icons/si';

import {
    VscVscode
}from "react-icons/vsc";

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaReact />,
    skills: [
      { name: 'HTML', icon: <SiHtml5 /> },  
      { name: 'CSS', icon: <FaCss3Alt /> }, 
      { name: 'JavaScript', icon: <SiJavascript /> }, 
      { name: 'React', icon: <FaReact /> }, 
    ],
  },
  {
    title: 'Backend',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Java', icon: <FaJava /> },  
      { name: 'MySQL', icon: <FaDatabase /> }, 
      { name: 'Python', icon: <SiPython /> }, 
      { name: 'Node.js', icon: <FaNodeJs /> }, 
      { name: 'Express.js', icon: <SiExpress /> }, 
      { name: 'MongoDB', icon: <SiMongodb /> }, 
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Github', icon: <FaGithub /> },
      { name: 'Figma',  icon: <FaFigma  /> },
      { name: 'Vscode',  icon: <VscVscode/> },
      { name: 'Postman',  icon: <SiPostman /> },
      
      
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className = "min-h-screen flex flex-col items-center p-20">
         <h2 className ="text-blue-600 text-4xl font-bold mb-16">Skills</h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className = " border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all">
              
              <h3 className = "text-blue-400 text-xl font-bold flex items-center gap-3 mb-6">
                <span className = "text-2xl">{category.icon}</span>
                {category.title}
                </h3>
              
              <div className = "grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) =>(
                 <div 
                 key = {skillIndex}
                 className = "flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 transition-colors group">   

                 <span className = "text-white text-2xl mb-2 group-hover:scale-110 transition-transform">
                   {skill.icon} 
                 </span>
                 <span className = "text-white text-xs font-medium group-hover:text-blue-600">
                  {skill.name}  
                 </span>
                    </div>
                ))}
                </div>
                </div>
                ))}
                </div>
                </section>
            );
        };
export default Skills;