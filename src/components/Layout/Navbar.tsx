import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Web Developer</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={cn("relative py-2 transition-colors", location.pathname === item.path ? "text-primary font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary" : "text-foreground/70 hover:text-foreground")}>
                {item.name}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden transform transition-transform duration-300 ease-in-out", isMenuOpen ? "translate-x-0" : "translate-x-full")} style={{
        top: "64px"
      }}>
          <div className="flex flex-col p-4 space-y-6 pt-4">
            {navItems.map(item => <Link key={item.name} to={item.path} className={cn("text-lg py-2 transition-colors", location.pathname === item.path ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground")} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}

            <div className="flex gap-6 pt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;