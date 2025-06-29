
import { Users, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityStats = () => {
  const stats = [
    {
      number: "0+",
      label: "Premium Deals",
      sublabel: "Verified Daily",
      color: "text-blue-600",
      icon: Star,
    },
    {
      number: "50+",
      label: "Elite Partners",
      sublabel: "Top Calgary Retailers",
      color: "text-green-600",
      icon: Award,
    },
    {
      number: "1000+",
      label: "Satisfied Members",
      sublabel: "Saving Daily",
      color: "text-purple-600",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Join Calgary's Elite{" "}
            <span className="text-gradient">Deal Community</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover-lift premium-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${
                stat.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' :
                stat.color === 'text-green-600' ? 'from-green-100 to-green-200' :
                'from-purple-100 to-purple-200'
              } mb-6`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className={`text-5xl font-bold mb-3 ${stat.color}`}>
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-500 font-medium">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold hover-lift premium-glow"
          >
            <Users className="mr-2 h-5 w-5" />
            Join Elite Community - Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
