import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Kasun Perera",
    rating: 5,
    text: "Best BBQ chicken in Dehiwala! The full package is amazing value. Perfectly grilled and the sauce is incredible.",
    date: "2 weeks ago",
  },
  {
    name: "Amaya Silva",
    rating: 5,
    text: "We order from King's every weekend. The chicken is always fresh and juicy. Love the late-night availability!",
    date: "1 month ago",
  },
  {
    name: "Ravi Fernando",
    rating: 5,
    text: "Finally found authentic BBQ chicken! The flavors are rich and the portions are generous. Highly recommended!",
    date: "3 weeks ago",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-body mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-fire mx-auto rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-2xl p-8 relative group hover:border-primary/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-gradient-fire rounded-full flex items-center justify-center shadow-fire">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-cream/70 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display text-cream font-semibold">
                    {review.name}
                  </h4>
                  <span className="text-cream/50 text-sm">{review.date}</span>
                </div>
                <div className="w-12 h-12 bg-gradient-fire rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-8 py-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-cream font-display text-xl font-bold">5.0</span>
            <span className="text-cream/60">• Based on 100+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
