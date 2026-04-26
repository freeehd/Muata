import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Languages, Terminal, Code, Cpu, Bot, Smartphone, Database } from 'lucide-react';

export default function Bio() {
  return (
    <div className="py-12 flex flex-col gap-24">
      {/* Narrative Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-8 flex flex-col gap-8">
           <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-primary"></div>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Bio_Archive_01</span>
          </div>
          <h1 className="font-display text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
            The Hybrid <br /> Engineering Path
          </h1>
          <div className="flex flex-col gap-6 text-lg text-on-surface-variant leading-relaxed">
            <p>
              I started in Electrical Engineering, fascinated by how hardware and software intersect. That curiosity led me to Python, then to building real-time systems, then to AI research in medical diagnostics.
            </p>
            <p>
              Today, I bridge three worlds: <strong>Code</strong> (Full-stack dev), <strong>Circuits</strong> (Hardware integration), and <strong>Communication</strong> (Teaching & Content creation).
            </p>
            <p>
              This hybrid perspective lets me build systems that are not just functional, but thoughtful—considering performance, accessibility, and real human needs.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="border-tech p-6 bg-[#1a1c1c] tech-grid">
            <h3 className="text-[10px] font-mono text-primary uppercase mb-6 tracking-widest border-b border-[#333535] pb-2">Status_Check</h3>
            <div className="space-y-4">
              <StatusItem label="Location" value="UTM Malaysia" />
              <StatusItem label="Current Role" value="MPhil Researcher" />
              <StatusItem label="Focus" value="Medical AI" />
              <StatusItem label="Availability" value="Limited" />
            </div>
            <a 
              href="https://github.com/siddig395" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-12 flex items-center justify-center chamfer bg-primary text-black font-black uppercase text-xs mt-8 tracking-widest"
            >
              DOWNLOAD RESUME
            </a>
          </div>

          <div className="border-tech p-6 bg-[#333535] bg-opacity-30">
            <h3 className="text-xs font-bold text-white uppercase mb-4 flex items-center gap-2">
              <Languages size={18} className="text-secondary-container" /> Linguistic Buffers
            </h3>
            <div className="flex flex-wrap gap-2">
              <LangTag lang="Arabic" level="Native" />
              <LangTag lang="English" level="Fluent" />
              <LangTag lang="Spanish" level="Fluent" />
              <LangTag lang="French" level="Basic" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeader icon={<Briefcase size={28} />} title="Experience Log" id="SEC_05" />
          <div className="flex flex-col gap-8">
            <ExperienceItem 
              company="Leaders Academy"
              role="Python Language Trainer"
              period="Jan 2024 - Aug 2024"
              desc="Trained participants in Python Language to enhance programming skills. Designed and built event websites, significantly improving digital functionality."
            />
            <ExperienceItem 
              company="Sudan Electricity Holding Co"
              role="Field Engineer"
              period="Jul 2021 - Oct 2021"
              desc="Developed an Automatic Voltage Regulator for electricity transport stability. Deployed RTUs in 6 stations and installed fiber optic infrastructure."
            />
            <ExperienceItem 
              company="Twitch Channel: ho0kz"
              role="Technical Streaming Producer"
              period="Ongoing"
              desc="Design custom overlays (HTML/CSS/JS). Implement real-time streaming techs and automation tools to enhance content quality."
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeader icon={<GraduationCap size={28} />} title="Academic Logs" id="SEC_06" />
          <div className="flex flex-col gap-8">
            <ExperienceItem 
              company="Universiti Teknologi Malaysia"
              role="Master of Philosophy — Medical Electronics"
              period="In Progress"
              desc="Investigating AI-powered detection of Uric Acid in blood for non-invasive disease prevention diagnostics."
            />
            <ExperienceItem 
              company="Universiti Teknologi Malaysia"
              role="BEng — Electrical & Electronics"
              period="2022"
              desc="Bachelor of Engineering with Honours. Specialized in power systems and control electronics."
            />
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="flex flex-col gap-12">
        <SectionHeader icon={<Award size={28} />} title="Credential Log" id="SEC_07" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <IssuerBlock 
            issuer="IBM" 
            id="IBM-SYS-V1"
            certs={[
              { title: "Introduction to Cloud Computing", year: "2024" },
              { title: "Exploratory Data Analysis for ML", year: "2025" },
              { title: "Supervised ML: Regression", year: "2025" },
              { title: "Supervised ML: Classification", year: "2026" },
              { title: "Unsupervised Machine Learning", year: "2026" },
              { title: "Deep Learning & RL", year: "2026" },
              { title: "IBM Machine Learning Specialization", year: "2026" },
            ]} 
          />
          <div className="flex flex-col gap-8">
            <IssuerBlock 
              issuer="Google" 
              id="GGL-PY-ALPHA"
              certs={[
                { title: "Google Python Course", year: "2024" },
                { title: "Python & OS Interaction", year: "2024" },
              ]} 
            />
            <IssuerBlock 
              issuer="CompTIA" 
              id="CPT-NET-SEC"
              certs={[
                { title: "CompTIA Network+", year: "2025" },
              ]} 
            />
          </div>
          <IssuerBlock 
            issuer="Johns Hopkins" 
            id="JHU-WEB-STACK"
            certs={[
              { title: "HTML, CSS, JS for Web", year: "2024" },
              { title: "Introduction to CSS3", year: "2024" },
            ]} 
          />
          <IssuerBlock 
            issuer="Leaders Academy" 
            id="LA-MGMT-01"
            certs={[
              { title: "Introduction to Scrum Master", year: "2024" },
            ]} 
          />
        </div>
      </section>

      {/* Skill Diagnostic Readout */}
      <section className="flex flex-col gap-12">
        <SectionHeader icon={<Terminal size={28} />} title="System Core Proficiencies" id="SEC_08" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillModule 
            title="Logic & Architecture" 
            id="MOD_01"
            skills={[
              { name: 'Python', level: '95', tags: ['Backend', 'AI'] },
              { name: 'JavaScript/TS', level: '90', tags: ['Frontend', 'Node'] },
              { name: 'React JS', level: '88', tags: ['SPA', 'UI'] },
              { name: 'Django/Flask', level: '85', tags: ['Web', 'API'] },
              { name: 'C/C++', level: '70', tags: ['Firmware'] },
            ]} 
          />
          <SkillModule 
            title="Mobile & Interaction" 
            id="MOD_02"
            skills={[
              { name: 'Flutter/Dart', level: '92', tags: ['Mobile', 'UX'] },
              { name: 'UI/UX Design', level: '80', tags: ['Figma', 'Aesthetic'] },
              { name: 'Real-time Sync', level: '85', tags: ['Firebase', 'WS'] },
              { name: 'Data Viz', level: '75', tags: ['D3', 'Charts'] },
            ]} 
          />
          <SkillModule 
            title="Hardware & Physical" 
            id="MOD_03"
            skills={[
              { name: 'Embedded Systems', level: '88', tags: ['AVR', 'RTU'] },
              { name: 'SCADA/Grid Ops', level: '82', tags: ['Stability'] },
              { name: 'Network Infra', level: '80', tags: ['Fiber', 'CISCO'] },
              { name: 'Bio-Sensing', level: '85', tags: ['Med-Tech'] },
            ]} 
          />
        </div>
      </section>
    </div>
  );
}

function StatusItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center text-[10px] font-mono">
      <span className="text-on-surface-variant uppercase">{label}</span>
      <span className="text-white uppercase font-bold">{value}</span>
    </div>
  );
}

function LangTag({ lang, level }: { lang: string, level: string }) {
  return (
    <div className="flex flex-col p-2 bg-[#1a1c1c] border border-[#3b4949] min-w-[80px]">
      <span className="text-primary font-bold text-xs">{lang}</span>
      <span className="text-[8px] text-on-surface-variant uppercase">{level}</span>
    </div>
  );
}

function SectionHeader({ icon, title, id }: { icon: React.ReactNode, title: string, id: string }) {
  return (
    <div className="flex justify-between items-end border-b border-[#3b4949] pb-4">
      <div className="flex items-center gap-4">
        <div className="text-primary">{icon}</div>
        <h2 className="font-display text-3xl font-bold text-white uppercase italic">{title}</h2>
      </div>
      <div className="text-[10px] font-mono text-on-surface-variant uppercase">{id}</div>
    </div>
  );
}

function ExperienceItem({ company, role, period, desc }: { company: string, role: string, period: string, desc: string }) {
  return (
    <div className="flex flex-col gap-2 relative pl-6 border-l border-[#333535]">
      <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-primary"></div>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-white uppercase leading-none tracking-tight">{role}</h3>
        <span className="text-[10px] font-mono text-primary uppercase">{period}</span>
      </div>
      <div className="text-xs font-bold text-secondary-container uppercase">{company}</div>
      <p className="text-sm text-on-surface-variant/80 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function IssuerBlock({ issuer, id, certs }: { issuer: string, id: string, certs: { title: string, year: string }[] }) {
  return (
    <div className="border border-[#333535] bg-[#1a1c1c] tech-grid flex flex-col h-full hover:border-[#4a5a5a] transition-colors group/block">
       <div className="bg-[#333535]/30 px-6 py-4 border-b border-[#333535] flex justify-between items-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent group-hover/block:from-primary/10 transition-all">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-1">{id}</span>
            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">{issuer}</h3>
          </div>
          <Award size={24} className="text-primary opacity-20 group-hover/block:opacity-100 transition-opacity" />
       </div>
       <div className="p-6 flex flex-col gap-5">
          {certs.map(cert => (
            <div key={cert.title} className="flex justify-between items-start group relative">
               <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 border border-primary group-hover:bg-primary transition-colors"></div>
                  </div>
                  <span className="text-[11px] font-bold text-on-surface-variant group-hover:text-white transition-colors uppercase leading-tight tracking-tight">
                    {cert.title}
                  </span>
               </div>
               <span className="text-[10px] font-mono text-[#4a5a5a] shrink-0">{cert.year}</span>
            </div>
          ))}
       </div>
    </div>
  );
}

function SkillModule({ title, id, skills }: { title: string, id: string, skills: { name: string, level: string, tags: string[] }[] }) {
  return (
    <div className="border border-[#333535] bg-[#0d0e0f] flex flex-col relative overflow-hidden group">
      <div className="bg-[#333535]/20 px-4 py-2 border-b border-[#333535] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary animate-pulse"></div>
          <span className="text-[10px] font-mono text-white uppercase tracking-widest">{title}</span>
        </div>
        <span className="text-[9px] font-mono text-on-surface-variant">{id}</span>
      </div>
      
      <div className="p-5 flex flex-col gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-xs font-black text-white uppercase tracking-tight">{skill.name}</span>
              <span className="text-[9px] font-mono text-primary">{skill.level}%</span>
            </div>
            <div className="h-1 bg-[#1a1c1c] w-full relative">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-out origin-left" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {skill.tags.map(tag => (
                <span key={tag} className="text-[8px] font-mono text-on-surface-variant uppercase border border-[#333535] px-1.5 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(59,73,73,0.05)_50%,transparent_100%)] bg-[length:100%_4px] opacity-10"></div>
    </div>
  );
}
