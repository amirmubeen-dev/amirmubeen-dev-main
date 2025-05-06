import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import AnimatedTitle from "@/components/AnimatedTitle";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20 z-0" />
        
        {/* Animated particles/dots background */}
        <div className="absolute inset-0 z-0">
          {Array.from({
          length: 20
        }).map((_, i) => <div key={i} className="absolute rounded-full bg-primary/20" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          opacity: Math.random() * 0.5 + 0.3,
          animation: `pulse ${Math.random() * 4 + 2}s infinite alternate ${Math.random() * 2}s`
        }} />)}
        </div>
        
        <div className="max-w-5xl mx-auto z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
              Hi, I am <AnimatedTitle />
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Building scalable and user-friendly web applications with modern technologies.
              Focused on creating efficient solutions for complex problems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button asChild size="lg" className="rounded-full text-base gap-2">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base gap-2">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            
            <div className="flex justify-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-background/80 p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-background/80 p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-background/80 p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className="bg-background/80 p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a href="#featured-projects" className="animate-bounce bg-background/50 backdrop-blur-sm p-2 rounded-full">
            <ArrowRight className="w-5 h-5 transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="featured-projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => <div key={i} className="bg-card group rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i}/800/600`} alt={`Project ${i}`} className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex gap-2">
                      <Badge>React</Badge>
                      <Badge>TypeScript</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    A comprehensive web application built with React, Node.js, and MongoDB.
                    Features modern UI components and responsive design.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group">
                    <Link to={`/projects#project-${i}`}>
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>)}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">My Tech Stack</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"].map(tech => <div key={tech} className="flex flex-col items-center p-4 bg-card border rounded-lg hover:shadow-md transition-all">
                <div className="w-16 h-16 mb-4 bg-muted rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                  {tech.charAt(0)}
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </div>)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
