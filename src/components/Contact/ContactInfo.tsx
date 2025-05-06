
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div>
      <div className="bg-card border rounded-xl p-8 shadow-sm mb-6">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-muted p-3 rounded-full">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                your.email@example.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-muted p-3 rounded-full">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-muted p-3 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">New York City, NY, USA</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-card border rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Connect</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-muted/50 hover:bg-primary/10 p-3 rounded-lg transition-colors hover:text-primary"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-muted/50 hover:bg-primary/10 p-3 rounded-lg transition-colors hover:text-primary"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-muted/50 hover:bg-primary/10 p-3 rounded-lg transition-colors hover:text-primary"
          >
            <Twitter className="w-5 h-5" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};
