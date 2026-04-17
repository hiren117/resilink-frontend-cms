import { useNavigate } from 'react-router-dom';
import { User, Briefcase, MapPin, GraduationCap, ClipboardList, Edit3, Mail, Phone } from 'lucide-react';

const ProfilePage = () => {
  const navigate = useNavigate();

  // Mock data of what was filled in registration
  const residentData = {
    fullName: "Dr. Rajesh Kumar",
    email: "rajesh.k@aiims.edu",
    contactNo: "+91 98765 43210",
    currentRole: "JR-2 (2nd Year)",
    institute: "AIIMS, New Delhi",
    specialty: "General Medicine",
    about: "Dedicated resident physician focused on internal medicine and patient-centric care. Passionate about medical education and residency culture improvement.",
    experience: "Completed 18 months of residency with rotations in ICU, Cardiology, and Emergency Medicine. Lead representative for the Junior Residents Association."
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-teal-500/10 border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-500">
              <User size={48} />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{residentData.fullName}</h1>
              <p className="text-slate-400 flex items-center gap-2 mt-1">
                <GraduationCap size={16} /> {residentData.specialty} • {residentData.currentRole}
              </p>
            </div>
          </div>
          
          {/* Main Action Button for Task 2 */}
          <button 
            onClick={() => navigate('/survey')}
            className="flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 rounded-xl font-black text-lg transition-all shadow-[0_10px_30px_rgba(20,184,166,0.2)]"
          >
            <ClipboardList size={22} /> Start Intelligence Survey
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact & Stats */}
          <div className="space-y-6">
            <div className="bg-[#111] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail size={18} className="text-slate-500" />
                  <span className="text-sm">{residentData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone size={18} className="text-slate-500" />
                  <span className="text-sm">{residentData.contactNo}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin size={18} className="text-slate-500" />
                  <span className="text-sm">{residentData.institute}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-4">Survey Progress</h3>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-full w-[15%]"></div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2">12 of 124 Questions Completed</p>
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Section */}
            <div className="bg-[#111] border border-slate-800 rounded-2xl p-8 relative group">
              <button className="absolute top-6 right-6 text-slate-600 hover:text-teal-400">
                <Edit3 size={18} />
              </button>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-6">
                <User size={18} className="text-teal-500" /> About Me
              </h3>
              <p className="text-slate-300 leading-relaxed italic">"{residentData.about}"</p>
            </div>

            {/* Experience Section */}
            <div className="bg-[#111] border border-slate-800 rounded-2xl p-8 relative group">
              <button className="absolute top-6 right-6 text-slate-600 hover:text-teal-400">
                <Edit3 size={18} />
              </button>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-6">
                <Briefcase size={18} className="text-teal-500" /> Clinical Experience
              </h3>
              <p className="text-slate-300 leading-relaxed">{residentData.experience}</p>
            </div>

            {/* Residency Identity (Question Set A) */}
            <div className="bg-[#111] border border-slate-800 rounded-2xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Residency Intelligence Identity</h3>
              <div className="grid grid-cols-2 gap-y-6">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Batch Size (A3)</p>
                  <p className="text-sm font-semibold">5-6 Residents</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Stipend Status (A15)</p>
                  <p className="text-sm font-semibold text-emerald-400">Always on time</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Weekly Hours (A22)</p>
                  <p className="text-sm font-semibold">80-100 hrs</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Work Culture (A32)</p>
                  <p className="text-sm font-semibold">Rating: 4/10 (Low Toxicity)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;