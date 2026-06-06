import React from 'react';
import { useNavigate } from 'react-router-dom';
import useContentStore from '../store/useContentStore';

const Admin = () => {
  const { 
    marqueeText, heroTagline, heroImage, aboutText, 
    updateContent 
  } = useContentStore();
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#111] text-white p-8 md:p-12 font-sans overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-[#333] pb-6">
          <h1 className="text-3xl font-light tracking-wide uppercase">Admin Dashboard</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-[var(--primary)] text-black rounded-full text-sm font-semibold hover:bg-opacity-80 transition"
          >
            Back to Site
          </button>
        </div>

        <div className="space-y-12">
          {/* Hero Section */}
          <section className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333]">
            <h2 className="text-xl font-medium mb-6 text-[var(--primary)]">Hero Section</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Marquee Text</label>
                <input 
                  type="text" 
                  value={marqueeText}
                  onChange={(e) => updateContent('marqueeText', e.target.value)}
                  className="w-full bg-[#222] border border-[#444] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Hero Tagline</label>
                <input 
                  type="text" 
                  value={heroTagline}
                  onChange={(e) => updateContent('heroTagline', e.target.value)}
                  className="w-full bg-[#222] border border-[#444] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Hero Image URL (Unsplash or direct link)</label>
                <input 
                  type="text" 
                  value={heroImage}
                  onChange={(e) => updateContent('heroImage', e.target.value)}
                  className="w-full bg-[#222] border border-[#444] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition"
                />
                {heroImage && (
                  <img src={heroImage} alt="preview" className="mt-4 w-32 h-32 object-cover rounded-lg border border-[#444]" />
                )}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333]">
            <h2 className="text-xl font-medium mb-6 text-[var(--primary)]">About Section</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">About Text (will be split per character)</label>
                <textarea 
                  value={aboutText}
                  onChange={(e) => updateContent('aboutText', e.target.value)}
                  rows={5}
                  className="w-full bg-[#222] border border-[#444] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition resize-none"
                />
              </div>
            </div>
          </section>

        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          Changes are automatically saved to your browser's local storage.
        </div>
      </div>
    </div>
  );
};

export default Admin;
