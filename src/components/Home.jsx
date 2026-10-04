import ProfileCard from "./ProfileCard"
import Profile from '../assets/Ric.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ricvalenzuelaa',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ric-andrei-valenzuela-a4650a3b8/',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:ricvalenzuela17@gmail.com',
    icon: FaEnvelope,
  },

]

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-16 sm:pb-24 max-w-7xl mx-auto w-full">
      <div className="text-left text-white max-w-xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-600">Ric Andrei Valenzuela</span>
        </h1>
        <div className="text-xl sm:text-2xl lg:text-3xl font-medium mt-3 sm:mt-4 text-gray-200">
          Backend Developer
        </div>
        <p className="text-base sm:text-lg mt-4 sm:mt-6 text-gray-300 leading-relaxed">
          Currently a 2nd Year Student of BSIT at Western Institute of Technology
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
          <a href="#contacts" className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold rounded-full px-6 sm:px-7 py-3 text-sm sm:text-base shadow-lg shadow-blue-600/30">Get in Touch
          </a>

          <a href="#projects" className="border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition duration-300 font-bold rounded-full px-6 sm:px-7 py-3 text-sm sm:text-base">View My Work
          </a>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">Follow Me:
          </span>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} title={`Follow me on ${social.name}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"><Icon className="text-lg" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center lg:w-auto">
        <ProfileCard avatarUrl={Profile} />
      </div>
    </section>
  )
}

export default Home