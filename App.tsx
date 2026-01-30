import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MVPSection from './components/MVPSection';
import { AcademicSection, PreSchoolSection, ClubsSection } from './components/ProgramSections';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';
import LocationSection from './components/LocationSection';
import { CONTENT } from './constants';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('GE');
  
  // Derived content based on current language
  const content = CONTENT[language];

  return (
    <div className="min-h-screen bg-white">
      <Header 
        content={content.nav} 
        language={language} 
        setLanguage={setLanguage} 
      />
      
      <main>
        <Hero content={content.hero} language={language} />

        <AboutSection
          content={content.about}
          language={language}
        />
        
        <AcademicSection 
          id="programs"
          content={content.academic} 
          language={language} 
        />
        
        <PreSchoolSection 
          content={content.preSchool} 
          language={language} 
        />
        
        <ClubsSection 
          content={content.clubs} 
          language={language} 
        />

        <MVPSection
          content={content.mvp}
          language={language}
        />
        
        <ServicesSection 
          id="services"
          content={content.services} 
          language={language} 
        />

        <FAQSection 
          content={content.faq}
          language={language}
        />
      </main>

      <LocationSection 
        id="contact"
        content={content.location} 
        footerContent={content.footer}
        language={language} 
      />
    </div>
  );
}

export default App;