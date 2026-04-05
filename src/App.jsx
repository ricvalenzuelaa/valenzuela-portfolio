import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className = "relative min-h-screen bg-black">
     <Layout />

        <div className="relative z-10">
     <Navbar/>

     <Home/>
     
     <About/>

     <Skills/>
     
     <Projects/>

     <Contacts/>
   </div>
     </div>
  )
}

    
export default App
