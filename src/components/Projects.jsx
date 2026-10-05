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
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto w-full">
      <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">
        Featured <span className="text-blue-600">Projects</span>
      </h2>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300 w-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 rounded-xl object-cover mb-4 border border-white/10 shadow-md"
            />

            <div className="text-white text-base sm:text-lg font-bold text-center">
              {project.title}
            </div>

            <p className="text-gray-300 text-xs sm:text-sm mt-1 text-center">
              {project.Description}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {project.TechStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-md px-2.5 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mt-6">
              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub repository"
                className="text-gray-300 hover:text-blue-500 hover:scale-110 text-xl transition-all duration-200"
              >
                <FaGithub />
                <span className="sr-only">Github repository</span>
              </a>

              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Live Site"
                className="text-gray-300 hover:text-blue-500 hover:scale-110 text-xl transition-all duration-200"
              >
                <FaExternalLinkAlt />
                <span className="sr-only">Visit Live Site</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects