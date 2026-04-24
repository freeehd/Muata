import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Filter, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { projects, Project } from '../data';

export default function Code() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Backend', 'Real-Time', 'Mobile', 'AI/Research', 'Hardware', 'Game', 'Web'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 flex flex-col gap-12">
      {/* Header */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-primary"></div>
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Deployment_Archive</span>
        </div>
        <h1 className="font-display text-5xl font-black text-white italic uppercase tracking-tighter">
          Systems Portfolio
        </h1>
      </section>

      {/* Controls */}
      <section className="flex flex-col md:flex-row gap-6 justify-between items-center bg-[#1a1c1c] p-6 border-tech">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all chamfer ${
                activeCategory === cat 
                ? 'bg-primary text-black' 
                : 'bg-[#333535] text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
          <input 
            type="text" 
            placeholder="FILTER BY PROTOCOL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#333535] border-tech py-2 pl-10 pr-4 text-[10px] font-mono text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </section>

      {/* List */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group border-tech bg-[#1a1c1c] overflow-hidden flex flex-col hover:border-primary transition-all duration-300 h-full"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.images.thumbnail} 
                  alt={project.images.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                   <div className="flex gap-2">
                     {project.metrics?.map(m => (
                       <span key={m} className="text-[8px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 font-mono uppercase">
                         {m}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col pt-4">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono text-primary uppercase">{project.category}</span>
                  <span className="text-[10px] font-mono text-on-surface-variant opacity-50">{project.dateCompleted}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-on-surface-variant/80 mb-6 flex-1 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(stack => (
                    <span key={stack} className="text-[9px] font-mono text-on-surface-variant px-2 py-1 bg-[#333535]">
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto border-t border-[#333535] pt-6">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 chamfer bg-[#333535] text-white text-[10px] font-black uppercase py-3 hover:bg-primary hover:text-black transition-colors"
                    >
                      <Github size={14} /> GITHUB
                    </a>
                  )}
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 chamfer bg-primary text-black text-[10px] font-black uppercase py-3"
                  >
                    CASE STUDY <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {filteredProjects.length === 0 && (
        <div className="py-24 text-center border-tech bg-[#1a1c1c]/50">
          <div className="text-secondary-container mb-4 flex justify-center"><Filter size={48} /></div>
          <h3 className="text-xl font-bold text-white uppercase mb-2">No Matching Protocols</h3>
          <p className="text-on-surface-variant text-sm">Adjust filters or search query to locate deployments.</p>
        </div>
      )}
    </div>
  );
}
