import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-body uppercase tracking-widest text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Contact <span className="text-gradient-fire">Us</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Ready to taste the best BBQ chicken in town? Give us a call or visit our location
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream">Call Us</h3>
                  <p className="text-cream/60">Order now or make reservations</p>
                </div>
              </div>
              <a
                href="tel:+94778664726"
                className="text-3xl font-bold text-gradient-fire hover:opacity-80 transition-opacity"
              >
                +94 77 866 4726
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream">Location</h3>
                  <p className="text-cream/60">Find us on Galle Road</p>
                </div>
              </div>
              <p className="text-cream/80 text-lg">
                No. 134, Galle Road, Dehiwala-Mount Lavinia 10350, Sri Lanka
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+94778664726" className="flex-1">
                <Button variant="fire" size="lg" className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/94778664726"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="gold" size="lg" className="w-full gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.447897770453!2d79.8650!3d6.8500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGalle%20Road%2C%20Dehiwala!5e0!3m2!1sen!2slk!4v1640000000000!5m2!1sen!2slk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="King's BBQ Chicken Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
