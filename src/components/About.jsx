import ProfileCard from "./ProfileCard"
import Profile from '../assets/Ric.jpg'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto w-full">
      <div className="w-full flex justify-center lg:w-auto">
        <ProfileCard avatarUrl={Profile} />
      </div>

      <div className="max-w-xl w-full text-left">
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mt-4 sm:mt-6 leading-relaxed">
          Aspiring Backend developer & UX designer combining solid functionality with clean, user-centric design to craft seamless digital experiences.
        </p>
      </div>
    </section>
  )
}

export default About