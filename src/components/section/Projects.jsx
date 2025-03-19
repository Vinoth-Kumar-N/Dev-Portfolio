import { ArrowBigRight, ArrowRight } from 'lucide-react'
import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
    return (
        <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1) transition-all cursor-pointer">
                            <h3 className='text-xl font-bold mb-2'>Shop Sphere</h3>
                            <p className='text-gray-400 mb-4'>Comprehensive full-stack e-commerce solution featuring a modern user interface, secure payment integration, customizable product inventory management, and low-latency access through Redis. </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["React", "Stripe", "Noje.js", "Express.js ", "redis", "Cloudinary", "MongoDB"].map((tech, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2) transition cursor-pointer">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-baseline items-center my-4">
                                <a href="https://github.com/Vinoth-Kumar-N/E-Com-React" className='text-blue-400 hover:text-blue-300 transition-colors flex'>View Project {"   "}</a><ArrowRight size={16} className='hover:translate-x-1 transition ease-out' />
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1) transition-all cursor-pointer">
                            <h3 className='text-xl font-bold mb-2'>Travel Mate</h3>
                            <p className='text-gray-400 mb-4'>Built a secure and user-friendly travel booking platform with a React.js-powered front-end and an Express.js backend, ensuring seamless navigation and real-time destination planning. Implemented JWT-based authentication for secure user sessions</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["React", "tailwindCSS", "Noje.js", "Express.js", "MongoDB"].map((tech, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2) transition cursor-pointer">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-baseline items-center my-4">
                                <a href="https://github.com/Vinoth-Kumar-N/Travel-Mate-FrontE" className='text-blue-400 hover:text-blue-300 transition-colors flex'>View Project {"   "}</a><ArrowRight size={16} className='hover:translate-x-1 transition ease-out' />                     </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1) transition-all cursor-pointer">
                            <h3 className='text-xl font-bold mb-2'>Console-Based Banking Management System</h3>
                            <p className='text-gray-400 mb-4'>A console-based banking management system in Java using object-oriented principles to manage customer accounts, transactions, and balance inquiries with industry-standard coding practices and the DAO (Data Access Object) design pattern.</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Java", "Collection Framework", "MySQL"].map((tech, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2) transition cursor-pointer">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-baseline items-center my-4">
                                <a href="https://github.com/Vinoth-Kumar-N/JdbcBMS" className='text-blue-400 hover:text-blue-300 transition-colors flex'>View Project {"   "}</a><ArrowRight size={16} className='hover:translate-x-1 transition ease-out' />                     </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1) transition-all cursor-pointer">
                            <h3 className='text-xl font-bold mb-2'>1StepAhead</h3>
                            <p className='text-gray-400 mb-4'>Developed a full-stack task management application enabling users to create, update, track, and manage tasks efficiently with secure user interaction using JSON Web Tokens.</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["React", "tailwindCSS", "Noje.js", "Express.js", "MongoDB"].map((tech, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2) transition cursor-pointer">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-baseline items-center my-4">
                                <a href="" className='text-blue-400 hover:text-blue-300 transition-colors flex'>View Project {"   "}</a><ArrowRight size={16} className='hover:translate-x-1 transition ease-out' />                     </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
