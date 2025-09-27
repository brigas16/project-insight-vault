import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { developerInfo } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Data Science Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src={developerInfo.avatar} 
              alt={developerInfo.name}
              className="w-32 h-32 rounded-full mx-auto shadow-elegant border-4 border-primary/20"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {developerInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">
            {developerInfo.title}
          </h2>
          
          {/* Bio */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {developerInfo.bio}
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {developerInfo.skills.slice(0, 8).map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-sm px-3 py-1 hover:bg-accent/20 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="text-lg px-8">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href={developerInfo.github}
              className="p-3 rounded-full bg-card hover:bg-accent/20 shadow-card transition-all duration-300 hover:shadow-elegant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={developerInfo.linkedin}
              className="p-3 rounded-full bg-card hover:bg-accent/20 shadow-card transition-all duration-300 hover:shadow-elegant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${developerInfo.email}`}
              className="p-3 rounded-full bg-card hover:bg-accent/20 shadow-card transition-all duration-300 hover:shadow-elegant"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;