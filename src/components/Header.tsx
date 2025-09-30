import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import vetledgerLogo from "@/assets/vetledger-logo.png";

interface HeaderProps {
  onCTAClick: () => void;
}

export const Header = ({ onCTAClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img 
              src={vetledgerLogo} 
              alt="VetLedger logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground font-serif">
              VetLedger
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("product")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button variant="hero" size="sm" onClick={onCTAClick}>
              Join Beta
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
