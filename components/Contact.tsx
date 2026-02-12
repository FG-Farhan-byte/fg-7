import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="relative">
      <div className="p-12 md:p-24 rounded-[18px] border border-white/10 bg-[#16161A] overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7F5AF0]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-[#F2F2F2] mb-12">
            Let’s create <br />something great <br />
            <span className="italic text-[#7F5AF0]">together.</span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <div className="text-[10px] tracking-widest text-[#9A9A9A] uppercase">
              Based in Nepal — Working Worldwide
            </div>
            <p className="text-lg md:text-xl text-[#9A9A9A] font-light leading-relaxed max-w-xl">
              Brands, creators, and editors looking for commission-based work can contact me. I’m primarily active on Instagram.
            </p>
          </div>

          <a 
            href="mailto:fffarhan260@gmail.com"
            className="inline-flex items-center space-x-6 group/btn"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[#7F5AF0] group-hover/btn:bg-[#7F5AF0] transition-all duration-500">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover/btn:-rotate-45 transition-transform duration-500">
                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl text-white font-serif border-b border-white/20 pb-1 group-hover/btn:text-[#7F5AF0] group-hover/btn:border-[#7F5AF0] transition-all duration-500">
              SEND ME AN EMAIL
            </span>
          </a>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-6">
          {[
            { name: 'LinkedIn', url: 'https://linkedin.com/in/farhan-ahmad-0144233aa/' },
            { name: 'X', url: 'https://x.com/fg_farhan07' },
            { name: 'Instagram', url: 'https://instagram.com/fg_farhan07' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@fg_farhan07' },
            { name: 'YouTube', url: 'https://youtube.com/@fgfarhan' }
          ].map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest text-[11px]"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-12 flex justify-between items-center text-[10px] tracking-widest text-[#9A9A9A] uppercase">
         <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Available for new projects</span>
         </div>
         <span className="hidden md:block">Local time: {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
};

export default Contact;