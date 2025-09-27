import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card className="group h-full bg-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
      <div onClick={onClick}>
        {/* Project Image */}
        <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {project.featured && (
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
        
        <CardContent className="p-6">
          {/* Category and Date */}
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(project.createdAt).toLocaleDateString()}
            </div>
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="text-xs px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </div>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className="flex-1"
          onClick={(e) => e.stopPropagation()}
        >
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            Code
          </a>
        </Button>
        {project.demoUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;