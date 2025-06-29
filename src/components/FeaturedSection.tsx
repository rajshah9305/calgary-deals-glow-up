
import { Heart, Clock, ArrowRight, Sparkles, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-orange-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 px-8 py-4 text-base font-bold text-orange-800 mb-12 shadow-lg shadow-orange-500/10">
            <Clock className="h-5 w-5 text-orange-600" />
            <span>Limited Time Offers</span>
            <Sparkles className="h-5 w-5 text-orange-600" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-black mb-8 leading-tight">
            Exclusive Featured{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent relative">
              Deals
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 blur-xl -z-10 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 leading-relaxed font-light">
            Handpicked premium offers from Calgary's most 
            <span className="font-semibold text-black"> sought-after brands</span>
          </p>
        </div>

        {/* Dynamic Featured Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Main Featured Card */}
          <div className="lg:col-span-1">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-3xl p-16 text-center hover:border-orange-200 transition-all duration-500 shadow-xl shadow-gray-900/5 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                {/* Enhanced Icon */}
                <div className="relative inline-flex items-center justify-center w-28 h-28 mb-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl"></div>
                  <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl w-20 h-20 flex items-center justify-center shadow-2xl shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-4xl font-black text-black mb-8">Curating Amazing Deals</h3>
                
                <p className="text-gray-700 mb-12 text-xl leading-relaxed font-light">
                  Our expert team is working around the clock to bring you the most 
                  <span className="font-semibold text-black">exclusive deals</span> from Calgary's premium retailers. 
                  <span className="text-orange-600 font-medium">Check back soon</span> for incredible savings!
                </p>

                {/* Enhanced CTA */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 rounded-2xl group"
                >
                  View All Premium Deals
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Info Cards */}
          <div className="space-y-8">
            {/* Coming Soon Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="h-8 w-8 text-orange-400" />
                  <h4 className="text-2xl font-bold">Coming Soon</h4>
                </div>
                <p className="text-gray-300 text-lg">
                  Exclusive partnerships with Calgary's top brands launching this month
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-3xl p-12 shadow-xl shadow-gray-900/5 border border-gray-100 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-orange-600" />
                <h4 className="text-2xl font-bold text-black">Premium Quality</h4>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Verified</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Updated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
