
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-[10px] tracking-widest text-[#9A9A9A] uppercase">About</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>
        <h2 className="text-3xl font-serif text-[#F2F2F2]">Philosophies & Perspective</h2>
      </div>
      
      <div className="lg:col-span-8">
        <div className="max-w-2xl space-y-12">
          <p className="text-2xl md:text-3xl font-light text-[#F2F2F2] leading-snug">
            Passionate about art & design, I help companies & brands around the world create unique & memorable digital solutions — I keep things simple by crafting clean & emotional experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
            <div>
              <h4 className="text-[11px] uppercase tracking-widest text-white mb-6">Experience</h4>
              <p className="text-[#9A9A9A] leading-relaxed">
                Worked as youtuber for over 4 yrs, did editing, graphic designing and Managed this all with my studies.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-widest text-white mb-6">Approach</h4>
              <p className="text-[#9A9A9A] leading-relaxed">
                Every pixel counts. I believe in the silent power of white space and the subtle guidance of typography. Minimalist by nature, perfectionist by trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
