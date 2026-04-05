import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Awesometodos from '../assets/Awesometodos.png'
const projects = [
    {
        title: "Awesome Todos App",
        Description: "A Full-Stack Web App",
        image: Awesometodos,
        TechStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
        Link: "https://awesometodosapp-1dx4.onrender.com/?fbclid=IwY2xjawQ_DAxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeQSf8wbTKYuMdfQk7uHxNV_2kempNbSCokCwLhGW2QQcorXKYlJ-h11JVkHw_aem_GqQnP6WjmbUW0q2wPFzTlg",
        Github: "https://github.com/ricvalenzuelaa/awesometodosapp?fbclid=IwY2xjawQ_DfxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeRY6YsiQR1xUadFELh-XzhcKfIa2bH5XGBRVrtZqOc9mI0CrckXOAuy78ANA_aem_tPAGiuTWd9w72LUCwEd-5Q",
    },
];


const Projects = () => {
  return (
    <section id="projects" className = "min-h-screen flex flex-col items-center p-20">
      <h2 className ="text-white text-4xl font-bold">Featured <span className = "text-blue-600">Projects</span></h2>
     <div className = "grid grid-cols-2 gap-4 mt-10 ">
                {projects.map((project, projectIndex) =>(
                 <div 
                 key = { projectIndex}
                 className = "flex flex-col items-center p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 ">   


                 
                    <img
                    src = {project.image}
                    alt = {project.title}
                    className = "w-full h-64 rounded-lg object-cover mb-2 "
                    />                   
                 

                 <div className = "text-white text-xs font-medium ">
                  {project.title}  
                 </div>

                 <p className = "text-white text-xs mt-1 text-center">
                 {project.Description}  
                 </p>

                 <div className = "flex flex-wrap gap-2 justify-center mt-4">
                    {project.TechStack.map((tech, index) => (
                      <span 
                      key = {index}
                      className = "bg-blue-600/20 text-blue-400 rounded-md px-2 py-1 text-xs">
                        {tech}
                      </span>  
                    ))}
                    </div>

                    <div className = "flex gap-4 mt-6">
                        <a href = {project.Github}
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "text-white hover:text-blue-600 text-xl">
                            <FaGithub/>
                            <span className = "sr-only">Github repository</span>
                            </a>

                            <a href = {project.Link}
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = "text-white hover:text-blue-600 text-xl">
                                <FaExternalLinkAlt/>
                                <span className = "sr-only">Visit Live Site</span>
                            </a>
                        </div>
                    </div>
                     ))}
                    </div>
                    </section>
  )
}

export default Projects