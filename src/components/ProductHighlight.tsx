import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, BarChart3, Zap } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

interface ProductHighlightProps {
  onCTAClick: () => void;
}

export const ProductHighlight = ({ onCTAClick }: ProductHighlightProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Tracking",
      description: "Monitor margins across all services and inventory in real-time"
    },
    {
      icon: DollarSign,
      title: "Smart Optimization",
      description: "AI-powered recommendations to improve profitability"
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Clear analytics that drive better business decisions"
    },
    {
      icon: Zap,
      title: "Automated Alerts",
      description: "Get notified when margins need attention"
    }
  ];

  return (
    <section 
      id="product" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Automated Margin Optimization
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our first product helps you automatically track and optimize margins across services, inventory, and operations—giving you insights to run smarter, leaner, and more profitable practices.
          </p>
        </div>

        <div className={`mb-16 max-w-5xl mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden shadow-hover border border-border">
            <img 
              src={dashboardMockup} 
              alt="VetLedger dashboard showing margin optimization analytics and insights" 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button 
            variant="hero" 
            size="lg"
            onClick={onCTAClick}
          >
            Sign Up for Beta Access
          </Button>
        </div>
      </div>
    </section>
  );
};
