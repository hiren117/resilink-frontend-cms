import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ClipboardCheck } from 'lucide-react';
import { apiService } from '@/CMS/api'; // Adjust path if needed
import { type ResidentInput } from '@/CMS/api'; // Import the interface for type safety
const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    contactNo: '',
    currentRole: '' as 'JR1' | 'JR2' | 'JR3' | '', // Type cast for TS
    institute: '',
    specialty: '',
    otherSpecialty: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Create the payload matching your interface
      const payload: ResidentInput = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        contactNo: formData.contactNo,
        currentRole: formData.currentRole,
        institute: formData.institute,
        specialty: formData.specialty === 'Other' ? formData.otherSpecialty : formData.specialty,
      };

      const result = await apiService.register(payload);
      
      // Save the ID provided by Strapi to link the survey later
      const residentId = result.data.id;
      localStorage.setItem('residentId', residentId);
      
      navigate('/profile');
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Make sure Strapi is running and Public permissions are set.");
    }
  };

  const branches = [
    "General Medicine", "General Surgery", "Pediatrics", "OBG", 
    "Orthopedics", "Radiology", "Anaesthesiology", "Dermatology", 
    "Psychiatry", "ENT", "Ophthalmology", "Pathology", 
    "Microbiology", "Pharmacology", "Community Medicine", 
    "Pulmonary Medicine", "Emergency Medicine", "Nuclear Medicine", 
    "PMR", "Transfusion Medicine", "Other"
  ];

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-6">

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <h1 className="text-4xl font-bold mb-4">Resident Registration</h1>
          <p className="text-slate-400">Please provide your details to begin the Residency Intelligence Survey.</p>
          <div className="flex items-center gap-2 mt-4 text-teal-500 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={16} />
            Strictly Confidential & Secure
          </div>
        </div>

        {/* The Form - All at once */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 1: Identity */}
          <div className="space-y-6">
            <h3 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-2">Personal Details</h3>
            
            <div>
              <label className="block text-xs text-slate-500 mb-2 uppercase">Full Name</label>
              <input name="fullName" onChange={handleChange} className="w-full bg-[#111] border border-slate-800 rounded-lg p-3 focus:border-teal-400 outline-none" placeholder="Dr. Rajesh Kumar" />
            </div>

            <div>
              <label className="block text-xs text-slate-500 mb-2 uppercase">Email Address</label>
              <input name="email" onChange={handleChange} className="w-full bg-[#111] border border-slate-800 rounded-lg p-3 focus:border-teal-400 outline-none" placeholder="rajesh@hospital.com" />
            </div>

            <div>
              <label className="block text-xs text-slate-500 mb-2 uppercase">Password</label>
              <input name="password" onChange={handleChange} className="w-full bg-[#111] border border-slate-800 rounded-lg p-3 focus:border-teal-400 outline-none" placeholder="Enter your password" />
            </div>

            <div>
              <label className="block text-xs text-slate-500 mb-2 uppercase">Contact Number</label>
              <input name="contactNo" onChange={handleChange} className="w-full bg-[#111] border border-slate-800 rounded-lg p-3 focus:border-teal-400 outline-none" placeholder="+91 98765 43210" />
            </div>
          </div>

          {/* Section 2: Professional */}
          <div className="space-y-6">
            <h3 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-2">Residency Info</h3>
            
            <div>
              <label className="block text-xs text-slate-500 mb-2 uppercase">Current Role</label>
              <select name="currentRole" onChange={handleChange} className="w-full bg-[#111] border border-slate-800 rounded-lg p-3 focus:border-teal-400 outline-none text-slate-400">
                <option value="">Select Year</option>
                <option value="JR1">JR1</option>
                <option value="JR2">JR2</option>
                <option value="JR3">JR3</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-500 mb-2 uppercase">Institute / Residency Name</label>
              <input name="institute" onChange={handleChange} className="w-full bg-[#111] border border-slate-800 rounded-lg p-3 focus:border-teal-400 outline-none" placeholder="Medical College Name" />
            </div>

            <div>
              <label className="block text-xs text-slate-500 mb-2 uppercase">Medical Branch / Specialty</label>
              <select name="specialty" onChange={handleChange} className="w-full bg-[#111] border border-slate-800 rounded-lg p-3 focus:border-teal-400 outline-none text-slate-400">
                <option value="">Select Specialty</option>
                {branches.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* Conditional 'Other' Field */}
            {formData.specialty === "Other" && (
              <div className="animate-in fade-in duration-300">
                <label className="block text-xs text-slate-500 mb-2 uppercase">Specify Other Specialty</label>
                <input name="otherSpecialty" onChange={handleChange} className="w-full bg-[#111] border border-teal-500/30 rounded-lg p-3 focus:border-teal-400 outline-none" placeholder="Enter specialty name" />
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-16 flex flex-col items-center">
          <button 
            type="submit" // Change to submit type
            className="bg-teal-500 hover:bg-teal-400 text-black px-12 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all"
          >
            Submit <ClipboardCheck size={20} />
          </button>
        </div>
      </form>

    </div>
  );
};

export default RegistrationPage;