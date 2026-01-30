import React from 'react';
import { SiteContent, Language } from '../types';

interface HeroProps {
  content: SiteContent['hero'];
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ content, language }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-[#FFFBF0]">
      {/* Playful Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-yellow-300 opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-orange-300 opacity-20 blur-3xl animate-float-delayed"></div>
      
      {/* Squiggly line decoration svg - hidden on small mobile to reduce clutter */}
      <svg className="hidden sm:block absolute top-32 left-10 w-24 h-24 text-orange-400 opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M10,50 Q25,25 40,50 T70,50 T100,50" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <div className="inline-block relative mb-4">
              <span className={`relative z-10 px-4 py-2 bg-white border-2 border-black rounded-full text-xs md:text-sm font-bold tracking-wider text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
                 {language === 'EN' ? '#1 After School Center' : '#1 გახანგრძლივებული'}
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] mb-4 md:mb-6 ${language === 'GE' ? 'font-georgian' : 'font-display'}`}>
              {content.headline.split('. ')[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                {content.headline.split('. ').slice(1).join('. ')}
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-700 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
              {content.subHeadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className={`px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-[6px_6px_0px_0px_#fb923c] hover:shadow-[2px_2px_0px_0px_#fb923c] hover:translate-x-1 hover:translate-y-1 active:scale-95 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}
              >
                {content.cta}
              </a>
              <a
                href="#programs"
                className={`flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-1 hover:translate-y-1 active:scale-95 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}
              >
                <span>{language === 'EN' ? 'Explore Fun' : 'ნახე პროგრამები'}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="User" loading="lazy" />
                    </div>
                  ))}
               </div>
               <div className={`text-sm font-bold text-slate-600 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                  {language === 'EN' ? 'Trusted by 500+ Happy Parents' : '500+ ბედნიერი მშობელი'}
               </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative animate-scale-in animation-delay-200 px-4 md:px-0">
             {/* Main Image Container */}
             <div className="relative z-10">
                <div className="absolute inset-0 bg-black rounded-[2.5rem] md:rounded-[3rem] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
                <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 border-black aspect-square bg-orange-100">
                  <img
                    src="https://picsum.photos/800/800?random=1"
                    alt="Happy Kid"
                    width="800"
                    height="800"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-yellow-400 text-black px-3 py-1.5 md:px-4 md:py-2 rounded-xl border-2 border-black font-bold transform rotate-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                    A+
                  </div>
                  
                  <div className="absolute bottom-6 left-[-10px] md:bottom-10 md:left-[-20px] bg-white p-3 md:p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-[160px] md:max-w-[200px] transform -rotate-3">
                     <p className={`text-[10px] md:text-xs font-bold mb-1 text-slate-400 uppercase ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                       {language === 'EN' ? 'Parent Feedback' : 'მშობლის კომენტარი'}
                     </p>
                     <p className={`text-xs md:text-sm font-bold italic leading-tight ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}>
                       "{language === 'EN' ? 'My son loves this place!' : 'ჩემს შვილს უყვარს აქაურობა!'}"
                     </p>
                  </div>
                </div>
             </div>
             
             {/* Decorative Background Blobs */}
             <div className="absolute -z-10 top-[-20%] left-[-10%] w-[120%] h-[120%] bg-contain bg-center bg-no-repeat opacity-30 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FF0066' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,87.9,-3.8C85.7,10.5,78.6,23.5,69.6,35.3C60.6,47.1,49.7,57.8,37.3,64.8C24.9,71.8,11,75.1,-2.4,79.2C-15.8,83.3,-28.7,88.2,-40.5,82.8C-52.3,77.4,-63,61.7,-70.8,45.8C-78.6,29.9,-83.5,13.8,-81.4,-1.2C-79.3,-16.2,-70.2,-30.1,-59.8,-41.8C-49.4,-53.5,-37.7,-63,-25.1,-68.8C-12.5,-74.6,1,-76.7,14.7,-76.4L44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E")` }}></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;