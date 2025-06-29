
import { TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          {/* Limited Time Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 border border-orange-500/30 px-4 py-2 text-sm font-medium text-orange-300">
              <Clock className="h-4 w-4" />
              Limited Time Offers
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Exclusive Featured Deals
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Handpicked premium offers from Calgary's most sought-after brands
            </p>
          </div>

          {/* Preview Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center hover-lift">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-8 premium-glow">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">Premium Deal Preview</h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-8 text-lg">
                Exclusive offers from top Calgary retailers
              </p>

              {/* CTA */}
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold hover-lift"
              >
                View All Premium Deals
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPreview;
