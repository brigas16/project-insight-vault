export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface DeveloperInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  skills: string[];
  avatar: string;
}