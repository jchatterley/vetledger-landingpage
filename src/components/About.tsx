import { useEffect, useRef, useState } from "react";
import teamImage from "@/assets/team-image.png";

export const About = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why VetLedger?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe veterinary practices deserve better tools. In an industry where margins are tight and administrative burden is heavy, every minute and every dollar counts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VetLedger is built by technologists who understand the unique challenges of veterinary medicine. Our mission is to empower practices with AI-driven automation that reduces complexity, surfaces insights, and lets you focus on what matters most—caring for animals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From margin optimization to workflow automation, we're building the future of veterinary practice management—one intelligent feature at a time.
            </p>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="rounded-2xl overflow-hidden shadow-medium hover:shadow-hover transition-shadow duration-300">
              <img 
                src={teamImage} 
                alt="Veterinary team working together in modern clinic" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
