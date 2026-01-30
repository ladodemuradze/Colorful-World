import React from 'react';
import { Trophy, Star, Award, Sparkles } from 'lucide-react';
import { MVPContent, Language } from '../types';

interface MVPProps {
  content: MVPContent;
  language: Language;
}

const MVPSection: React.FC<MVPProps> = ({ content, language }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-10 left-10 text-yellow-300 opacity-50 animate-bounce">
            <Star size={48} fill="currentColor" />
         </div>
         <div className="absolute top-20 right-20 text-orange-200 opacity-50 animate-pulse">
            <Star size={32} fill="currentColor" />
         </div>
         <div className="absolute bottom-10 left-1/3 text-purple-200 opacity-50">
            <Sparkles size={64} />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-6 shadow-lg animate-float">
             <Trophy size={32} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
            {content.title}
          </h2>
          <p className={`text-xl text-slate-600 max-w-2xl mx-auto ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {content.items.map((item, index) => {
            // Check if it's the middle item to style it as the "winner" or main highlight
            const isCenter = index === 1; 
            
            return (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl p-6 shadow-xl border-2 transition-transform duration-300 hover:-translate-y-2 ${
                  isCenter 
                    ? 'border-yellow-400 md:-translate-y-8 z-10 shadow-yellow-200/50' 
                    : 'border-slate-100'
                }`}
              >
                {/* Badge/Award Icon */}
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-md whitespace-nowrap ${
                    isCenter ? 'bg-yellow-400 text-black' : 'bg-slate-800 text-white'
                }`}>
                   <Award size={16} />
                   <span className={language === 'GE' ? 'font-georgian' : 'font-sans'}>{item.badge}</span>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className={`relative rounded-full overflow-hidden border-4 ${isCenter ? 'border-yellow-400 w-32 h-32' : 'border-slate-100 w-24 h-24'}`}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="text-center">
                   <h3 className={`text-2xl font-bold text-slate-900 mb-1 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                      {item.name}
                   </h3>
                   <span className={`inline-block px-3 py-1 bg-slate-100 rounded-lg text-slate-500 text-sm font-bold mb-4 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                      {item.grade}
                   </span>
                   
                   <div className="bg-slate-50 rounded-xl p-4">
                      <p className={`text-slate-600 italic leading-relaxed ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                         "{item.behavior}"
                      </p>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MVPSection;