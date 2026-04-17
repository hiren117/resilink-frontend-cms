import React from 'react';
import { useNavigate } from 'react-router-dom';
type Props = {

};
const Navigation:React.FC<Props> = () => {
  const navigate = useNavigate(); 
  return (
    <div className='bg-[#050810] text-white selection:bg-teal-500/30'>
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div>
            <img src="https://static.wixstatic.com/media/f3de06_460779ab208041ff9ee1e3e2d987f617~mv2.png/v1/fill/w_308,h_103,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Resilink.png" alt="Resilink Logo" 
            className="text-left w-full h-full object-contain" />
          </div>
        </div>
        <button onClick={() => navigate('/register')} className="hidden md:block bg-teal-500 hover:bg-teal-400 text-black px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
          Join the Network
        </button>
      </nav>
    </div>
  );
};

export default Navigation;