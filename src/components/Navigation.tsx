import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <img src="/Gemini_Generated_Image_2lwe2z2lwe2z2lwe.png" alt="Lawgorithm" className="h-12" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#search" className="text-sm hover:text-muted-foreground transition-colors">
                Search
              </a>
              <a href="#cases" className="text-sm hover:text-muted-foreground transition-colors">
                Cases
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="default">
              Login
            </Button>
            <Button variant="default" size="default">
              Start
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
