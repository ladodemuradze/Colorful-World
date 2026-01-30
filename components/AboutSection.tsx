import React from 'react';
import { Heart, GraduationCap, CheckCircle2 } from 'lucide-react';
import { AboutContent, Language } from '../types';

interface AboutProps {
  content: AboutContent;
  language: Language;
}

const AboutSection: React.FC<AboutProps> = ({ content, language }) => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#FFFBF0] to-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 left-[-50px] w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-[-50px] w-60 h-60 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-600 font-bold text-sm mb-4 tracking-wider uppercase">
            {content.badge}
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold text-slate-900 mb-6 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
            {content.title}
          </h2>
        </div>

        {/* Philosophy Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <div className="absolute -inset-4 bg-orange-100 rounded-[2rem] transform rotate-3"></div>
                <img 
                  src={content.philosophy.image} 
                  alt="Philosophy" 
                  className="relative rounded-[2rem] shadow-xl w-full object-cover aspect-video transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex items-center gap-3">
                   <Heart className="text-red-500 fill-current w-6 h-6 animate-pulse" />
                   <span className={`font-bold ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                      {language === 'EN' ? 'Made with Love' : 'სიყვარულით სავსე'}
                   </span>
                </div>
             </div>
          </div>
          <div className="w-full lg:w-1/2">
             <h3 className={`text-3xl font-bold mb-6 text-slate-800 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                {content.philosophy.title}
             </h3>
             <p className={`text-lg text-slate-600 leading-relaxed mb-8 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                {content.philosophy.description}
             </p>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-100 pt-8">
                {content.stats.map((stat, idx) => (
                   <div key={idx} className="text-center md:text-left">
                      <div className={`text-3xl font-bold text-purple-600 mb-1 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                         {stat.value}
                      </div>
                      <div className={`text-sm text-slate-500 font-bold uppercase tracking-wide ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                         {stat.label}
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>

        {/* Team/Mentors Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-slate-100 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></div>
           
           <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3">
                 <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                    <GraduationCap className="w-8 h-8" />
                 </div>
                 <h3 className={`text-3xl font-bold mb-4 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                    {content.team.title}
                 </h3>
                 <p className={`text-slate-600 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                    {content.team.description}
                 </p>
              </div>

              <div className="w-full md:w-2/3">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.team.qualifications.map((qual, idx) => (
                       <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className={`font-bold text-slate-700 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                             {qual}
                          </span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;