export interface PortfolioItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  additionalImages: string[];
  technologies: string[];
  category: string;
  link?: string;
  year: string;
}

export const portfolioCategories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design"
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "unda",
    title: "Unda",
    shortDescription: "Online Event Mobile App",
    fullDescription: `An enterprise-grade financial dashboard that transforms complex data into 
    actionable insights. Features include real-time market data visualization, predictive analytics, 
    and customizable reporting tools. The interface is designed for maximum efficiency and clarity.`,
    mainImage: "/images/portfolio/portfolio_unda.jpg",
    additionalImages: [
      "/images/portfolio/portfolio_unda.jpg",
      "/images/portfolio/portfolio_unda.jpg",
      "/images/portfolio/portfolio_unda.jpg"
    ],
    technologies: ["Next.js", "D3.js", "TailwindCSS", "WebSocket"],
    category: "UI/UX Design",
    year: "2023"
  },
  {
    id: "kolan-online",
    title: "Kolan Online",
    shortDescription: "Real-time financial data visualization platform.",
    fullDescription: `An enterprise-grade financial dashboard that transforms complex data into 
    actionable insights. Features include real-time market data visualization, predictive analytics, 
    and customizable reporting tools. The interface is designed for maximum efficiency and clarity.`,
    mainImage: "/images/portfolio/portfolio_kolan.jpg",
    additionalImages: [
      "/images/portfolio/portfolio_kolan.jpg",
      "/images/portfolio/portfolio_kolan.jpg",
      "/images/portfolio/portfolio_kolan.jpg"
    ],
    technologies: ["Next.js", "D3.js", "TailwindCSS", "WebSocket"],
    category: "UI/UX Design",
    year: "2023"
  },
  {
    id: "fidanoglu",
    title: "Fidanoğlu Elektrik Website",
    shortDescription: "A beautiful and functional design showcasing modern web development practices.",
    fullDescription: `A comprehensive e-commerce solution built with Next.js and Supabase. 
    This platform features real-time inventory management, AI-powered product recommendations, 
    and a seamless checkout experience. The design focuses on conversion optimization while 
    maintaining an elegant, user-friendly interface.`,
    mainImage: "/images/portfolio/portfolio_fidan.jpg",
    additionalImages: [
      "/images/portfolio/portfolio_fidan.jpg",
      "/images/portfolio/portfolio_fidan.jpg",
      "/images/portfolio/portfolio_fidan.jpg"
    ],
    technologies: ["Next.js", "Supabase", "TailwindCSS", "Stripe"],
    category: "Web Development",
    link: "https://example.com",
    year: "2024"
  },
  {
    id: "napolion-insta",
    title: "Napolion Coffee Instagram Videos",
    shortDescription: "A modern social platform with real-time features.",
    fullDescription: `A next-generation social media application that redefines digital connections. 
    Built with real-time messaging, AI-powered content moderation, and innovative UI patterns. 
    The platform supports rich media sharing and interactive storytelling features.`,
    mainImage: "/images/portfolio/portfolio_insta.jpg",
    additionalImages: [
      "/images/portfolio/portfolio_insta.jpg",
      "/images/portfolio/portfolio_insta.jpg"
    ],
    technologies: ["React Native", "Firebase", "TailwindCSS", "WebRTC"],
    category: "Mobile Apps",
    link: "https://example.com",
    year: "2023"
  },
  {
    id: "phrasebook",
    title: "Phrasebook",
    shortDescription: "Real-time financial data visualization platform.",
    fullDescription: `An enterprise-grade financial dashboard that transforms complex data into 
    actionable insights. Features include real-time market data visualization, predictive analytics, 
    and customizable reporting tools. The interface is designed for maximum efficiency and clarity.`,
    mainImage: "/images/portfolio/portfolio_phrasebook.jpg",
    additionalImages: [
      "/images/portfolio/portfolio_phrasebook.jpg",
      "/images/portfolio/portfolio_phrasebook.jpg",
      "/images/portfolio/portfolio_phrasebook.jpg"
    ],
    technologies: ["Next.js", "D3.js", "TailwindCSS", "WebSocket"],
    category: "UI/UX Design",
    year: "2023"
  },
  {
    id: "napolion",
    title: "Napolion Coffee",
    shortDescription: "Real-time financial data visualization platform.",
    fullDescription: `An enterprise-grade financial dashboard that transforms complex data into 
    actionable insights. Features include real-time market data visualization, predictive analytics, 
    and customizable reporting tools. The interface is designed for maximum efficiency and clarity.`,
    mainImage: "/images/portfolio/portfolio_napoli.jpg",
    additionalImages: [
      "/images/portfolio/portfolio_napoli.jpg",
      "/images/portfolio/portfolio_napoli.jpg",
      "/images/portfolio/portfolio_napoli.jpg"
    ],
    technologies: ["Next.js", "D3.js", "TailwindCSS", "WebSocket"],
    category: "UI/UX Design",
    year: "2023"
  }
];