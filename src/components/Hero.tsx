
import { Star, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 mb-8 animate-fade-in">
            <Star className="h-4 w-4 fill-current" />
            Calgary's #1 Premium Deal Aggregator
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-black mb-6 animate-fade-in">
            Discover{" "}
            <span className="text-gradient">Premium Deals</span>{" "}
            in Calgary
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Curated collection of exclusive discounts from Calgary's finest sportswear
            and lifestyle brands. Verified daily by our expert team.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold hover-lift premium-glow"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Explore Premium Deals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search brands, categories..."
                className="h-12 px-4 text-base bg-white border-2 border-gray-200 focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
              <span>Verified Deals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span>Premium Brands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
