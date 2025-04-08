import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  language: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSwitcher({
  language,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLanguageChange = (newLang: string) => {
    if (newLang === language || isAnimating) return
    
    setIsAnimating(true)
    onLanguageChange(newLang)
    
    // Reset animation state after completion
    setTimeout(() => {
      setIsAnimating(false)
    }, 800) // Match the animation duration
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-8 h-8 preserve-3d"
          disabled={isAnimating}
        >
          <motion.div
            className="relative w-full h-full preserve-3d"
            animate={{
              rotateY: isAnimating ? 180 : 0
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1.0], // Custom easing for smooth flip
              type: "tween"
            }}
          >
            <div className="absolute inset-0 backface-hidden flex items-center justify-center">
              <img
                src={`/${language}.svg`}
                alt={language === 'en' ? 'English' : 'Turkish'}
                className="w-5 h-5"
              />
            </div>
            <div 
              className="absolute inset-0 backface-hidden flex items-center justify-center"
              style={{ transform: 'rotateY(180deg)' }}
            >
              <img
                src={`/${language === 'en' ? 'tr' : 'en'}.svg`}
                alt={language === 'en' ? 'Turkish' : 'English'}
                className="w-5 h-5"
              />
            </div>
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en')}
          className={cn(
            'flex items-center gap-2',
            language === 'en' && 'font-medium'
          )}
          disabled={isAnimating}
        >
          <img src="/en.svg" alt="English" className="w-4 h-4" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('tr')}
          className={cn(
            'flex items-center gap-2',
            language === 'tr' && 'font-medium'
          )}
          disabled={isAnimating}
        >
          <img src="/tr.svg" alt="Turkish" className="w-4 h-4" />
          Türkçe
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 