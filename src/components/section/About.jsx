import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {


    const frontendSkills = ["HTML", "React", "JavaScript", "TypeScript", "TailwindCSS"]
    const backendSkills = ["NodeJS", "ExpressJS", "MongoDB", "SQL"]

    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">{" "}About Me</h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">Passionate developer to build scalable web
                            application and creating innovative solutions to solve complex problems.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2) transition cursor-pointer">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2) transition cursor-pointer">{tech}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li><strong>HSC </strong> - Literacy Mission Matric Higher Secondary School, Samalapuram (2008 - 2022)</li>
                                <li><strong>B. Tech Infomation Technology</strong> - Sri Shakthi Institute of Engineering and Technology, Coimbatore (2022 -  2026)</li>
                            </ul>
                        </div>
                        {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏢 Work Exprience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Software Engineering Intern at ABC Corp (2025 - Present)
                                </h4>
                                <p className="">
                                    Developed and maintained microservices for cloud-based applications.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Intern at DEF Startup (2025 - Present)
                                </h4>
                                <p className="">
                                    Assisted in buildign front-end components and integrated REST APIs
                                </p>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
