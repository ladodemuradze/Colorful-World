import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SiteContent, Language } from '../types';

interface FAQProps {
  content: SiteContent['faq'];
  language: Language;
}

const FAQSection: React.FC<FAQProps> = ({ content, language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
       {/* Background doodles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4 shadow-md">
             <HelpCircle className="text-blue-500 w-6 h-6" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
            {content.title}
          </h2>
          <p className={`text-xl text-slate-600 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
            {content.description}
          </p>
        </div>

        <div className="space-y-4">
          {content.items.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl border-2 transition-all duration-300 ${
                openIndex === index 
                  ? 'border-blue-500 shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]' 
                  : 'border-slate-200 hover:border-blue-300'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold text-slate-900 pr-8 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed text-lg border-t border-transparent">
                  <p className={language === 'GE' ? 'font-georgian' : 'font-sans'}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;