
import { Heart, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 mb-6">
            <Clock className="h-4 w-4" />
            Limited Time Offers
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Exclusive Featured Deals
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked premium offers from Calgary's most sought-after brands
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-12 text-center hover-lift premium-glow">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-8">
              <Heart className="h-10 w-10 text-purple-600" />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-black mb-6">Curating Amazing Deals</h3>
            
            {/* Description */}
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Our team is working around the clock to bring you the most 
              exclusive deals from Calgary's premium retailers. Check back soon 
              for incredible savings!
            </p>

            {/* CTA */}
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all hover-lift"
            >
              View All Premium Deals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
