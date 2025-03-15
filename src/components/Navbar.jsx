import React from 'react'

export const Navbar = ({menuOpen, setmenuOpen}) => {
    return (
        <div className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg  border-b border-b-white/10 shadow-lg'>
            <div className="max-w-5xl mx-auto px-4 flex justify-between">
                <div className="flex justify-between items-center h-16">
                    <a className='font-mono text-xl font-bold text-white' href="#home">{" "} VinothKmr <span className='text-blue-500 '>.Dev</span></a>
                </div>
                <div className="w-7 h-r relative cursor-pointer z-40 md:hidden mt-5" onClick={() => setmenuOpen(true) }>
                    {menuOpen ? "" : <span className=''>&#9776;</span>}
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className='text-gray-300 hover:text-white transition-colors'>Home</a>
                    <a href="#about" className='text-gray-300 hover:text-white transition-colors'>About</a>
                    <a href="#projects" className='text-gray-300 hover:text-white transition-colors'> Projects</a>
                    <a href="#contact" className='text-gray-300 hover:text-white transition-colors'> Contact</a>
                </div>
            </div>
        </div>
    )
}
