import React from 'react'

export const MobileMenu = ({ menuOpen, setmenuOpen }) => {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}  bg-black/75`}>
            <button aria-label='Close Menu' className='absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer' onClick={() => setmenuOpen(false)} >
                &times;
            </button>
            <a href="#home" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} > Home</a>
            <a href="#about" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> About</a>
            <a href="#projects" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Projects</a>
            <a href="#contact" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>
        </div>
    )
}
