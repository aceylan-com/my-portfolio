"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, ChevronDown, Send, X, ExternalLink, Code, Smartphone, Palette } from "lucide-react";
import { cn } from '@/lib/utils';
import { portfolioItems, PortfolioItem, portfolioCategories } from '@/lib/portfolio-data';
import { translations } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [language, setLanguage] = useState('en');
  const heroRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height, top, left } = heroRef.current.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 25;
        const y = (clientY - top - height / 2) / 25;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Wait for DOM elements to be available
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = '/your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'YourName-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPortfolioItems = portfolioItems.filter(item => 
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Web Development":
        return <Code className="w-4 h-4" />;
      case "Mobile Apps":
        return <Smartphone className="w-4 h-4" />;
      case "UI/UX Design":
        return <Palette className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="loading-spinner mb-4" />
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Ahmet Ceylan yazısını koyu sarı tonuna boyama */}
      <div className="text-xl font-semibold text-acnavy-500">Ahmet Ceylan</div>
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-8">
          {['about', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-acnavy-500 hover:text-acnavy-400 transition-colors relative group"
            >
              {t.nav[item as keyof typeof t.nav]}
              {/* Alt çizgi efekti için span elemanı */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-acnavy-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
            </button>
          ))}
        </div>
        <LanguageSwitcher
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 parallax"
          style={{
            backgroundImage: 'url(https://img.freepik.com/free-psd/instagram-post-interface-showcase-mockup-template_47987-27929.jpg?t=st=1743811843~exp=1743815443~hmac=be44ba73ae95655d30f752a1be6bfb36aa24366d2cf6dc464f823487a8159929&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 reveal-text">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-in">
            {t.hero.subtitle}
          </p>
          <Button
            onClick={() => scrollToSection('portfolio')}
            className="group animate-in floating"
            size="lg"
          >
            {t.hero.cta}
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1741720737125-c8bbbe763f9a?q=80&w=2787&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-acred-500">5+</div>
                <div className="text-sm text-muted-foreground">{t.about.stats.experience}</div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-acprimary-500">
                {t.about.title}
              </h2>
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed text-actext-500">
                  {t.about.description1}
                </p>
                <p className="text-lg leading-relaxed text-actext-500">
                  {t.about.description2}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-background/50 backdrop-blur">
                  <h3 className="text-2xl font-bold text-acprimary-500">50+</h3>
                  <p className="text-muted-foreground">{t.about.stats.projects}</p>
                </Card>
                <Card className="p-6 bg-background/50 backdrop-blur">
                  <h3 className="text-2xl font-bold text-acprimary-500">30+</h3>
                  <p className="text-muted-foreground">{t.about.stats.clients}</p>
                </Card>
                <Card className="p-6 bg-background/50 backdrop-blur">
                  <h3 className="text-2xl font-bold text-acprimary-500">3</h3>
                  <p className="text-muted-foreground">{t.about.stats.awards}</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-acorange-500">
            {t.portfolio.title}
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="group"
              >
                {getCategoryIcon(category)}
                <span className="ml-2">
                  {t.portfolio.categories[category.toLowerCase().replace(' ', '') as keyof typeof t.portfolio.categories]}
                </span>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolioItems.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPortfolio(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-acorange-500">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Dialog */}
      <Dialog open={!!selectedPortfolio} onOpenChange={() => setSelectedPortfolio(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] overflow-y-auto bg-card">
          {selectedPortfolio && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-acorange-500">{selectedPortfolio.title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPortfolio(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="portfolio-image">
                  <img
                    src={selectedPortfolio.mainImage}
                    alt={selectedPortfolio.title}
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">{selectedPortfolio.fullDescription}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPortfolio.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selectedPortfolio.link && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedPortfolio.link, '_blank')}
                      className="group"
                    >
                      Visit Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-acorange-500">More Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedPortfolio.additionalImages.map((image, index) => (
                    <div key={index} className="portfolio-image">
                      <img
                        src={image}
                        alt={`${selectedPortfolio.title} ${index + 1}`}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-acyellow-500">
            {t.contact.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card shadow-lg rounded-lg p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t.contact.form.send}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card shadow-lg rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-acyellow-500">{t.contact.info.title}</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">{t.contact.info.email}</span>
                    your.email@example.com
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">{t.contact.info.location}</span>
                    Your City, Country
                  </p>
                </div>
              </div>
              
              <div className="bg-card shadow-lg rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-acyellow-500">{t.contact.cv.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.contact.cv.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={handleDownloadCV}
                >
                  {t.contact.cv.download}
                  <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YourName. {t.footer.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['about', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t.nav[item as keyof typeof t.nav]}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}