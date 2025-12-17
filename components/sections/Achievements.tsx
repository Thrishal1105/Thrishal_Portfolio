
import React from 'react';
import { ACHIEVEMENTS } from '../../constants';
import { Linkedin } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-12">
      <h2 className="text-4xl font-heading font-bold mb-2">Achievements</h2>
      <div className="w-20 h-1.5 bg-neon-green rounded-full mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-10">
        {ACHIEVEMENTS.map((item) => (
          <div 
            key={item.id}
            className="group bg-navy-panel rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col h-full"
          >
            <div className="relative overflow-hidden h-64 bg-gray-900/50">
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                <a 
                  href={item.linkedinLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0077b5] rounded-full text-white hover:bg-[#0077b5]/80 hover:scale-110 transition-all duration-300"
                  title="View on LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-neon-green text-xs font-bold uppercase tracking-wider mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
