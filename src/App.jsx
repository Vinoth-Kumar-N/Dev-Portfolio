import { useEffect, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Projects } from './components/section/Projects.jsx';
import { Contact } from './components/section/Contact.jsx';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setmenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}{ " " }
        <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}  text-gray-100`}>
           <Navbar menuOpen = {menuOpen} setmenuOpen = {setmenuOpen} />
           <MobileMenu menuOpen = {menuOpen} setmenuOpen = {setmenuOpen} />
           <Home />
           <About />
           <Projects />
           <Contact />
        </div>
    </>
  )
}

export default App
