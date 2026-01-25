import { Clock, MapPin, Utensils } from "lucide-react";

const HoursSection = () => {
  return (
    <section id="hours" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative rounded-3xl overflow-hidden bg-card/80 border border-border/50 backdrop-blur-sm p-8 md:p-12">
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-3xl" />

            <div className="text-center mb-10">
              <span className="text-gold font-body uppercase tracking-widest text-sm mb-4 block">
                Visit Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
                Opening <span className="text-gradient-fire">Hours</span>
              </h2>
            </div>

            {/* Hours Display */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-gold text-lg font-semibold mb-2 uppercase tracking-wider">
                  Open Daily
                </p>
                <p className="text-5xl md:text-6xl font-display font-bold text-cream mb-2">
                  4:00 PM — 1:00 AM
                </p>
                <p className="text-cream/60">Sunday through Saturday</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
              <div className="w-2 h-2 bg-gold rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-cream font-semibold mb-1">Location</h4>
                  <p className="text-cream/60 text-sm">
                    No. 134, Galle Road, Dehiwala-Mount Lavinia 10350, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-cream font-semibold mb-1">Services</h4>
                  <p className="text-cream/60 text-sm">
                    Dine-in • Takeaway • On-site Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
