
import React from 'react';

const Skills: React.FC = () => {
  const skills = ['Short Video Editing', 'Branding', 'Graphic Design', 'Poster Design', 'Web Design'];

  return (
    <div className="py-12">
      <div className="flex items-center space-x-4 mb-16">
        <span className="text-[10px] tracking-widest text-[#9A9A9A] uppercase">Skills</span>
        <div className="h-[1px] w-12 bg-white/10"></div>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-y-12 gap-x-12 md:gap-x-24">
        {skills.map((skill, index) => (
          <React.Fragment key={skill}>
            <div className="group cursor-default">
              <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-white/40 group-hover:text-[#7F5AF0] transition-all duration-500 uppercase">
                {skill}
              </span>
            </div>
            {index < skills.length - 1 && (
              <div className="hidden md:block w-16 h-[1px] bg-white/5"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skills;
