interface Translation {
  nav: {
    about: string;
    portfolio: string;
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
}

export const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "UI/UX Designer & Developer",
      subtitle: "Crafting beautiful, intuitive experiences for the modern web",
      cta: "View My Work",
    },
    about: {
      title: "About Me",
      description1: "I'm a passionate UI/UX designer and developer with over 5 years of experience creating digital experiences that delight users. My approach combines clean aesthetics with intuitive functionality, ensuring that every project not only looks beautiful but also performs flawlessly.",
      description2: "Specializing in React and Next.js, I build scalable solutions that help businesses achieve their goals through exceptional user experiences.",
      stats: {
        projects: "Projects Completed",
        clients: "Happy Clients",
        awards: "Design Awards",
        experience: "Years of Experience",
      },
    },
    portfolio: {
      title: "My Portfolio",
      categories: {
        all: "All",
        web: "Web Development",
        mobile: "Mobile Apps",
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
        title: "Download Resume",
        description: "Get a copy of my detailed resume to learn more about my experience and skills.",
        download: "Download CV",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      portfolio: "Portfolyo",
      contact: "İletişim",
    },
    hero: {
      title: "UI/UX Tasarımcı & Geliştirici",
      subtitle: "Modern web için güzel ve sezgisel deneyimler tasarlıyorum",
      cta: "Çalışmalarımı Gör",
    },
    about: {
      title: "Hakkımda",
      description1: "5 yılı aşkın deneyime sahip tutkulu bir UI/UX tasarımcısı ve geliştiricisiyim. Kullanıcıları mutlu eden dijital deneyimler yaratıyorum. Yaklaşımım, temiz estetik ve sezgisel işlevselliği birleştirerek, her projenin sadece güzel görünmesini değil, aynı zamanda mükemmel performans göstermesini sağlıyor.",
      description2: "React ve Next.js konusunda uzmanlaşarak, işletmelerin hedeflerine olağanüstü kullanıcı deneyimleri aracılığıyla ulaşmalarına yardımcı oluyorum.",
      stats: {
        projects: "Tamamlanan Proje",
        clients: "Mutlu Müşteri",
        awards: "Tasarım Ödülü",
        experience: "Yıl Deneyim",
      },
    },
    portfolio: {
      title: "Portfolyom",
      categories: {
        all: "Tümü",
        web: "Web Geliştirme",
        mobile: "Mobil Uygulamalar",
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
        title: "CV'mi İndir",
        description: "Deneyimim ve yeteneklerim hakkında daha fazla bilgi edinmek için CV'mi indirebilirsiniz.",
        download: "CV İndir",
      },
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
  },
}; 