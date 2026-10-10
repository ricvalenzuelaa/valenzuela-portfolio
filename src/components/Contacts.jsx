import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { sendEmail } from '../email';


const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        message: '',
        isError: false,
    })

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setStatus({
            submitting: true,
            success: false,
            message: '',
            isError: false,
        })


        try {
            // Send email via EmailJS
            await sendEmail(
                { name: formData.name.trim(), email: formData.email.trim() },
                { subject: 'New contact form submission', message: formData.message.trim() }
            );

            setStatus({
                submitting: false,
                success: true,
                message: `Thank you, ${formData.name}! Your message has been received.`,
                isError: false,
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email via EmailJS:', error);
            setStatus({
                submitting: false,
                success: false,
                message: error.message || 'Failed to send message. Please try again.',
                isError: true,
            });
        }
    }


    return (
        <section
            id="contacts"
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto w-full"
        >
            <div className="max-w-2xl w-full">

                <div className="text-center mb-10">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">
                        GET IN <span className="text-blue-600">TOUCH</span>
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base mt-3">
                        Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to drop me a message!
                    </p>
                </div>


                <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-2xl backdrop-blur-md shadow-2xl">

                    {status.message && (
                        <div
                            className={`mb-6 p-4 rounded-xl flex items-start gap-3 border text-sm sm:text-base transition-all ${status.isError
                                ? 'bg-red-500/10 border-red-500/30 text-red-300'
                                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                }`}
                        >
                            {status.isError ? (
                                <FaExclamationCircle className="text-xl flex-shrink-0 mt-0.5 text-red-400" />
                            ) : (
                                <FaCheckCircle className="text-xl flex-shrink-0 mt-0.5 text-emerald-400" />
                            )}
                            <span>{status.message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
                                >
                                    Name <span className="text-blue-500"></span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
                                >
                                    Email <span className="text-blue-500"></span>
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm transition-all duration-200"
                                />
                            </div>
                        </div>


                        <div>
                            <label
                                htmlFor="contact-message"
                                className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
                            >
                                Message <span className="text-blue-500"></span>
                            </label>
                            <textarea id="contact-message" name="message" rows="5" required value={formData.message} onChange={handleChange} placeholder="Your message..." className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm transition-all duration-200 resize-none" />
                        </div>


                        <div className="flex justify-center pt-2">
                            <button type="submit"
                                disabled={status.submitting}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base">
                                {status.submitting ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            />
                                        </svg>
                                        <span>Sending Message...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FaPaperPlane className="text-sm" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts