
import { TrendingUp, Clock, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumPreview = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Limited Time Badge */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/30 border border-orange-500/40 backdrop-blur-xl px-8 py-4 text-base font-bold text-orange-200 shadow-2xl shadow-orange-500/20 animate-pulse">
              <Clock className="h-5 w-5 text-orange-400" />
              <span>Limited Time Exclusive Offers</span>
              <Zap className="h-5 w-5 text-orange-400" />
            </div>
          </div>

          {/* Asymmetric Layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-7xl font-black leading-tight">
                  Exclusive
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Featured Deals
                  </span>
                </h2>
                
                <p className="text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
                  Handpicked premium offers from Calgary's most 
                  <span className="text-white font-semibold"> sought-after brands</span>
                </p>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-4xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm text-gray-400 font-medium">Elite Partners</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform">1000+</div>
                  <div className="text-sm text-gray-400 font-medium">Daily Savings</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                  <div className="text-sm text-gray-400 font-medium">Live Updates</div>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Card */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl"></div>
                
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500 group">
                  {/* Enhanced Icon */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl w-full h-full flex items-center justify-center shadow-2xl shadow-orange-500/40 group-hover:scale-110 transition-transform">
                      <Target className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-orange-400 transition-colors">Premium Access</h3>
                  
                  <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                    Exclusive offers from Calgary's top retailers, curated just for you
                  </p>

                  {/* Enhanced CTA */}
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <span>Unlock Premium Deals</span>
                    <TrendingUp className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPreview;
