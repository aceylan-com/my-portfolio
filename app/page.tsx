"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, ChevronDown, Send, X, ExternalLink, Code, Smartphone, Palette, Target, PenTool, LaptopMinimal } from "lucide-react";
import { cn } from '@/lib/utils';
import { portfolioItems, PortfolioItem, portfolioCategories } from '@/lib/portfolio-data';
import { translations } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { LoadingAnimation } from '@/components/LoadingAnimation';

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
      console.error('Error sending message:', error);
    }
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
      case "UI/UX Design":
        return <LaptopMinimal className="w-4 h-4" />;
      case "App Development":
        return <Code className="w-4 h-4" />;
      case "Illustration":
        return <PenTool className="w-4 h-4" />;
      case "Branding":
          return <Target className="w-4 h-4" />;  
      default:
        return null;
    }
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Ahmet Ceylan yazısını koyu sarı tonuna boyama */}
            <div className="text-xl font-semibold text-acprimary-500">ahmet ceylan</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['about', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-sm font-medium text-acprimary-500 hover:text-acprimary-400 transition-colors relative group"
                  >
                    {t.nav[item as keyof typeof t.nav]}
                    {/* Alt çizgi efekti için span elemanı */}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-acprimary-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
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
            backgroundImage: 'url(/images/assets/banner.jpg)',
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
                  src="/images/assets/about_me.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-acprimary-500">5+</div>
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
              {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-background/50 backdrop-blur">
                  <h3 className="text-2xl font-bold text-acprimary-500">10+</h3>
                  <p className="text-muted-foreground">{t.about.stats.projects}</p>
                </Card>
                <Card className="p-6 bg-background/50 backdrop-blur">
                  <h3 className="text-2xl font-bold text-acprimary-500">30+</h3>
                  <p className="text-muted-foreground">{t.about.stats.clients}</p>
                </Card>
                <Card className="p-6 bg-background/50 backdrop-blur">
                  <h3 className="text-2xl font-bold text-acprimary-500">4 yıl</h3>
                  <p className="text-muted-foreground">{t.about.stats.awards}</p>
                </Card>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-acprimary-500">
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
                  <h3 className="text-xl font-semibold mb-2 text-acprimary-500">{project.title}</h3>
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
                <h2 className="text-3xl font-bold text-acprimary-500">{selectedPortfolio.title}</h2>
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
                <h3 className="text-2xl font-semibold text-acprimary-500">More Images</h3>
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

      {/* Social Section */}
      <section id="social" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.social.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LinkedIn Card */}
            <div className="bg-secondary/30 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#0077B5]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 mb-4">{t.social.linkedin.description}</p>
              <a
                href="https://linkedin.com/in/ahmet-ceylan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-acblue-500 hover:text-acblue-600"
              >
                {t.social.linkedin.visit}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="bg-secondary/30 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 mb-4">{t.social.github.description}</p>
              <a
                href="https://github.com/aceylan-com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-acblue-500 hover:text-acblue-600"
              >
                {t.social.github.visit}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-secondary/30 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#E4405F]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">{t.social.instagram.description}</p>
              <a
                href="https://instagram.com/ceylahmetr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-acblue-500 hover:text-acblue-600"
              >
                {t.social.instagram.visit}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-acprimary-500">
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
                <h3 className="text-xl font-semibold mb-4 text-acprimary-500">{t.contact.info.title}</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">{t.contact.info.email}</span>
                    ahmet@aceylan.com
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">{t.contact.info.location}</span>
                    Istanbul, Türkiye
                  </p>
                </div>
              </div>
              
              <div className="bg-card shadow-lg rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-acprimary-500">{t.contact.cv.title}</h3>
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
              © {new Date().getFullYear()} Ahmet Ceylan. {t.footer.rights}
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