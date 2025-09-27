import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectDetail from "@/components/ProjectDetail";
import Contact from "@/components/Contact";
import { Project } from "@/types";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsProjectDetailOpen(true);
  };

  const handleCloseProjectDetail = () => {
    setIsProjectDetailOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="projects">
          <ProjectsSection onProjectClick={handleProjectClick} />
        </section>
        
        <Contact />
      </main>

      <ProjectDetail
        project={selectedProject}
        isOpen={isProjectDetailOpen}
        onClose={handleCloseProjectDetail}
      />

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Chen. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
