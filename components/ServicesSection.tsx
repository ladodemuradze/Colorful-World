import React from 'react';
import { Bus, Utensils, Clock, CheckCircle2 } from 'lucide-react';
import { SectionContent, Language } from '../types';

const icons: Record<string, React.ElementType> = {
  Bus,
  Utensils,
  Clock,
};

interface ServicesProps {
  content: SectionContent;
  language: Language;
  id?: string;
}

const ServicesSection: React.FC<ServicesProps> = ({ content, language, id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              {language === 'EN' ? 'For Parents' : 'მშობლებისთვის'}
           </span>
          <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
            {content.title}
          </h2>
          <p className={`text-xl text-slate-600 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items?.map((item, index) => {
            const Icon = item.icon ? icons[item.icon] : Clock;
            return (
              <div key={index} className="flex flex-col border-b-4 border-slate-100 pb-8 md:border-b-0 md:border-r-4 md:last:border-r-0 md:pb-0 px-4">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Icon className="w-6 h-6" />
                   </div>
                   <h3 className={`text-xl font-bold text-slate-900 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                     {item.title}
                   </h3>
                </div>
                <p className={`text-slate-600 leading-relaxed text-lg ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-bold">
                   <CheckCircle2 size={16} />
                   <span>{language === 'EN' ? 'Included' : 'შედის ფასში'}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action Banner */}
        <div className="mt-20 bg-black rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
              <h3 className={`text-3xl font-bold text-white mb-6 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                 {language === 'EN' ? 'Ready to see the difference?' : 'მზად ხართ განსხვავების სანახავად?'}
              </h3>
              <a href="#contact" className={`inline-block px-10 py-4 bg-orange-500 text-white text-lg font-bold rounded-xl hover:bg-orange-600 hover:scale-105 transition-all shadow-lg ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                 {language === 'EN' ? 'Book a Visit Now' : 'დაჯავშნე ვიზიტი ახლავე'}
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;