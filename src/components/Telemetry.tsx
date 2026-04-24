import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Bot, Cpu, Activity, FileText, ArrowRight, ExternalLink, BookOpen, Quote } from 'lucide-react';
import { publications } from '../data';

export default function Telemetry() {
  return (
    <div className="py-12 flex flex-col gap-24">
      {/* Research Hero */}
      <section className="relative flex flex-col items-start gap-8 border-tech bg-[#1a1c1c] p-8 md:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 tech-grid opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20"></div>
        
        <div className="relative z-10">
          <div className="text-[10px] font-mono text-primary mb-2 tracking-[0.3em] uppercase">Status // Research Active</div>
          <h1 className="font-display text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
            AI-Powered <br className="hidden md:block" /> Medical Diagnostics
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8">
            Developing non-invasive electronic machines for detecting uric acid levels in blood using bio-sensor data and machine learning algorithms. Focusing on early disease prevention through accessible, AI-driven diagnostics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ResearchStat label="Tech Stack" value="Python / ML / Sensors" />
            <ResearchStat label="Institue" value="UTM Malaysia" />
            <ResearchStat label="Status" value="MPhil Research" />
          </div>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact?message=Hey Muatasam, Let's collaborate!"
              className="chamfer bg-primary text-black font-black uppercase text-xs px-8 py-4 tracking-widest block"
            >
              COLLABORATE
            </Link>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="flex flex-col gap-12">
        <div className="flex justify-between items-end border-b border-[#3b4949] pb-4">
          <div>
            <div className="text-[10px] font-mono text-primary mb-1 tracking-widest uppercase">Sec_03_Intel</div>
            <h2 className="font-display text-4xl font-bold text-white uppercase italic">Publications</h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Conference Logs</span>
            <div className="text-xl font-mono text-primary">0{publications.length}</div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-tech bg-[#1a1c1c] p-8 hover:border-primary transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-4 py-2 bg-[#333535] text-[10px] font-mono text-white">
                {pub.year}
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="min-w-[48px] h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <FileText size={24} />
                </div>
                
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-primary uppercase mb-2 block">{pub.category}</span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 text-secondary-container">
                    <BookOpen size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">{pub.venue}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant/80 max-w-4xl mb-6">
                    {pub.abstract}
                  </p>
                  
                  {pub.citation && (
                    <div className="border-l-2 border-[#333535] pl-4 py-2 italic text-xs text-on-surface-variant opacity-60 flex items-start gap-2 mb-6">
                      <Quote size={12} className="shrink-0 mt-1" />
                      {pub.citation}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InterestCard title="Medical AI" icon={<Activity size={24} />} desc="Predictive diagnostics and bio-sensor signal analysis." />
        <InterestCard title="Computer Vision" icon={<Bot size={24} />} desc="Industrial defect detection and autonomous systems." />
        <InterestCard title="IoT Systems" icon={<Cpu size={24} />} desc="Remote monitoring for industrial and medical use." />
        <InterestCard title="Ed-Tech" icon={<BookOpen size={24} />} desc="Scaling technical education via digital streams." />
      </section>
    </div>
  );
}

function ResearchStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="border border-[#333535] p-4 bg-[#1e2020]">
      <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-bold text-white uppercase">{value}</div>
    </div>
  );
}

function InterestCard({ title, icon, desc }: { title: string, icon: React.ReactNode, desc: string }) {
  return (
    <div className="border-tech bg-[#1a1c1c] p-6 group hover:border-primary transition-all">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white uppercase mb-2 tracking-tight">{title}</h3>
      <p className="text-xs text-on-surface-variant leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
