import { Phone, Utensils, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 pt-20">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img
            src={logo}
            alt="King's BBQ Chicken"
            className="w-64 md:w-80 mx-auto rounded-lg shadow-2xl shadow-primary/30"
          />
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-cream">Premium BBQ Chicken,</span>
          <br />
          <span className="text-gradient-fire">Grilled to Perfection</span>
        </h1>

        {/* Subheadline */}
        <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Experience the authentic taste of charcoal-grilled chicken with our signature BBQ flavors. 
          Open late for your midnight cravings.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#menu">
            <Button variant="hero" className="gap-3">
              <Utensils className="w-5 h-5" />
              View Menu
            </Button>
          </a>
          <a href="tel:+94778664726">
            <Button variant="heroOutline" className="gap-3">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-6 text-cream/60">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gold" />
            <span className="font-body">Open Daily: 4PM - 1AM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">•</span>
            <span className="font-body">Dine-in • Takeaway • On-site</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
