import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from'./Navigation';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />
    
    <div className="min-h-screen bg-[#050810] text-white selection:bg-teal-500/30">
      

      {/* Hero Section */}
      <main className="relative pt-20 pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] -z-10"></div>
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
          <Zap size={14} className="text-teal-400" />
          <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">
            The Professional Infrastructure for Indian Residents
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
          Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-500">Insights.</span>
          Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-500">Residents.</span>
        </h2>

        {/* Sub-headline */}
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          A structured, incentivised mentorship. Bridging the gap between 
          <span className="text-white"> elite residents</span> and the 
          <span className="text-white"> next generation of doctors.</span>
        </p>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-6">
          <button onClick={() => navigate('/register')} className="group relative bg-teal-500 hover:bg-teal-400 text-slate-950 px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 shadow-[0_20px_50px_rgba(20,184,166,0.2)]">
            Join the Network
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-teal-500/50" />
              <span>Strictly Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-teal-500/50" />
              <span>Real-time Data</span>
            </div>
          </div>
          

        </div>
      </main>
      <div className='min-h-screen bg-[#ffffff] text-black selection:bg-teal-500/30 p-10 text-center'>
          <h1 className='text-4xl font-bold mb-6 tracking-tight leading-tight'>
            Doctors of the Future 
          </h1> <br />
          "Our work does not end at the hospital gates. We are the Doctors of the Future, moving beyond the wards to ensure the next generation doesn't just survive their training, but thrives in it."
      </div>
    </div>
    
    </div>
    
  )
}
export default HomePage;