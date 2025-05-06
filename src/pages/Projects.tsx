import { useState } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}
const Projects = () => {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "design">("all");
  const projects: Project[] = [{
    id: 1,
    title: "Resturant Website",
    description: "A full-stack resturant website built with React, Node.js, and MongoDB. Features include authentication, payment processing, and order management.",
    image: "/public/image.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "web"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true
  }, {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, user assignments, and real-time updates.",
    image: "./public/image-task.png",
    tags: ["React", "Firebase", "Tailwind CSS", "web"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true
  }, {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data based on location using OpenWeatherMap API.",
    image: "https://picsum.photos/seed/weather/800/600",
    tags: ["TypeScript", "React", "API Integration", "web"],
    github: "https://github.com",
    featured: false
  }, {
    id: 4,
    title: "Fitness Tracker",
    description: "A mobile application for tracking workouts, nutrition, and fitness progress. Includes charts and statistics.",
    image: "https://picsum.photos/seed/fitness/800/600",
    tags: ["React Native", "Firebase", "mobile"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false
  }, {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.",
    image: "./public/image1.png",
    tags: ["React", "Tailwind CSS", "design", "web"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true
  }, {
    id: 6,
    title: "Social Media Dashboard",
    description: "A dashboard for managing and analyzing social media accounts and engagement metrics.",
    image: "https://picsum.photos/seed/social/800/600",
    tags: ["React", "Chart.js", "REST API", "web"],
    github: "https://github.com",
    featured: false
  }];
  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.tags.includes(filter));
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="flex flex-wrap gap-2 mb-8 bg-transparent">
          <Badge className={`cursor-pointer text-sm py-2 px-4 hover:bg-gray-400 ${filter === "all" ? "bg-primary text-primary-foreground" : "bg-gray-300"}`} onClick={() => setFilter("all")}>
            All Projects
          </Badge>
          <Badge className={`cursor-pointer text-sm py-2 px-4 hover:bg-gray-400 ${filter === "web" ? "bg-primary text-primary-foreground" : "bg-gray-300"}`} onClick={() => setFilter("web")}>
            Web Development
          </Badge>
          <Badge className={`cursor-pointer text-sm py-2 px-4 hover:bg-gray-400 ${filter === "mobile" ? "bg-primary text-primary-foreground" : "bg-gray-300"}`} onClick={() => setFilter("mobile")}>
            Mobile Apps
          </Badge>
          <Badge className={`cursor-pointer text-sm py-2 px-4 hover:bg-gray-400 ${filter === "design" ? "bg-primary text-primary-foreground" : "bg-gray-300"}`} onClick={() => setFilter("design")}>
            UI/UX Design
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="relative overflow-hidden h-52">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex gap-2">
                    {project.github && <Button size="icon" variant="secondary" asChild className="rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>}
                    {project.demo && <Button size="icon" variant="secondary" asChild className="rounded-full">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>}
                  </div>
                </div>
                {project.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.filter(tag => !["web", "mobile", "design"].includes(tag)).map(tag => <Badge key={tag} variant="outline" className="bg-secondary/50">{tag}</Badge>)}
                </div>
                <Button variant="outline" asChild className="mt-auto group">
                  <a href={project.demo || project.github || "#"} target="_blank" rel="noopener noreferrer">
                    View Details 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </div>;
};
export default Projects;