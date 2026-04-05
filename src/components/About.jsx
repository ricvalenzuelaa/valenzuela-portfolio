import ProfileCard from "./ProfileCard"
import Profile from '../assets/ric.jpg'

const About = () => {
  return (
     <section id = "about" className = "min-h-screen flex items-center justify-center gap-10 ">
  <ProfileCard
  avatarUrl={Profile}
/>
  <div className=" max-w-xl">
    <h2 className ="text-white text-4xl font-bold">About <span className = "text-blue-600">Me</span></h2>
    <p className = "text-white text-lg mt-6 ">I'm the type of person who loves exploring new things that can help me further my knowledge towards my career
    </p>
    </div>
  
</section>
  )
}

export default About