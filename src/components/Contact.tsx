import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { developerInfo } from "@/data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaborating or discussing data science opportunities? 
            I'd love to hear from you.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Drop me a line anytime
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${developerInfo.email}`}>
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Let's connect professionally
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href={developerInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/70 transition-colors">
                  <Github className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Check out my code
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href={developerInfo.github} target="_blank" rel="noopener noreferrer">
                    Follow
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-subtle p-8 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're looking for a data scientist to join your team or 
              want to collaborate on an exciting project, I'm always open to new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${developerInfo.email}?subject=Let's Collaborate`}>
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;