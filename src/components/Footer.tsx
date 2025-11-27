import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO_URL } from "@/lib/media";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="CROASIS Research Group logo"
                className="w-10 h-10 rounded-md object-contain border border-primary/20 bg-white"
              />
              <div>
                <span className="font-bold text-foreground">CROASIS</span>
                <span className="block text-xs text-muted-foreground">Research Group</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Community-driven research for biodiversity conservation, sustainable livelihoods, and climate resilience in Meghalaya.
            </p>
            <Button size="sm" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Work</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/focus-areas" className="text-muted-foreground hover:text-primary transition-colors">Focus Areas</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/publications" className="text-muted-foreground hover:text-primary transition-colors">Publications</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources & Contact</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li><Link to="/data-downloads" className="text-muted-foreground hover:text-primary transition-colors">Data & Downloads</Link></li>
              <li><Link to="/volunteer-portal" className="text-muted-foreground hover:text-primary transition-colors">Volunteer Portal</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Shillong, Meghalaya, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@croasis.org" className="hover:text-primary transition-colors">info@croasis.org</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex gap-3 pt-1">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CROASIS Research Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
