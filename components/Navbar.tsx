import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
  };

  const navItems = [
    { label: 'WORK', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-start px-8 md:px-16 py-10 bg-gradient-to-b from-[#0B0B0D] to-transparent pointer-events-none">
      <div className="pointer-events-auto group cursor-pointer" onClick={() => scrollTo('work')}>
        <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[#7F5AF0] transition-all duration-500">
           <span className="text-white font-serif italic text-xl transform group-hover:scale-110 transition-transform">F</span>
        </div>
      </div>

      <div className="flex flex-col items-end pointer-events-auto">
        <div className="flex space-x-12 mb-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[11px] uppercase tracking-[0.3em] transition-all duration-300 relative group
                ${activeSection === item.id ? 'text-white' : 'text-[#555555] hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#7F5AF0] transition-all duration-500 
                ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </div>
        <div className="text-[10px] text-[#555555] tracking-[0.4em] text-right space-y-1">
          <p>BASED IN NEPAL — WORKING WORLDWIDE</p>
          <p className="font-mono">{formatTime(time)}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;