import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Strength from './components/Strength';
import Code from './components/Code';
import Telemetry from './components/Telemetry';
import Bio from './components/Bio';
import Contact from './components/Contact';
import CaseStudy from './components/CaseStudy';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-24 bg-[#121414] text-[#e2e2e2] font-sans overflow-x-hidden relative border-[12px] border-[#0d0e0f]">
        <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none"></div>
        <Navbar />
        <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Strength /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Code /></PageWrapper>} />
              <Route path="/projects/:slug" element={<PageWrapper><CaseStudy /></PageWrapper>} />
              <Route path="/research" element={<PageWrapper><Telemetry /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><Bio /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
