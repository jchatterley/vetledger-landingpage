import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductHighlight } from "@/components/ProductHighlight";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onCTAClick={scrollToContact} />
      <Hero onCTAClick={scrollToContact} />
      <About />
      <ProductHighlight onCTAClick={scrollToContact} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
