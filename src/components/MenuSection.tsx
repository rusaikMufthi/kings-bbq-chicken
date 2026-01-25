import { Gift, Sparkles } from "lucide-react";
import fullChicken from "@/assets/full-chicken.jpg";
import halfChicken from "@/assets/half-chicken.jpg";
import quarterChicken from "@/assets/quarter-chicken.jpg";

const packages = [
  {
    name: "Full Package",
    price: "Rs. 1,999",
    image: fullChicken,
    items: ["Full Chicken", "5 Paratta", "Sauce", "Mayonnaise", "Salad"],
    bonus: "Free 400ml Pepsi",
    popular: true,
  },
  {
    name: "Half Chicken Package",
    price: "Rs. 1,100",
    image: halfChicken,
    items: ["Half Chicken", "3 Paratta", "Sauce", "Mayonnaise", "Salad"],
    bonus: null,
    popular: false,
  },
  {
    name: "Quarter Chicken Package",
    price: "Rs. 750",
    image: quarterChicken,
    items: ["Quarter Chicken", "2 Paratta", "Sauce", "Mayonnaise", "Salad"],
    bonus: null,
    popular: false,
  },
];

const chickenOnly = [
  { name: "Full Chicken", price: "Rs. 1,800" },
  { name: "Half Chicken", price: "Rs. 1,000" },
  { name: "Quarter Chicken", price: "Rs. 600" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-body uppercase tracking-widest text-sm mb-4 block">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Signature <span className="text-gradient-fire">BBQ Packages</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Choose from our specially crafted packages, each featuring our signature grilled chicken
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden bg-card border transition-all duration-500 hover:scale-105 hover:shadow-fire ${
                pkg.popular ? "border-primary shadow-glow" : "border-border/50"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-fire text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Best Seller
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-cream mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-gradient-fire mb-4">{pkg.price}</p>

                {/* Items List */}
                <ul className="space-y-2 mb-4">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="text-cream/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bonus */}
                {pkg.bonus && (
                  <div className="flex items-center gap-2 text-gold bg-gold/10 px-3 py-2 rounded-lg">
                    <Gift className="w-4 h-4" />
                    <span className="font-semibold text-sm">{pkg.bonus}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chicken Only Section */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-cream">
              Chicken Only <span className="text-gold">Prices</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {chickenOnly.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <h4 className="font-display text-cream font-semibold mb-2">{item.name}</h4>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
