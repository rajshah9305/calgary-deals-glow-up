
import { Users, Star, Award, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityStats = () => {
  const stats = [
    {
      number: "0+",
      label: "Premium Deals",
      sublabel: "Verified Daily",
      color: "from-blue-500 to-blue-600",
      icon: Star,
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      number: "50+",
      label: "Elite Partners",
      sublabel: "Top Calgary Retailers",
      color: "from-green-500 to-green-600",
      icon: Award,
      bgColor: "from-green-100 to-green-200",
    },
    {
      number: "1000+",
      label: "Satisfied Members",
      sublabel: "Saving Daily",
      color: "from-purple-500 to-purple-600",
      icon: Users,
      bgColor: "from-purple-100 to-purple-200",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/3 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 px-8 py-4 text-base font-bold text-orange-800 mb-12 shadow-lg shadow-orange-500/10">
            <Target className="h-5 w-5 text-orange-600" />
            <span>Join The Elite Community</span>
            <Zap className="h-5 w-5 text-orange-600" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-black mb-8 leading-tight max-w-4xl mx-auto">
            Join Calgary's Elite{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent relative">
              Deal Community
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 blur-xl -z-10 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 leading-relaxed font-light max-w-2xl mx-auto">
            Connect with thousands of savvy shoppers and unlock exclusive premium deals
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative text-center p-12 bg-white rounded-3xl border border-gray-100 hover:border-orange-200 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:scale-105">
                {/* Enhanced Icon */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl`}></div>
                  <div className={`relative bg-gradient-to-br ${stat.color} rounded-3xl w-16 h-16 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Stats */}
                <div className={`text-6xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 font-medium text-lg">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-black mb-6">Ready to Start Saving?</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join our exclusive community and get instant access to premium deals from Calgary's top retailers
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-16 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
            >
              <Users className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Join Elite Community - Free
              <TrendingUp className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">✓ No credit card required</div>
              <div className="text-sm text-gray-500">✓ Instant access to deals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
