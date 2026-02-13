import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socials = [
    { name: 'INSTAGRAM', url: 'https://instagram.com/fg_farhan07' },
    { name: 'TIKTOK', url: 'https://www.tiktok.com/@fg_farhan07' },
    { name: 'YOUTUBE', url: 'https://youtube.com/@fgfarhan' },
    { name: 'LINKEDIN', url: 'https://linkedin.com/in/farhan-ahmad-0144233aa/' },
    { name: 'X', url: 'https://x.com/fg_farhan07' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      {/* Left Content */}
      <div className="lg:col-span-7 pt-12">
        <span className={`text-[11px] tracking-[0.5em] text-[#555555] uppercase mb-12 block transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          FREELANCE — BASED IN NEPAL
        </span>
        
        <div className={`mb-12 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif text-[#F2F2F2] leading-[0.85] tracking-tight">
            Farhan Ahmad<br />
            <span className="italic text-[#7F5AF0] opacity-100 block mt-4">Digital Designer</span>
          </h1>
        </div>

        <div className={`max-w-xl transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg text-[#666666] leading-relaxed mb-12 font-light">
            Freelance digital designer based in Nepal who loves to craft brands & attractive experiences for the brands. Worked as YouTuber for 4 years. Professional work in graphic designing and short video editing.
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.3em] text-[#F2F2F2] hover:text-[#7F5AF0] transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Container - With Rounded Borders */}
      <div className="lg:col-span-5 relative">
        <div className={`aspect-[4/5] w-full overflow-hidden rounded-[40px] border border-white/10 relative group transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img 
            src="https://i.ibb.co/KcBs2dtw/H-Copy.png" 
            alt="Farhan Ahmad" 
            className="w-full h-full object-cover filter grayscale brightness-[0.4] group-hover:brightness-75 transition-all duration-1000 ease-out"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200';
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute bottom-12 left-10 right-10 z-10">
             <div className="w-full h-[1px] bg-white/10 mb-6"></div>
             <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-light">CORE FOCUS</span>
                <span className="text-[10px] tracking-[0.4em] text-[#7F5AF0] uppercase italic font-medium">ART DIRECTION</span>
             </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border border-white/5 rounded-[40px] pointer-events-none translate-x-4 translate-y-4 opacity-50"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#7F5AF0]/5 blur-[100px] pointer-events-none rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;