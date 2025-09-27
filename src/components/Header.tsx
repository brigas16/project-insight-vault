import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { developerInfo } from "@/data/portfolio";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-xl cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            {developerInfo.name}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-accent/20 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-accent/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${developerInfo.email}`}
              className="p-2 rounded-md hover:bg-accent/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                <a 
                  href={developerInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-accent/20 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-accent/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${developerInfo.email}`}
                  className="p-2 rounded-md hover:bg-accent/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;