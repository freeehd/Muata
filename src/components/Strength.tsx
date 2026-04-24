import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Terminal, Zap, Cpu, Server, Code, Bot, Activity, Layers } from 'lucide-react';
import { projects } from '../data';
import Portrait from './Portrait';

export default function Strength() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="flex flex-col gap-24 py-12">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center lg:items-start">
        <div className="absolute top-0 left-0 w-full h-full tech-grid -z-10 opacity-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-3 h-3 bg-secondary-container animate-pulse"></div>
              <span className="text-secondary-container font-mono text-sm tracking-widest uppercase">Uplink Stable // Session Active</span>
            </div>
            
            <h1 className="font-display text-hero lg:text-8xl font-black text-white italic uppercase tracking-tighter leading-none mb-8">
              Mohammed Muatasim Siddig
            </h1>
            
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4">
              Full-Stack Engineer | AI Researcher | Hardware Integration Specialist
            </p>
            
            <p className="text-lg text-on-surface-variant/80 max-w-xl mx-auto lg:mx-0 mb-12">
              Building intelligent systems that bridge code, circuits, and healthcare—
              then teaching others how it works.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <Link to="/projects" className="chamfer bg-primary text-on-primary font-black uppercase text-xs px-8 py-4 tracking-widest h-14 flex items-center">
                VIEW PROJECTS
              </Link>
              <Link to="/research" className="chamfer bg-secondary-container text-black font-black uppercase text-xs px-8 py-4 tracking-widest h-14 flex items-center">
                RESEARCH LOGS
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Portrait />
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ValueProp 
          icon={<Server size={32} />}
          title="Full-Stack Dev"
          desc="Python, React, Flutter, Django. I build scalable backend systems and intuitive interfaces."
        />
        <ValueProp 
          icon={<Cpu size={32} />}
          title="AI & Hardware"
          desc="From bio-sensors to industrial automation. I bridge software with physical systems."
        />
        <ValueProp 
          icon={<Bot size={32} />}
          title="Tech Education"
          desc="Trained 50+ developers. Stream to 1K+ followers. I make complex topics accessible."
        />
      </section>

      {/* Featured Projects Grid */}
      <section className="flex flex-col gap-12">
        <div className="flex justify-between items-end border-b border-[#3b4949] pb-4">
          <div>
            <div className="text-[10px] font-mono text-primary mb-1 tracking-widest uppercase">Sec_02_Output</div>
            <h2 className="font-display text-4xl font-bold text-white uppercase italic">Featured Systems</h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Active Projects</span>
            <div className="text-xl font-mono text-primary">0{featuredProjects.length}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-tech bg-[#1a1c1c] overflow-hidden flex flex-col hover:border-primary transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.images.thumbnail} 
                  alt={project.images.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(stack => (
                      <span key={stack} className="text-[10px] font-mono text-primary/80 px-2 py-1 border border-primary/20 bg-primary/5">
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 chamfer bg-[#333535] text-white text-[10px] font-black uppercase py-3 text-center hover:bg-primary hover:text-black transition-colors"
                    >
                      GITHUB
                    </a>
                  )}
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="flex-1 chamfer bg-primary text-black text-[10px] font-black uppercase py-3 text-center"
                  >
                    CASE STUDY
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ValueProp({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="border-tech p-8 bg-[#1a1c1c] group hover:border-primary transition-all relative">
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors"></div>
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">{title}</h3>
      <p className="text-on-surface-variant/80 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
