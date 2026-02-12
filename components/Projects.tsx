import React, { useState } from 'react';

interface SubWork {
  id: string;
  title: string;
  image: string;
  description?: string;
}

interface Project {
  id: string;
  category: string;
  title: string;
  image: string;
  isSpace?: boolean;
  subWorks: SubWork[];
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-white/5 mb-6">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
        {project.isSpace && (
           <div className="absolute top-6 right-6 px-3 py-1 rounded-full border border-white/20 text-[9px] text-white tracking-widest uppercase bg-black/40 backdrop-blur-sm">
             Futuristic Concept
           </div>
        )}
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] tracking-widest text-[#9A9A9A] uppercase block mb-2">Project /{project.id} — {project.category}</span>
          <h3 className="text-2xl text-[#F2F2F2] font-serif group-hover:text-[#7F5AF0] transition-colors">{project.title}</h3>
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full group-hover:border-[#7F5AF0] transition-all group-hover:translate-x-1 text-[#F2F2F2] group-hover:text-[#7F5AF0]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.16669 12.8333L12.8334 1.16663M12.8334 1.16663H1.16669M12.8334 1.16663V12.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const projects: Project[] = [
    { 
      id: '01', 
      category: 'Graphic Design', 
      title: 'Brand Posters', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200', 
      isSpace: true,
      subWorks: [
        { id: '1-1', title: 'Minimalist Poster', image: 'https://i.ibb.co/0jgYcTC4/H.png' },
        { id: '1-2', title: 'Abstract Concept', image: 'https://i.ibb.co/nsr0RCLG/Coffee.png' },
        { id: '1-3', title: 'Typography Art', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800' },
      ]
    },
    { 
      id: '02', 
      category: 'Video Editing', 
      title: 'Reel edits', 
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
      subWorks: [
        { id: '2-1', title: 'Cinematic Vlog', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800' },
        { id: '2-2', title: 'Product Motion', image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800' },
      ]
    },
    { 
      id: '03', 
      category: 'Graphic Design', 
      title: 'Youtube Thumbnails', 
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200', 
      isSpace: true,
      subWorks: [
        { id: '3-1', title: 'Cinematic Vibe', image: 'https://i.ibb.co/BvcSJhk/Fg2.jpg' },
        { id: '3-2', title: 'Educational Thumbnail', image: 'https://i.ibb.co/Pv055RgR/Picsart-26-02-01-13-16-40-778.png' },
      ]
    },
    { 
      id: '04', 
      category: 'Video Editing', 
      title: 'Youtube Videos', 
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
      subWorks: [
        { id: '4-1', title: 'Documentary Edit', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800' },
        { id: '4-2', title: 'Gaming Montage', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800' },
      ]
    },
  ];

  const selectedProject = projects.find(p => p.id === selectedProjectId);
  const isVideoCategory = selectedProjectId === '03' || selectedProjectId === '04';

  const handleBack = () => {
    setSelectedProjectId(null);
  };

  return (
    <div className="relative min-h-[400px]">
      {/* Grid View */}
      {!selectedProjectId ? (
        <div className="animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-[10px] tracking-widest text-[#9A9A9A] uppercase">Work</span>
                <div className="h-[1px] w-12 bg-white/10"></div>
              </div>
              <h2 className="text-4xl font-serif text-[#F2F2F2]">Featured Creations</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProjectId(project.id)} 
              />
            ))}
          </div>
        </div>
      ) : (
        /* Detailed View */
        <div className="relative w-full animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <button 
              onClick={handleBack}
              className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-[#9A9A9A] hover:text-[#7F5AF0] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7F5AF0] transition-colors">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                  <path d="M1.16669 12.8333L12.8334 1.16663M12.8334 1.16663H1.16669M12.8334 1.16663V12.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Back to Portfolio</span>
            </button>
            
            <div className="text-left md:text-right">
              <span className="text-[10px] tracking-widest text-[#7F5AF0] uppercase block mb-2">{selectedProject?.category}</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#F2F2F2]">{selectedProject?.title}</h2>
              
              {selectedProjectId === '02' && (
                <div className="mt-4 animate-pulse">
                  <p className="text-[11px] tracking-widest text-[#7F5AF0] uppercase">
                    Visit <a href="https://youtube.com/@fgfarhan" target="_blank" rel="noopener noreferrer" className="border-b border-[#7F5AF0]/30 hover:text-white transition-colors">YouTube</a> or primarily <a href="https://instagram.com/fg_farhan07" target="_blank" rel="noopener noreferrer" className="border-b border-[#7F5AF0]/30 hover:text-white transition-colors">Instagram</a> to watch latest reels
                  </p>
                </div>
              )}

              {selectedProjectId === '04' && (
                <div className="mt-4 animate-pulse">
                  <a 
                    href="https://youtube.com/@fgfarhan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] tracking-widest text-[#7F5AF0] hover:text-white transition-colors uppercase border-b border-[#7F5AF0]/30 pb-1"
                  >
                    View Editing Journey on YouTube
                  </a>
                  <p className="text-[9px] text-[#9A9A9A] mt-2 italic">(Note: I don't have access to this channel anymore)</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {selectedProject?.subWorks.map((work) => (
              <div key={work.id} className="group overflow-hidden rounded-[12px] border border-white/5 bg-[#16161A] hover:border-white/10 transition-colors">
                <div className={`${isVideoCategory ? 'aspect-video' : 'aspect-[4/5]'} overflow-hidden`}>
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-serif text-[#F2F2F2] mb-1">{work.title}</h4>
                  <p className="text-[10px] tracking-widest text-[#9A9A9A] uppercase">Selection — 2026</p>
                </div>
              </div>
            ))}
            
            {/* Future Placeholder - Dynamic Aspect Ratio */}
            <div className={`${isVideoCategory ? 'aspect-video' : 'aspect-[4/5]'} rounded-[12px] border border-dashed border-white/10 flex flex-col items-center justify-center group hover:border-[#7F5AF0]/40 transition-all duration-500 cursor-pointer bg-white/[0.02]`}>
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#7F5AF0]/10 group-hover:border-[#7F5AF0]/20 transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20 group-hover:text-[#7F5AF0] transition-colors">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-center">
                <span className="text-[10px] tracking-[0.2em] text-[#9A9A9A] uppercase group-hover:text-white transition-colors block mb-1">Add New Concept</span>
                <span className="text-[9px] text-white/20 uppercase tracking-widest group-hover:text-[#7F5AF0]/40 transition-colors">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Projects;