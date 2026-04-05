import ProfileCard from "./ProfileCard"
import Profile from '../assets/Ric.jpg'

const Home = () => {
  return (
     <section id = "home" className = "min-h-screen flex  items-center justify-center  gap-10">
      <div className = "text-left text-white max-w-xl">
      <h1 className = "text-5xl  font-extrabold leading-tight">Hi, I'm <span className = "text-blue-600">Ric Andrei Valenzuela</span></h1>
      <div className = " text-3xl font-medium mt-4">
        Backend Developer
        </div>
        <p className = " text-lg mt-6 ">Currently a 2nd Year Student of BSIT at Western Institute of Technology </p>
         <div className="mt-10 flex gap-4">

        <a href ="#contacts" className = "bg-blue-600 text-white font-bold rounded-full px-7 py-3">Get in Touch</a>
        <a href ="#projects" className = "border-2 border-blue-600 text-blue-600 font-bold rounded-full px-7 py-3">View My Work</a>
        </div>
        </div>
          <ProfileCard
          avatarUrl ={Profile} 
          />

     </section>
  )
}

export default Home