import React from 'react';
import { BookOpen, Microscope, Feather, Puzzle, Sun } from 'lucide-react';
import { SectionContent, Language } from '../types';

const icons: Record<string, React.ElementType> = {
  BookOpen,
  Microscope,
  Feather,
  Puzzle,
  Sun,
};

interface SectionProps {
  content: SectionContent;
  language: Language;
  bgColor?: string;
  id?: string;
}

export const AcademicSection: React.FC<SectionProps> = ({ content, language, id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fb923c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
             <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-4">
                {language === 'EN' ? 'Academic Focus' : 'აკადემიური ნაწილი'}
             </div>
             <h2 className={`text-3xl md:text-5xl font-bold text-black mb-6 leading-tight ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                {content.title}
             </h2>
             <p className={`text-lg md:text-xl text-slate-600 mb-8 font-medium ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                {content.description}
             </p>
             <button className={`text-blue-600 font-bold underline decoration-4 decoration-blue-200 hover:decoration-blue-400 transition-all text-lg ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                {language === 'EN' ? 'See our teaching method' : 'ნახეთ სწავლების მეთოდი'}
             </button>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6 pt-6 md:pt-0">
            {content.items?.map((item, index) => {
              const Icon = item.icon ? icons[item.icon] : BookOpen;
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-3xl border-4 border-black bg-${index === 0 ? 'orange' : 'blue'}-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 group`}
                >
                   <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-black flex items-center justify-center bg-white transform rotate-12 group-hover:rotate-6 transition-transform shadow-sm`}>
                      <Icon className="w-8 h-8 text-black" />
                   </div>
                  <h3 className={`text-2xl font-bold text-black mb-4 mt-2 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-slate-800 font-medium leading-relaxed ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PreSchoolSection: React.FC<SectionProps> = ({ content, language }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FFDEE9] bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-6 md:p-16 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 relative">
               {/* Tape effects */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200 opacity-80 rotate-3 z-20"></div>
               
              <div className="relative rounded-2xl overflow-hidden border-2 border-black aspect-[4/3] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/800/600?random=2" 
                  alt="Preschool activities" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-lg font-bold text-sm mb-4 transform -rotate-2">
                 PRE-SCHOOL
              </span>
              <h2 className={`text-3xl md:text-5xl font-bold text-black mb-6 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                {content.title}
              </h2>
              <p className={`text-lg md:text-xl text-slate-700 leading-relaxed mb-8 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                {content.description}
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {['🎨 Art', '🎵 Music', '🔤 ABCs', '🤸‍♂️ Play'].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-slate-100 rounded-full font-bold text-slate-700 border border-slate-300 text-sm md:text-base">
                          {tag}
                      </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ClubsSection: React.FC<SectionProps> = ({ content, language }) => {
  return (
    <section className="py-16 md:py-28 bg-[#0F172A] text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-20 md:w-32 h-20 md:h-32 rounded-full border-4 border-white/20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-64 h-40 md:h-64 rounded-full bg-purple-600/20 blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300 mb-6 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
            {content.title}
          </h2>
          <p className={`text-lg md:text-xl text-slate-300 max-w-2xl mx-auto ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items?.map((item, index) => {
             const Icon = item.icon ? icons[item.icon] : Sun;
             return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-pink-500 to-rose-500' : index === 1 ? 'from-purple-500 to-indigo-500' : 'from-green-400 to-emerald-600'} rounded-3xl transform rotate-6 opacity-40 group-hover:rotate-12 transition-transform duration-300`}></div>
                
                <div className="relative bg-[#1E293B] p-8 rounded-3xl border border-slate-700 hover:border-slate-500 transition-colors h-full flex flex-col items-center text-center transform hover:-translate-y-2 duration-300">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-yellow-300">
                      <Icon className="w-8 h-8" />
                   </div>
                   <h3 className={`text-2xl font-bold mb-4 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                      {item.title}
                   </h3>
                   <p className={`text-slate-400 leading-relaxed ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                      {item.description}
                   </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};