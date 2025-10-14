import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PetitionAutomation = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">Adaptive</p>
            <h2 className="text-4xl md:text-5xl font-bold">Case petition automation</h2>
            <p className="text-lg text-muted-foreground">
              To create petitions, gather essential information about the case details and court specifics. 
              Include pertinent facts, arguments, and a clear request. Tailor each petition to meet the case's 
              needs, using legal precedents and supporting evidence to strengthen your position.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Confirm relevance</h3>
                <p className="text-sm text-muted-foreground">
                  Mark helpful cases to enhance future search recommendations
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Report issues</h3>
                <p className="text-sm text-muted-foreground">
                  Help maintain data accuracy by flagging outdated or irrelevant content
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button variant="outline">Feedback</Button>
              <Button variant="ghost" className="group">
                Learn <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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

export default PetitionAutomation;
