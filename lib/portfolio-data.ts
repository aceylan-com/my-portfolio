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
  "UI/UX Design",
  "App Development",
  "Illustration",
  "Branding"
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "unda",
    title: "Unda",
    shortDescription: "An online event application design developed at the Apple Developer Academy.",
    fullDescription: `An online event application design developed at the Apple Developer Academy.`,
    mainImage: "/images/portfolio/portfolio_unda.jpg",
    additionalImages: [
    ],
    technologies: ["Sketch", "Swift", "UIKit", "HIG"],
    category: "UI/UX Design",
    link: "https://apps.apple.com/tr/app/unda/id1514649315",
    year: "2020"
  },
  {
    id: "kolan-online",
    title: "Kolan Online",
    shortDescription: "A mobile application designed for Kolan Hospitals Group.",
    fullDescription: `A mobile application designed for Kolan Hospitals Group.`,
    mainImage: "/images/portfolio/portfolio_kolan.jpg",
    additionalImages: [
    ],
    technologies: ["Figma", "Illustrator", "Photoshop"],
    category: "UI/UX Design",
    year: "2022"
  },
  {
    id: "fidanoglu",
    title: "Fidanoğlu Elektrik Website",
    shortDescription: "Website development for an electrical contracting company.",
    fullDescription: `Website development for an electrical contracting company.`,
    mainImage: "/images/portfolio/portfolio_fidan.jpg",
    additionalImages: [
    ],
    technologies: ["Figma", "Wordpress", "Illustrator", "Photoshop"],
    category: "App Development",
    link: "https://fidanogluelektrik.com.tr",
    year: "2024"
  },
  {
    id: "enaday",
    title: "Enaday HR Platform",
    shortDescription: "A web app connecting candidates, consultants, and employers for efficient recruitment.",
    fullDescription: `A web app connecting candidates, consultants, and employers for efficient recruitment.`,
    mainImage: "/images/portfolio/portfolio_enaday.jpg",
    additionalImages: [
    ],
    technologies: ["React.js", "Next.js", "Figma", "Supabase" ],
    category: "App Development",
    link: "https://www.enaday.com",
    year: "2025"
  },
  {
    id: "napolion",
    title: "Napolion Coffee",
    shortDescription: "A coffee brand I founded, along with all its associated designs and branding.",
    fullDescription: `A coffee brand I founded, along with all its associated designs and branding.`,
    mainImage: "/images/portfolio/portfolio_napoli.jpg",
    additionalImages: [
    ],
    technologies: ["Illustrator", "Photoshop"],
    category: "Branding",
    link: "https://www.napolioncoffee.com",
    year: "2024"
  },
  {
    id: "tshirt",
    title: "Adidas Design Call Istanbul",
    shortDescription: "An Istanbul-themed t-shirt design competition organized by Adidas.",
    fullDescription: `An Istanbul-themed t-shirt design competition organized by Adidas.`,
    mainImage: "/images/portfolio/portfolio_tshirt.jpg",
    additionalImages: [
    ],
    technologies: ["Illustrator", "Photoshop"],
    category: "Illustration",
    link: "https://www.studiomercado.com/post/adidas-design-call-2023-tisort-tasarim-yarismasi",
    year: "2023"
  },
  {
    id: "napolion-insta",
    title: "Napolion Coffee Instagram Videos",
    shortDescription: "Social media management and video production for the Napolion Coffee.",
    fullDescription: `Social media management and video production for the Napolion Coffee.`,
    mainImage: "/images/portfolio/portfolio_insta.jpg",
    additionalImages: [
    ],
    technologies: ["After Effects", "Illustrator", "Photoshop", "Capcut"],
    category: "Branding",
    link: "https://www.instagram.com/napolioncoffee?igsh=MW1rbnhoajR2bDZ0bg==",
    year: "2024"
  },
  {
    id: "phrasebook",
    title: "Phrasebook",
    shortDescription: "Designing a watchOS application that provides foreign language phrases for travelers.",
    fullDescription: `Designing a watchOS application that provides foreign language phrases for travelers.`,
    mainImage: "/images/portfolio/portfolio_phrasebook.jpg",
    additionalImages: [
    ],
    technologies: ["Sketch", "Swift", "SwiftUI"],
    category: "UI/UX Design",
    year: "2020"
  }
];