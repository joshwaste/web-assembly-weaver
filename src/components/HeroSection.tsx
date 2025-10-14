import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-[hsl(var(--hero-bg))] text-white py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Legal research made fast and precise
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover comprehensive case law with an intelligent search engine. Navigate through millions of
            legal documents with unprecedented speed and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-100">
              Search
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
