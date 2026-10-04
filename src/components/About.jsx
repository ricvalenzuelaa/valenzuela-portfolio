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
        <p className="text-gray-300 text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed">
          I'm the type of person who loves exploring new things that can help me further my knowledge towards my career.
        </p>
      </div>
    </section>
  )
}

export default About