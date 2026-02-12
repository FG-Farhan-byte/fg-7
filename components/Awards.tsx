import React, { useState } from 'react';

const Awards: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const awards = [
    { 
      id: 'beginning',
      name: 'The Beginning', 
      category: 'Milestone', 
      year: '2020', 
      description: 'My journey started in 2020 as a curious creator on YouTube. Exploring the intersection of gaming and creativity, I began documenting my learning process while building a community around digital art and content strategy.'
    },
    { 
      id: 'path',
      name: 'Self-Taught Path', 
      category: 'Growth', 
      year: '2021', 
      description: 'Dedicated to self-improvement, I transitioned into professional design while i had quit my Youtube channel. I mastered tools like Photoshop, Capcut, Canva, Premiere Pro, and hands-on projects and relentless independent practice.'
    },
    { 
      id: 'focus',
      name: 'Current Focus', 
      category: 'Excellence', 
      year: '2026', 
      description: 'Today, I focus on bridging the gap between high-end aesthetics and functional utility. My work revolves around creating cinematic visual identities and seamless digital experiences for forward-thinking international brands.'
    },
    { 
      id: 'vision',
      name: 'The Vision', 
      category: 'Strategy', 
      year: '2026', 
      description: 'I am committed to pushing the boundaries of digital design. My long-term goal is to redefine how users interact with premium brands by merging emotional storytelling with minimalist digital precision.'
    },
    { 
      id: 'final',
      name: 'Final Words', 
      category: 'Motivation', 
      description: 'I worked on YouTube for four years and didn’t see the success I expected. But I gained something even more valuable — skills. I learned video editing, graphic designing, channel management, and how to speak with confidence. For me, success isn’t always what we chase. Sometimes, success is what God has already planned for us. And remember — God is the best planner. So whatever you’re doing right now, give it your best. Work hard. Improve yourself. Because nothing is ever wasted.'
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-[10px] tracking-widest text-[#9A9A9A] uppercase">About Me</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>
        <h2 className="text-3xl font-serif text-[#F2F2F2]">This Is Me</h2>
      </div>
      
      <div className="lg:col-span-8">
        <div className="divide-y divide-white/5 border-b border-white/5">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="group cursor-pointer py-8"
              onClick={() => toggleExpand(award.id)}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-center space-x-8">
                  <span className={`text-[12px] transition-all duration-500 ${expandedId === award.id ? 'text-[#7F5AF0] scale-125' : 'text-[#7F5AF0] opacity-60'}`}>
                    ●
                  </span>
                  <div>
                    <h4 className={`text-xl transition-all duration-500 font-serif ${expandedId === award.id ? 'text-[#7F5AF0] italic' : 'text-[#F2F2F2] group-hover:text-white'}`}>
                      {award.name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#9A9A9A] mt-1">{award.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  {award.year && <span className="text-[11px] font-mono text-[#9A9A9A]">{award.year}</span>}
                  <div className={`w-6 h-6 flex items-center justify-center border border-white/10 rounded-full transition-all duration-500 ${expandedId === award.id ? 'rotate-180 border-[#7F5AF0] bg-[#7F5AF0]/10 text-[#7F5AF0]' : 'text-[#9A9A9A]'}`}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === award.id ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <div className="pl-0 md:pl-16 max-w-2xl">
                  <p className="text-[#9A9A9A] text-base md:text-lg leading-relaxed font-light">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;