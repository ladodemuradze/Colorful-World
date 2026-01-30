import { SiteContent, Language } from './types';

export const CONTENT: Record<Language, SiteContent> = {
  EN: {
    nav: {
      home: "Home",
      programs: "Programs",
      about: "Why Us",
      gallery: "Life at Center",
      contact: "Contact",
      cta: "Book a Tour"
    },
    hero: {
      headline: "Homework Done. Skills Grown. Happy Child.",
      subHeadline: "Reclaim your family evenings. We provide the academic support and creative spark your child needs to thrive in Didi Digomi.",
      cta: "Join the Happy Club"
    },
    about: {
      badge: "Our Philosophy",
      title: "More Than Just A Classroom",
      philosophy: {
        title: "The Colorful Approach",
        description: "We believe that a child's environment dictates their growth. Our 'Modernist Warmth' philosophy combines rigorous academic support with a low-stress, emotionally supportive atmosphere. We don't just correct homework; we build the confidence to solve problems independently.",
        image: "https://picsum.photos/800/600?random=about1"
      },
      team: {
        title: "Mentors, Not Monitors",
        description: "Our team consists of passionate educators who are carefully selected for their empathy and expertise.",
        qualifications: [
          "Certified Subject Teachers",
          "Child Psychology Training",
          "Creative Arts Specialists",
          "First Aid Certified"
        ]
      },
      stats: [
        { value: "6:1", label: "Student-Mentor Ratio" },
        { value: "100%", label: "Homework Completion" },
        { value: "5+", label: "Creative Clubs" }
      ]
    },
    mvp: {
      title: "Students of the Month",
      description: "Celebrating our superstars who demonstrated outstanding behavior and leadership this month.",
      items: [
        {
          name: "Luka",
          grade: "Grade 3",
          behavior: "Luka consistently helps his peers with math problems during homework hour without being asked.",
          badge: "Kindness Hero",
          image: "https://picsum.photos/200/200?random=kid1"
        },
        {
          name: "Nini",
          grade: "Grade 5",
          behavior: "Nini showed incredible discipline by finishing all her weekly assignments early and organizing the library.",
          badge: "Leadership Star",
          image: "https://picsum.photos/200/200?random=kid2"
        },
        {
          name: "Sandro",
          grade: "Grade 1",
          behavior: "Sandro was nominated for sharing his toys and always saying 'please' and 'thank you' to staff.",
          badge: "Politeness King",
          image: "https://picsum.photos/200/200?random=kid3"
        }
      ]
    },
    academic: {
      title: "We Are Your Homework Heroes",
      description: "Stop fighting over math at the dinner table. We ensure your child leaves our center confident and prepared.",
      items: [
        {
          title: "School Tasks? Solved.",
          description: "Our mentors don't just give answers; they teach 'how' to learn.",
          icon: "BookOpen"
        },
        {
          title: "Gap Closing",
          description: "Struggling with a subject? We identify gaps and fill them with fun, targeted practice.",
          icon: "Microscope"
        }
      ]
    },
    preSchool: {
      title: "Ready for the Big World",
      description: "A magical transition program where pre-schoolers fall in love with learning before the first bell rings."
    },
    clubs: {
      title: "Unleash Their Genius",
      description: "School teaches them what to think. We teach them how to create.",
      items: [
        {
          title: "Storytellers Club",
          description: "Where imagination runs wild and future writers are born.",
          icon: "Feather"
        },
        {
          title: "Strategy & Chess",
          description: "Building sharper minds, one move at a time.",
          icon: "Puzzle"
        },
        {
          title: "Wild & Free",
          description: "Because kids need fresh air, green grass, and unstructured play.",
          icon: "Sun"
        }
      ]
    },
    services: {
      title: "Parents, We've Got You",
      description: "Designed for the busy modern family. Zero stress logistics.",
      items: [
        {
          title: "Door-to-Door Shuttle",
          description: "We pick them up. Safe, reliable, and on time. You breathe easy.",
          icon: "Bus"
        },
        {
          title: "Real Food, Real Good",
          description: "Home-cooked, nutritious meals that fuel growing brains.",
          icon: "Utensils"
        },
        {
          title: "Full Day Support",
          description: "Covering the gap between school end and work end. 09:00 - 19:00.",
          icon: "Clock"
        }
      ]
    },
    faq: {
      title: "Curious Minds Ask...",
      description: "Answers to the most common questions from parents like you.",
      items: [
        {
          question: "What are your operating hours?",
          answer: "We are open Monday through Friday from 09:00 to 19:00. We are here to bridge the gap between school end and your work day end."
        },
        {
          question: "Is transportation included?",
          answer: "Yes! We offer a safe, door-to-door shuttle service. We pick up your child from school and bring them to our center, and can also drop them home."
        },
        {
          question: "Do you provide meals?",
          answer: "Absolutely. We provide two nutritious, home-cooked meals every day to keep their energy levels high for learning and playing."
        },
        {
          question: "What ages do you accept?",
          answer: "We focus on primary education, specifically for children in Grades 1 through 6. We also have a dedicated Pre-school preparation program."
        },
        {
          question: "How do I register?",
          answer: "It's simple! Click the 'Book a Tour' button to schedule a visit. We believe in seeing the magic in person before signing up."
        }
      ]
    },
    location: {
      title: "Visit Our Wonderland",
      address: "Petre Iberi 9, Didi Digomi",
      safety: "A fortress of safety with a garden of joy."
    },
    footer: {
      copyright: "© 2024 Colorful World. Made with love for kids."
    }
  },
  GE: {
    nav: {
      home: "მთავარი",
      programs: "პროგრამები",
      about: "ჩვენს შესახებ",
      gallery: "გალერეა",
      contact: "კონტაქტი",
      cta: "დაჯავშნე ვიზიტი"
    },
    hero: {
      headline: "მეცადინეობა დასრულებულია. ბავშვი ბედნიერია.",
      subHeadline: "დაიბრუნეთ ოჯახური საღამოები. ჩვენ ვზრუნავთ აკადემიურ მოსწრებაზე და შემოქმედებით განვითარებაზე.",
      cta: "შემოუერთდით კლუბს"
    },
    about: {
      badge: "ჩვენი ფილოსოფია",
      title: "მეტი ვიდრე სასწავლო ცენტრი",
      philosophy: {
        title: "ფერადი მიდგომა",
        description: "ჩვენ გვჯერა, რომ გარემო განსაზღვრავს ბავშვის განვითარებას. ჩვენი ფილოსოფია აერთიანებს აკადემიურ სიძლიერესა და ემოციურ მხარდაჭერას. ჩვენ არ ვასწორებთ მხოლოდ დავალებებს; ჩვენ ვასწავლით დამოუკიდებელ აზროვნებას.",
        image: "https://picsum.photos/800/600?random=about1"
      },
      team: {
        title: "მენტორები და არა ზედამხედველები",
        description: "ჩვენი გუნდი შედგება ემპათიური და პროფესიონალი პედაგოგებისგან, რომლებიც თქვენი შვილის მეგობრები ხდებიან.",
        qualifications: [
          "სერტიფიცირებული მასწავლებლები",
          "ბავშვთა ფსიქოლოგიის ცოდნა",
          "შემოქმედებითი უნარები",
          "პირველადი დახმარების სერტიფიკატი"
        ]
      },
      stats: [
        { value: "6:1", label: "მოსწავლე-მენტორის შეფარდება" },
        { value: "100%", label: "დავალებების შესრულება" },
        { value: "5+", label: "კრეატიული კლუბი" }
      ]
    },
    mvp: {
      title: "თვის ვარსკვლავები",
      description: "აღვნიშნავთ მოსწავლეებს, რომლებიც ამ თვეში გამოირჩეოდნენ სანიმუშო ქცევითა და ლიდერული თვისებებით.",
      items: [
        {
          name: "ლუკა",
          grade: "მე-3 კლასი",
          behavior: "ლუკა მუდმივად ეხმარება მეგობრებს მათემატიკის დავალებების შესრულებაში და ყოველთვის პოზიტიურია.",
          badge: "სიკეთის გმირი",
          image: "https://picsum.photos/200/200?random=kid1"
        },
        {
          name: "ნინი",
          grade: "მე-5 კლასი",
          behavior: "ნინიმ გამოიჩინა საოცარი დისციპლინა - დაასრულა ყველა საკითხავი და მოაწესრიგა ცენტრის ბიბლიოთეკა!",
          badge: "ლიდერი",
          image: "https://picsum.photos/200/200?random=kid2"
        },
        {
          name: "სანდრო",
          grade: "1-ლი კლასი",
          behavior: "სანდრომ ყველა მეგობარს გაუნაწილა სათამაშოები და ყოველთვის თავაზიანია პერსონალთან.",
          badge: "ზრდილობის მეფე",
          image: "https://picsum.photos/200/200?random=kid3"
        }
      ]
    },
    academic: {
      title: "დაემშვიდობეთ სასკოლო სტრესს",
      description: "აღარ იჩხუბოთ მათემატიკაზე სადილის დროს. ჩვენი ცენტრიდან ბავშვები მომზადებულები და თავდაჯერებულები მიდიან.",
      items: [
        {
          title: "დავალებები? მზადაა.",
          description: "ჩვენი მენტორები არამხოლოდ ეხმარებიან, არამედ ასწავლიან სწავლას.",
          icon: "BookOpen"
        },
        {
          title: "ცოდნის გაღრმავება",
          description: "თუ რაიმე საგანი რთულია, ჩვენ ვავსებთ ხარვეზებს სახალისო მეთოდებით.",
          icon: "Microscope"
        }
      ]
    },
    preSchool: {
      title: "მზადება დიდი სამყაროსთვის",
      description: "ჯადოსნური პროგრამა, სადაც პატარებს სწავლა უყვარდებათ სკოლის ზარამდე."
    },
    clubs: {
      title: "აღმოაჩინე ნიჭი",
      description: "სკოლა ასწავლის წესებს, ჩვენ ვასწავლით შექმნას.",
      items: [
        {
          title: "მთხრობელთა კლუბი",
          description: "სადაც წარმოსახვა ცოცხლდება და მომავალი მწერლები იბადებიან.",
          icon: "Feather"
        },
        {
          title: "სტრატეგია და ჭადრაკი",
          description: "გონების გავარჯიშება ყოველი სვლისას.",
          icon: "Puzzle"
        },
        {
          title: "თავისუფალი ეზო",
          description: "სუფთა ჰაერი, მწვანე გარემო და უსაფრთხო თამაში.",
          icon: "Sun"
        }
      ]
    },
    services: {
      title: "მშობლებო, ჩვენ თქვენთან ვართ",
      description: "შექმნილია დაკავებული ოჯახებისთვის. ნულოვანი ლოგისტიკური სტრესი.",
      items: [
        {
          title: "უსაფრთხო ტრანსპორტი",
          description: "სკოლიდან კარამდე. საიმედო მძღოლები, მშვიდი მშობლები.",
          icon: "Bus"
        },
        {
          title: "ნამდვილი, ჯანსაღი საკვები",
          description: "სახლში მომზადებული კერძები, რომლებიც გონებას კვებავს.",
          icon: "Utensils"
        },
        {
          title: "სრული დღის მხარდაჭერა",
          description: "ჩვენ ვფარავთ დროს სკოლის შემდეგ სამსახურის დასრულებამდე. 09:00 - 19:00.",
          icon: "Clock"
        }
      ]
    },
    faq: {
      title: "ხშირად დასმული კითხვები",
      description: "პასუხები ყველაფერზე, რაც გაინტერესებთ.",
      items: [
        {
          question: "რა საათებში მუშაობთ?",
          answer: "ჩვენ ვმუშაობთ ორშაბათიდან პარასკევის ჩათვლით, 09:00-დან 19:00 საათამდე."
        },
        {
          question: "ტრანსპორტირება შედის?",
          answer: "დიახ! ჩვენ გვყავს საკუთარი მიკროავტობუსები, რომლებსაც ბავშვები სკოლიდან მოჰყავთ და საღამოს სახლში აბრუნებენ."
        },
        {
          question: "კვება გაქვთ?",
          answer: "რა თქმა უნდა. ბავშვები იღებენ დღეში ორჯერად, ადგილზე მომზადებულ ჯანსაღ საკვებს."
        },
        {
          question: "რა ასაკის ბავშვებს იღებთ?",
          answer: "ჩვენი პროგრამა გათვლილია 1-დან მე-6 კლასის მოსწავლეებისთვის. ასევე გვაქვს სკოლამდელი მომზადების ჯგუფი."
        },
        {
          question: "როგორ დავარეგისტრირო ბავშვი?",
          answer: "მარტივად! დააჭირეთ ღილაკს 'დაჯავშნე ვიზიტი' ან დაგვირეკეთ. გირჩევთ ჯერ მოხვიდეთ და გარემო თავად ნახოთ."
        }
      ]
    },
    location: {
      title: "გვეწვიეთ ჩვენს სამყაროში",
      address: "პეტრე იბერის 9, დიდი დიღომი",
      safety: "დაცული ციხესიმაგრე და ბედნიერების ეზო."
    },
    footer: {
      copyright: "© 2024 ფერადი სამყარო. შექმნილია სიყვარულით."
    }
  }
};