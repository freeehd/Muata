import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowLeft, Cpu, Code, Activity, Layers, CheckCircle2 } from 'lucide-react';
import { projects } from '../data';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-4xl font-black text-white italic uppercase mb-4">Case Study Missing</h2>
        <Link to="/projects" className="text-primary hover:tracking-widest transition-all uppercase font-mono font-bold">
          [ Return to Archives ]
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 flex flex-col gap-16">
      {/* Header */}
      <section className="flex flex-col gap-8">
        <Link to="/projects" className="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#3b4949] pb-8">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Project_Case_Log // {project.slug}</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
              {project.title}
            </h1>
          </div>
          <div className="flex gap-4">
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="chamfer bg-primary text-black px-6 py-3 text-[10px] font-black uppercase flex items-center gap-2">
                LIVE DEMO <ExternalLink size={14} />
              </a>
            )}
            {project.researchPaperUrl && (
              <a href={project.researchPaperUrl} target="_blank" rel="noopener noreferrer" className="chamfer bg-secondary-container text-black px-6 py-3 text-[10px] font-black uppercase flex items-center gap-2">
                RESEARCH <Layers size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="chamfer bg-[#333535] text-white px-6 py-3 text-[10px] font-black uppercase flex items-center gap-2">
                GITHUB <Github size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] overflow-hidden border-tech bg-[#1a1c1c]">
          <img 
            src={project.images.thumbnail} 
            alt={project.images.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Gallery */}
      {project.images.gallery && project.images.gallery.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.gallery.map((img, i) => (
            <div key={i} className="aspect-video overflow-hidden border-tech bg-[#1a1c1c]">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </section>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-12 flex flex-col gap-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                <div className="w-2 h-2 bg-primary"></div> The Problem
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                {project.problem || project.longDescription}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary-container"></div> My Approach
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                {project.approach || "Detailed systematic integration focusing on reliability and scalability."}
              </p>
            </div>
          </section>

          {/* Features & Tech */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-[#3b4949] py-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-bold text-white uppercase tracking-tight">Core Features</h2>
              <div className="grid grid-cols-1 gap-4">
                {project.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-bold text-white uppercase tracking-tight">Tech Stack Deep-Dive</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(tech => (
                  <div key={tech} className="border-tech bg-[#1a1c1c] px-4 py-3 min-w-[120px] flex flex-col gap-1 hover:border-primary transition-colors">
                    <span className="text-[8px] font-mono text-on-surface-variant uppercase">Module</span>
                    <span className="text-xs font-bold text-white uppercase">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Metrics & Challenges */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.metrics && (
              <div className="flex flex-col gap-8">
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">Performance Metrics</h2>
                <div className="flex flex-col gap-4">
                  {project.metrics.map(metric => (
                    <div key={metric} className="flex items-center gap-4 bg-[#1a1c1c] p-6 border-tech relative group overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-[2px] bg-primary group-hover:w-full transition-all duration-500 opacity-20"></div>
                      <Activity size={24} className="text-primary relative z-10" />
                      <span className="text-sm font-bold text-white uppercase relative z-10">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {project.challenges && (
               <div className="flex flex-col gap-8">
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">Key Challenges</h2>
                <div className="space-y-6">
                  {project.challenges.map(c => (
                    <div key={c.challenge} className="flex flex-col gap-2">
                       <div className="text-[10px] font-mono text-secondary-container uppercase">// {c.challenge}</div>
                       <p className="text-sm text-on-surface-variant border-l border-[#333535] pl-4 italic">
                         {c.solution}
                       </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
