export type Language = 'GE' | 'EN';

export interface SectionContent {
  title: string;
  subtitle?: string;
  description: string;
  items?: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AboutContent {
  badge: string;
  title: string;
  philosophy: {
    title: string;
    description: string;
    image: string;
  };
  team: {
    title: string;
    description: string;
    qualifications: string[];
  };
  stats: {
    value: string;
    label: string;
  }[];
}

export interface MVPItem {
  name: string;
  grade: string;
  behavior: string;
  badge: string;
  image: string;
}

export interface MVPContent {
  title: string;
  description: string;
  items: MVPItem[];
}

export interface SiteContent {
  nav: {
    home: string;
    programs: string;
    about: string;
    gallery: string;
    contact: string;
    cta: string;
  };
  hero: {
    headline: string;
    subHeadline: string;
    cta: string;
  };
  about: AboutContent;
  mvp: MVPContent;
  academic: SectionContent;
  preSchool: SectionContent;
  clubs: SectionContent;
  services: SectionContent;
  faq: {
    title: string;
    description: string;
    items: FAQItem[];
  };
  location: {
    title: string;
    address: string;
    safety: string;
  };
  footer: {
    copyright: string;
  };
}