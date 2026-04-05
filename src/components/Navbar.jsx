

const Navbar = () => {
  return (

    <nav className = "sticky top-0 flex items-center justify-between px-10 py-5 ">
    <div className = "text-2xl font-bold text-pink-600 tracking-tight">
        <a href ="#home">Ric <span className = "text-blue-600">Portfolio</span></a>
        </div>

       <div className = "text-white font-medium space-x-8">
        <a href = "#home" className = " hover:text-blue-600 ">Home</a>
         <a href = "#about" className = "hover:text-blue-600 ">About</a>
          <a href = "#skills" className = "hover:text-blue-600 ">Skills</a>
           <a href = "#projects" className = "hover:text-blue-600 ">Projects</a>
           <a href = "#contacts" className = "bg-blue-600 text-black rounded-full text-sm font-bold hover:bg-blue-700 px-6 py-2">Contact Me</a> 
            </div>
           </nav>
           
  )
}

export default Navbar
