import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Linkedin, Github, Twitch, Download, Send, MapPin } from 'lucide-react';

const RESUME_URL = '/Mohammed_Muatasim_Resume.pdf';
const RESUME_FILENAME = 'Mohammed_Muatasim_Resume.pdf';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledMessage = searchParams.get('message') || '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: prefilledMessage,
  });
  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  useEffect(() => {
    setForm((current) => (current.message ? current : { ...current, message: prefilledMessage }));
  }, [prefilledMessage]);

  const handleResumeDownload = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const response = await fetch(RESUME_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.status}`);
    }

    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = objectUrl;
    link.download = RESUME_FILENAME;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => window.URL.revokeObjectURL(objectUrl), 1000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'sending', message: 'Transmitting message...' });

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const payload = (await response.json().catch(() => null)) as { error?: string; message?: string } | null;

    if (!response.ok) {
      throw new Error(payload?.error || 'Failed to send message.');
    }

    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setStatus({ type: 'success', message: payload?.message || 'Message sent successfully.' });
  };

  return (
    <div className="py-12 flex flex-col gap-16">
      {/* Header */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-primary"></div>
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Communication_Channel</span>
        </div>
        <h1 className="font-display text-5xl font-black text-white italic uppercase tracking-tighter">
          Initialize Contact
        </h1>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="border-tech bg-[#1a1c1c] p-8 flex flex-col gap-8">
            <p className="text-on-surface-variant leading-relaxed">
              I'm open to full-time engineering roles, research collaborations, or speaking opportunities. Let's build something intelligent together.
            </p>
            
            <div className="flex flex-col gap-6">
              <ContactMethod 
                icon={<Mail size={20} />} 
                label="Direct Uplink" 
                value="mohammedmutasim1999@gmail.com" 
                href="mailto:mohammedmutasim1999@gmail.com"
              />
              <ContactMethod 
                icon={<Linkedin size={20} />} 
                label="Professional Profile" 
                value="linkedin.com/in/mohammed-muatasim" 
                href="https://my.linkedin.com/in/mohammed-muatasim-4785b7313"
              />
              <ContactMethod 
                icon={<Github size={20} />} 
                label="Code Repository" 
                value="github.com/siddig395" 
                href="https://github.com/siddig395"
              />
              <ContactMethod 
                icon={<Twitch size={20} />} 
                label="Live Streams" 
                value="twitch.tv/ho0kz" 
                href="https://www.twitch.tv/ho0kz"
              />
            </div>

            <div className="pt-8 border-t border-[#333535] mt-4">
              <a
                href={RESUME_URL}
                download={RESUME_FILENAME}
                onClick={handleResumeDownload}
                className="w-full chamfer bg-secondary-container text-black font-black uppercase text-xs py-4 flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform" /> DOWNLOAD RESUME [PDF]
              </a>
            </div>
          </div>
          
          <div className="border-tech bg-[#333535] bg-opacity-30 p-8">
             <div className="flex justify-between items-center mb-6">
               <span className="text-[10px] font-mono text-primary uppercase">Location_Coordinates</span>
               <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
             </div>
             <div className="flex items-center gap-4 text-white">
               <MapPin className="text-primary" />
               <span className="font-bold uppercase tracking-tight">Johor Bahru, Malaysia</span>
             </div>
          </div>
        </div>

        {/* Message Form Placeholder / More Info */}
        <div className="lg:col-span-7">
          <form
            className="border-tech bg-[#1a1c1c] p-8 flex flex-col gap-6 relative"
            onSubmit={(event) => {
              handleSubmit(event).catch((error: unknown) => {
                setStatus({
                  type: 'error',
                  message: error instanceof Error ? error.message : 'Failed to send message.',
                });
              });
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 tech-grid opacity-10 pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white uppercase italic mb-2 tracking-tight">Transmission Buffer</h3>

            {status.type !== 'idle' && (
              <div
                className={`border px-4 py-3 text-xs font-mono uppercase tracking-wide ${
                  status.type === 'success'
                    ? 'border-secondary-container text-secondary-container'
                    : status.type === 'error'
                      ? 'border-red-400 text-red-300'
                      : 'border-primary text-primary'
                }`}
                aria-live="polite"
              >
                {status.message}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-[10px] font-mono text-on-surface-variant uppercase">Operator_Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="bg-[#333535] border-tech py-3 px-4 text-white font-mono text-xs focus:outline-none focus:border-primary"
                  placeholder="IDENTIFY..."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-[10px] font-mono text-on-surface-variant uppercase">Uplink_Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="bg-[#333535] border-tech py-3 px-4 text-white font-mono text-xs focus:outline-none focus:border-primary"
                  placeholder="EMAIL@DOMAIN.COM"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-subject" className="text-[10px] font-mono text-on-surface-variant uppercase">Protocol_Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="bg-[#333535] border-tech py-3 px-4 text-white font-mono text-xs focus:outline-none focus:border-primary"
                placeholder="RE: INQUIRY..."
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-[10px] font-mono text-on-surface-variant uppercase">Message_Payload</label>
              <textarea 
                id="contact-message"
                name="message"
                rows={6} 
                className="bg-[#333535] border-tech py-3 px-4 text-white font-mono text-xs focus:outline-none focus:border-primary resize-none" 
                placeholder="START TRANSMISSION..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="chamfer bg-primary text-black font-black uppercase text-xs py-4 flex items-center justify-center gap-2 group mt-4" disabled={status.type === 'sending'}>
              {status.type === 'sending' ? 'SENDING...' : <>SEND MESSAGE <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
      <div className="w-12 h-12 flex items-center justify-center bg-[#333535] text-on-surface-variant group-hover:bg-primary group-hover:text-black transition-all">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] font-mono text-on-surface-variant uppercase tracking-widest">{label}</span>
        <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">{value}</span>
      </div>
    </a>
  );
}
