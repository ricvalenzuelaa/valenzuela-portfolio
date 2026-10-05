

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">
        <div className="text-xl sm:text-2xl font-bold text-pink-600 tracking-tight">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Ric <span className="text-blue-600">Portfolio</span>
          </a>
        </div>


        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-500 transition-colors duration-200">{link.name}
            </a>
          ))}
          <a href="#contacts" className="bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition duration-200 px-5 py-2 shadow-md shadow-blue-600/30">Contact
          </a>
        </div>


        <button type="button"
          onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>{isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-white text-lg font-medium hover:text-blue-500 py-1 transition-colors">{link.name}
            </a>
          ))}
          <div className="pt-2">
            <a href="#contacts" onClick={() => setIsOpen(false)} className="block text-center bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition duration-200 px-6 py-2.5 shadow-md shadow-blue-600/30">Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
