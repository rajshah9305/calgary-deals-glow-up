
import { Star, ArrowRight, TrendingUp, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30 min-h-[90vh] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-12">
              {/* Enhanced Premium Badge */}
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 px-6 py-3 text-sm font-semibold text-orange-800 shadow-lg shadow-orange-500/10 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-orange-600" />
                  <span>Calgary's #1 Premium Deal Aggregator</span>
                </div>
                <Sparkles className="h-4 w-4 text-orange-600" />
              </div>

              {/* Dynamic Main Headline */}
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-black leading-[0.9] animate-fade-in">
                  Discover{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                      Premium
                    </span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-xl -z-10 animate-pulse"></div>
                  </span>{" "}
                  Deals
                </h1>
                
                <div className="flex items-center gap-3 text-2xl font-bold text-black animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <span>in Calgary</span>
                </div>
              </div>

              {/* Enhanced Subheadline */}
              <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Curated collection of <span className="font-semibold text-black">exclusive discounts</span> from Calgary's finest sportswear and lifestyle brands. 
                <span className="text-orange-600 font-medium"> Verified daily</span> by our expert team.
              </p>

              {/* Enhanced CTA Section */}
              <div className="flex flex-col gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group self-start"
                >
                  <TrendingUp className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Explore Premium Deals
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Column - Enhanced Search & Trust Indicators */}
            <div className="space-y-12">
              {/* Premium Search Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-gray-900/10 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-2xl font-bold text-black mb-6">Find Your Perfect Deal</h3>
                <div className="relative">
                  <Input
                    placeholder="Search brands, categories, products..."
                    className="h-16 px-6 text-lg bg-gray-50 border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 rounded-2xl transition-all duration-300"
                  />
                  <Button 
                    size="lg" 
                    className="absolute right-2 top-2 h-12 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-lg transition-all duration-300"
                  >
                    <TrendingUp className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Updated Daily</div>
                  <div className="text-xs text-gray-600">Fresh deals</div>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <div className="h-3 w-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Verified Deals</div>
                  <div className="text-xs text-gray-600">100% authentic</div>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Premium Brands</div>
                  <div className="text-xs text-gray-600">Top retailers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
