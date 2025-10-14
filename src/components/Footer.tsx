import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold italic mb-4">Logo</div>
            <p className="text-sm text-muted-foreground">
              Stay updated with the latest legal research insights and platform improvements
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email" className="flex-1" />
              <Button variant="outline">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our privacy policy and consent to receive platform updates
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Search</a></li>
              <li><a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cases</a></li>
              <li><a href="#insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Insights</a></li>
              <li><a href="#tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tools</a></li>
              <li><a href="#resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="#facebook" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="#instagram" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#twitter" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-4 w-4" /> X
                </a>
              </li>
              <li>
                <a href="#linkedin" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#youtube" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Lawgorithm. All rights reserved</p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy policy</a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of service</a>
            <a href="#cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
