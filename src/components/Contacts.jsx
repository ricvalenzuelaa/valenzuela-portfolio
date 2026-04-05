import {FaEnvelope} from 'react-icons/fa';

const Contacts = () => {
  return (
   <section id="contacts" className = "min-h-screen flex flex-col items-center p-20">
         <div className=" max-w-4xl text-center">

            <h2 className = "text-white text-4xl font-bold  mb-8">
                Contact <span className = "text-blue-600">Me</span>
               </h2>

                <div className = "bg-white/5 border border-white/10 px-10 py-24 rounded-2xl">
                <p className = "text-white text-lg mb-10 ">
                    Feel free to drop by, If you have questions contact me
                </p>

                <a href = "mailto:ricvalenzuela17@proton.me"
                className = "inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full">
                    <FaEnvelope className = "text-xl" />
                    <span>Send an email</span>
                </a>
                </div>
                </div>
                
          

         </section>
  )
}

export default Contacts