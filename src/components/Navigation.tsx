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
            <img src="/Screenshot 2025-10-14 215217.png" alt="Lawgorithm" className="h-8" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#search" className="text-sm hover:text-muted-foreground transition-colors">
                Search
              </a>
              <a href="#cases" className="text-sm hover:text-muted-foreground transition-colors">
                Cases
              </a>
              <a href="#insights" className="text-sm hover:text-muted-foreground transition-colors">
                Insights
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-muted-foreground transition-colors">
                  Resources <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Guides</DropdownMenuItem>
                  <DropdownMenuItem>API Reference</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
