import React from 'react';
import { MapPin, ShieldCheck, Phone } from 'lucide-react';
import { SiteContent, Language } from '../types';

interface LocationProps {
  content: SiteContent['location'];
  footerContent: SiteContent['footer'];
  language: Language;
  id?: string;
}

const LocationSection: React.FC<LocationProps> = ({ content, footerContent, language, id }) => {
  return (
    <footer id={id} className="bg-white pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Info Side */}
          <div className="order-2 lg:order-1">
            <h2 className={`text-3xl font-bold text-slate-900 mb-8 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
              {content.title}
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className={`text-lg font-bold text-slate-800 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                    {language === 'EN' ? 'Address' : 'მისამართი'}
                  </h4>
                  <p className={`text-slate-600 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                    {content.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className={`text-lg font-bold text-slate-800 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                    {language === 'EN' ? 'Safety' : 'უსაფრთხოება'}
                  </h4>
                  <p className={`text-slate-600 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                    {content.safety}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                 </div>
                 <div>
                    <h4 className={`text-lg font-bold text-slate-800 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                       {language === 'EN' ? 'Call Us' : 'დაგვირეკეთ'}
                    </h4>
                    <p className="text-slate-600 font-mono text-lg">
                       +995 555 12 34 56
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="order-1 lg:order-2 h-[300px] md:h-[400px] bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner border-4 border-white shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.8267236528775!2d44.75785007656254!3d41.77092897125348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d790757755b%3A0x6734559286466986!2s9%20Petre%20Iberi%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1709400000000!5m2!1sen!2sge" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
           <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-400 to-rose-400"></div>
              <span className={`font-bold text-slate-800 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                 {language === 'GE' ? 'ფერადი სამყარო' : 'Colorful World'}
              </span>
           </div>
           <p className={`text-slate-400 text-sm ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
              {footerContent.copyright}
           </p>
        </div>
      </div>
    </footer>
  );
};

export default LocationSection;