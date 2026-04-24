export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#3b4949] w-full py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-24 text-[10px] font-mono text-on-surface-variant uppercase tracking-widest bg-[#121414]">
      <div className="flex flex-col gap-1">
        <span className="text-primary font-bold">GRID_REF: 42.112 // -11.084</span>
        <span>ENGINEERING_LOG // HUMAN_PERFORMANCE_PROTOCOL_v4.2</span>
      </div>
      
      <div className="flex gap-8">
        <a href="https://github.com/siddig395" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GITHUB</a>
        <a href="https://my.linkedin.com/in/mohammed-muatasim-4785b7313" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
        <a href="https://www.twitch.tv/ho0kz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TWITCH</a>
      </div>

      <div className="text-right">
        <div>© {year} PERFORMANCE LABS</div>
        <div className="opacity-40">UPLINK_STABLE // SEC_ENCR_AES_256</div>
      </div>
    </footer>
  );
}
