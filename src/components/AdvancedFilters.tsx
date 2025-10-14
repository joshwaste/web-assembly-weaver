import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const AdvancedFilters = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">Powerful</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced search filters</h2>
          <p className="text-lg text-muted-foreground">
            Refine your legal research with precision targeting
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <p className="text-sm text-muted-foreground mb-2">Year</p>
              <CardTitle className="text-2xl mb-2">Filter by court jurisdiction</CardTitle>
              <CardDescription>
                Select specific legal domains and tribunals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-muted-foreground/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
              </div>
              <Button variant="ghost" className="group">
                Explore <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <p className="text-sm text-muted-foreground mb-2">Type</p>
              <CardTitle className="text-2xl mb-2">Narrow case type search</CardTitle>
              <CardDescription>
                Identify relevant legal precedents quickly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-muted-foreground/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
              </div>
              <Button variant="ghost" className="group">
                Select <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <p className="text-sm text-muted-foreground mb-2">Range</p>
              <CardTitle className="text-2xl mb-2">Customize your temporal search parameters</CardTitle>
              <CardDescription>
                Find historical and recent case laws
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-muted-foreground/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
              </div>
              <Button variant="ghost" className="group">
                Filter <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFilters;
