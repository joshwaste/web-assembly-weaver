import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const CasePreviews = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">Efficient</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Instant case previews</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Quickly scan and assess legal documents with compact, informative preview cards
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">Details</Button>
            <Button variant="ghost" className="group">
              Learn <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="recent" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="landmark">Landmark</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent">
            <Card className="border-2">
              <div className="grid md:grid-cols-2">
                <CardHeader className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Relevant</p>
                    <CardTitle className="text-3xl mb-3">Comprehensive case summaries</CardTitle>
                    <CardDescription className="text-base">
                      Access critical information at a glance with concise, structured case overviews
                    </CardDescription>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline">View</Button>
                    <Button variant="ghost" className="group">
                      Explore <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-full bg-muted flex items-center justify-center min-h-[300px]">
                    <div className="w-24 h-24 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-muted-foreground/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="landmark">
            <Card className="border-2">
              <div className="p-8 text-center">
                <p className="text-muted-foreground">Landmark cases preview</p>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="trending">
            <Card className="border-2">
              <div className="p-8 text-center">
                <p className="text-muted-foreground">Trending cases preview</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CasePreviews;
