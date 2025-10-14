import { Button } from "@/components/ui/button";

const ResearchSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Dive deep into legal research</h2>
            <p className="text-lg text-muted-foreground">
              Access comprehensive case details including full summaries, references, and related legal precedents
            </p>
            <div className="flex gap-3">
              <Button variant="default">Start</Button>
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="w-32 h-32 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-muted-foreground/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
