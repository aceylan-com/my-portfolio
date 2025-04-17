interface Translation {
  nav: {
    about: string;
    portfolio: string;
    social: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    stats: {
      projects: string;
      clients: string;
      awards: string;
      experience: string;
    };
  };
  portfolio: {
    title: string;
    categories: {
      all: string;
      web: string;
      mobile: string;
      uiux: string;
    };
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    info: {
      title: string;
      email: string;
      location: string;
    };
    cv: {
      title: string;
      description: string;
      download: string;
    };
  };
  footer: {
    rights: string;
  };
  social: {
    title: string;
    github: {
      description: string;
      visit: string;
    };
    linkedin: {
      description: string;
      visit: string;
    };
    twitter: {
      description: string;
      visit: string;
    };
    instagram: {
      description: string;
      visit: string;
    };
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      social: "Social",
      contact: "Contact",
    },
    hero: {
      title: "Hello! This is Ahmet.",
      subtitle: "I am a UI/UX Designer, App Developer and Entrepreneur",
      cta: "View My Work",
    },
    about: {
      title: "About Me",
      description1: "After graduating from the departments of Civil Engineering and Business Administration, I started my career in the construction sector and gained four years of experience in this field. To take my creativity to new levels, I transitioned into the design world and focused on developing original technology projects by combining my engineering perspective with my creative skills. As one of the 378 candidates selected from approximately 4,000 applicants, I received training in user interface and user experience at Europe's only Apple Developer Academy in Italy. During this process, I improved my skills in coding, business development, teamwork, and effective presentation, and worked in various areas such as mobile applications, websites, and print design.",
      description2: "In this journey, I created an original coffee brand by combining my deep passion for coffee with an entrepreneurial spirit. In all my projects, I kept my creative side at the forefront and always aimed to design unique and special products. You can find traces and details of the work I have produced during this process in my portfolio.",
      stats: {
        projects: "Projects Completed",
        clients: "Happy Clients",
        awards: "Engineering Experience",
        experience: "Years of Design Experience",
      },
    },
    portfolio: {
      title: "My Portfolio",
      categories: {
        all: "All",
        web: "App Development",
        mobile: "Illustration",
        uiux: "UI/UX Design",
      },
    },
    contact: {
      title: "Get in Touch",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
      info: {
        title: "Contact Information",
        email: "Email:",
        location: "Location:",
      },
      cv: {
        title: "My CV",
        description: "Get a copy of my detailed resume to learn more about my experience and skills.",
        download: "Download CV",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
    social: {
      title: "My Accounts",
      github: {
        description: "Check out my projects on GitHub.",
        visit: "Go to my page",
      },
      linkedin: {
        description: "Connect with me on LinkedIn.",
        visit: "Go to my page",
      },
      twitter: {
        description: "Follow me on Twitter for updates and thoughts.",
        visit: "Visit Twitter",
      },
      instagram: {
        description: "Follow me on Instagram.",
        visit: "Go to my page",
      },
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      portfolio: "Portföy",
      social: "Sosyal",
      contact: "İletişim",
    },
    hero: {
      title: "Merhaba, ben Ahmet.",
      subtitle: "UI/UX Tasarımcısı, Uygulama Geliştiricisi ve Girişimciyim",
      cta: "Çalışmalarımı Gör",
    },
    about: {
      title: "Hakkımda",
      description1: "İnşaat Mühendisliği ve İşletme bölümlerinden mezun olduktan sonra, kariyerime inşaat sektöründe başladım ve dört yıl boyunca bu alanda deneyim kazandım. Yaratıcılığımı yeni seviyelere taşımak için tasarım dünyasına geçiş yaptım ve mühendislik bakış açımı yaratıcı yeteneklerimle birleştirerek özgün teknoloji projeleri geliştirmeye odaklandım. Yaklaşık 4000 aday arasından seçilen 378 kişiden biri olarak, İtalya'daki Avrupa'nın tek Apple Developer Academy'sinde kullanıcı arayüzü ve deneyimi üzerine eğitim aldım. Bu süreçte kodlama, iş geliştirme, ekip çalışması ve etkili sunum becerilerini geliştirerek mobil uygulamalar, web siteleri ve baskı tasarımı gibi çeşitli alanlarda çalıştım.",
      description2: "Bu yolculukta içten bir kahve tutkusuyla girişimcilik ruhunu birleştirerek özgün bir kahve markası oluşturdum. Tüm projelerimde yaratıcı yönümü ön planda tutarak her zaman özel ve benzersiz ürünler tasarlamayı hedefledim. Portfolyomda, bu süreçte ortaya koyduğum çalışmaların izlerini ve detaylarını bulabilirsiniz.",
      stats: {
        projects: "Tamamlanan Proje",
        clients: "Mutlu Müşteri",
        awards: "Mühendislik Tecrübesi",
        experience: "Yıl Tasarım Deneyimi",
      },
    },
    portfolio: {
      title: "Portföy",
      categories: {
        all: "Tümü",
        web: "Web Geliştirme",
        mobile: "Mobil Uygulama",
        uiux: "UI/UX Tasarım",
      },
    },
    contact: {
      title: "İletişime Geç",
      form: {
        name: "İsim",
        email: "E-posta",
        message: "Mesaj",
        send: "Mesaj Gönder",
      },
      info: {
        title: "İletişim Bilgileri",
        email: "E-posta:",
        location: "Konum:",
      },
      cv: {
        title: "Özgeçmişim",
        description: "Deneyimim ve yeteneklerim hakkında daha fazla bilgi edinmek için CV'mi indirebilirsiniz.",
        download: "CV İndir",
      },
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
    social: {
      title: "Hesaplarım",
      github: {
        description: "GitHub'daki projelerimi inceleyin.",
        visit: "Sayfama Git",
      },
      linkedin: {
        description: "LinkedIn üzerinden olarak bağlantı kurun.",
        visit: "Sayfama Git",
      },
      twitter: {
        description: "Güncellemeler ve düşünceler için Twitter'da takip edin.",
        visit: "Twitter'ı Ziyaret Et",
      },
      instagram: {
        description: "Instagram'da takip edin.",
        visit: "Sayfama Git",
      },
    },
  },
}; 