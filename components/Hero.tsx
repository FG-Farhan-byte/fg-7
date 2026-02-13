import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/fg_farhan07' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@fg_farhan07' },
    { name: 'YouTube', url: 'https://youtube.com/@fgfarhan' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/fgfarhan' },
    { name: 'X', url: 'https://x.com/fg_farhan07' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
      <div className="lg:col-span-7 flex flex-col justify-center">
        <span className={`text-[10px] tracking-[0.4em] text-[#9A9A9A] uppercase mb-12 block transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Freelance — Based in Nepal
        </span>
        
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif text-[#F2F2F2] leading-[1.1] mb-12 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Farhan Ahmad<br />
          <span className="italic text-[#7F5AF0] opacity-90 block lg:inline-block">Digital Designer</span>
        </h1>

        <div className={`max-w-xl transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg md:text-xl text-[#9A9A9A] leading-relaxed mb-12">
            Freelance digital designer based in Nepal who loves to craft brands & attractive experiences for the brands. Worked as YouTuber for 4 years. Professional work in graphic designing and short video editing.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url}
                target={social.url !== '#' ? "_blank" : undefined}
                rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                className="text-[11px] uppercase tracking-widest text-[#F2F2F2] hover:text-[#7F5AF0] transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 relative mt-12 lg:mt-0">
        <div className={`aspect-[4/5] w-full overflow-hidden rounded-[18px] border border-white/5 relative group transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img 
            src="https://i.ibb.co/KcBs2dtw/H-Copy.png" 
            alt="Farhan Ahmad" 
            className="w-full h-full object-cover filter grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
             <div className="w-full h-[1px] bg-white/10 mb-6"></div>
             <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest text-[#F2F2F2] uppercase">Core focus</span>
                <span className="text-[10px] tracking-widest text-[#9A9A9A] uppercase italic">Art Direction & UI/UX</span>
             </div>
          </div>
        </div>
        
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7F5AF0]/5 blur-[100px] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Hero;