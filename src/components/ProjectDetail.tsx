import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, ArrowLeft } from "lucide-react";
import { Project } from "@/types";

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="p-2"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{project.category}</Badge>
              {project.featured && (
                <Badge className="bg-accent text-accent-foreground">Featured</Badge>
              )}
            </div>
          </div>
          
          <DialogTitle className="text-3xl font-bold mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Image */}
          <div className="aspect-video bg-gradient-subtle rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(project.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features (sample) */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                Advanced machine learning algorithms with high accuracy
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                Interactive data visualizations and dashboards
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                Scalable architecture for production deployment
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                Comprehensive testing and validation pipeline
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="flex-1"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </Button>
            {project.demoUrl && (
              <Button 
                variant="accent" 
                size="lg" 
                asChild
                className="flex-1"
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;