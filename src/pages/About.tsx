
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Layout, Server, Terminal, Figma, 
  Globe, Rocket, Briefcase, GraduationCap, Award
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Layout,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3", "JavaScript"]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps",
      icon: Terminal,
      technologies: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Kubernetes"]
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"]
    },
    {
      category: "Design",
      icon: Figma,
      technologies: ["Figma", "Adobe XD", "Sketch", "UI/UX", "Responsive Design", "Wireframing"]
    },
    {
      category: "Other",
      icon: Code,
      technologies: ["GraphQL", "REST APIs", "WebSockets", "Testing", "Agile", "Scrum"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          Passionate full-stack developer with expertise in building modern web applications
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                I'm a passionate Full-Stack Developer experience in creating efficient and 
                scalable web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, 
                I specialize in building responsive and user-friendly interfaces that provide exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout my career, I've worked with various technologies across the full stack spectrum. From crafting 
                pixel-perfect frontends with React and TypeScript to designing robust backend systems with Node.js and 
                various databases, I bring a holistic approach to every project.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about continuous learning and staying up-to-date with the latest industry trends and best practices. 
                Whether it's exploring new frameworks, improving performance, or enhancing security, I'm always looking for ways 
                to improve my skills and deliver better solutions.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl p-1">
              <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src="/Picsart_24-08-13_19-11-46-665.jpg" 
                  alt="Developer profile" 
                  className="w-full h-auto"
                />
                <div className="p-6 flex flex-col items-center">
                  <h2 className="text-xl font-semibold mb-1">Amir Mubeen</h2>
                  <p className="text-muted-foreground mb-4">Full-Stack Developer</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>Web Development</Badge>
                    <Badge>Mobile Apps</Badge>
                    <Badge>Artificial Intelligence</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm rounded-full p-3 border border-primary/20">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur-sm rounded-full p-3 border border-primary/20">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold mt-16 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill) => (
            <Card key={skill.category} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <div className="space-y-8 mb-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="bg-primary rounded-full p-2 z-10">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-0.5 bg-border flex-grow mt-2"></div>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Senior Full Stack Developer</h3>
                <Badge>2020 - Present</Badge>
              </div>
              <p className="text-muted-foreground mb-4">Tech Innovations Inc.</p>
              <p className="mb-4">
                Led development of multiple web applications, mentored junior developers,
                and implemented best practices for code quality and performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="bg-primary rounded-full p-2 z-10">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-0.5 bg-border flex-grow mt-2"></div>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <Badge>2018 - 2020</Badge>
              </div>
              <p className="text-muted-foreground mb-4">Digital Solutions Co.</p>
              <p className="mb-4">
                Developed and maintained various web applications using modern JavaScript
                frameworks and backend technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Vue.js</Badge>
                <Badge variant="outline">Express</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="bg-primary rounded-full p-2 z-10">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-0.5 bg-border flex-grow mt-2 opacity-0"></div>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <Badge>2016 - 2018</Badge>
              </div>
              <p className="text-muted-foreground mb-4">WebCraft Studio</p>
              <p className="mb-4">
                Designed and implemented user interfaces for various clients, focusing on
                responsive design and accessibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">HTML/CSS</Badge>
                <Badge variant="outline">jQuery</Badge>
                <Badge variant="outline">Bootstrap</Badge>
                <Badge variant="outline">WordPress</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <h2 className="text-2xl font-semibold mb-8">Education</h2>
        <div className="space-y-8">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="bg-primary rounded-full p-2 z-10">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-0.5 bg-border flex-grow mt-2"></div>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <Badge>2012 - 2016</Badge>
              </div>
              <p className="text-muted-foreground">University of Technology</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="bg-primary rounded-full p-2 z-10">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-0.5 bg-border flex-grow mt-2 opacity-0"></div>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Various Certifications</h3>
                <Badge>Ongoing</Badge>
              </div>
              <p className="text-muted-foreground mb-4">Professional Development</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">AWS Certified Developer</Badge>
                <Badge variant="outline">MongoDB Certified Developer</Badge>
                <Badge variant="outline">Google Cloud Professional</Badge>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
