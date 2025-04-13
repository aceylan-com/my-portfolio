import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFront, setShowFront] = useState(true);

  const handleLanguageChange = (newLang: string) => {
    if (newLang === currentLanguage) return;
    
    setIsAnimating(true);
    setShowFront(false);

    // Delay the language change to match the animation
    setTimeout(() => {
      onLanguageChange(newLang);
      setTimeout(() => {
        setShowFront(true);
        setIsAnimating(false);
      }, 150);
    }, 150);
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-6 h-6 rounded-full overflow-hidden p-0"
            disabled={isAnimating}
          >
            <div className="relative w-6 h-6">
              <AnimatePresence mode="wait">
                {showFront && (
                  <motion.div
                    key="front"
                    className="absolute inset-0"
                    initial={{ rotateY: -180 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 180 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0.0, 0.2, 1], // Custom easing for realistic flip
                    }}
                    style={{
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img
                      src={`/flags/${currentLanguage}.svg`}
                      alt={currentLanguage === 'en' ? 'English' : 'Türkçe'}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </motion.div>
                )}
                {!showFront && (
                  <motion.div
                    key="back"
                    className="absolute inset-0"
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: -180 }}
                    exit={{ rotateY: -360 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0.0, 0.2, 1], // Custom easing for realistic flip
                    }}
                    style={{
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img
                      src={`/flags/${currentLanguage === 'en' ? 'tr' : 'en'}.svg`}
                      alt={currentLanguage === 'en' ? 'Türkçe' : 'English'}
                      className="w-full h-full rounded-full object-cover"
                      style={{ transform: 'rotateY(180deg)' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[120px]">
          <DropdownMenuItem 
            onClick={() => handleLanguageChange('en')}
            className="flex items-center gap-2"
            disabled={isAnimating}
          >
            <img src="/flags/en.svg" alt="English" className="w-4 h-4 rounded-full" />
            English
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleLanguageChange('tr')}
            className="flex items-center gap-2"
            disabled={isAnimating}
          >
            <img src="/flags/tr.svg" alt="Türkçe" className="w-4 h-4 rounded-full" />
            Türkçe
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
} 