import { Flame, Award, Clock } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const features = [
  {
    icon: Flame,
    title: "Charcoal Grilled",
    description: "Authentic smoky flavor from traditional charcoal grilling techniques",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest, freshest ingredients make it to your plate",
  },
  {
    icon: Clock,
    title: "Late Night Cravings",
    description: "Open until 1 AM for those midnight BBQ desires",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src={restaurantInterior}
                alt="King's BBQ Chicken Restaurant"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-body uppercase tracking-widest text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              The Art of <span className="text-gradient-fire">Perfect BBQ</span>
            </h2>
            <p className="text-cream/70 text-lg mb-6 leading-relaxed">
              At King's BBQ Chicken, we believe in the timeless art of charcoal grilling. 
              Every piece of chicken is marinated with our secret blend of spices and grilled 
              over open flames to achieve that perfect smoky flavor and crispy golden skin.
            </p>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              Located in the heart of Dehiwala, we've been serving the community with 
              mouth-watering BBQ chicken that keeps our customers coming back for more. 
              From our signature full packages to quick quarter portions, every order is 
              prepared with passion and served with love.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-cream font-semibold mb-1">{feature.title}</h3>
                  <p className="text-cream/50 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
