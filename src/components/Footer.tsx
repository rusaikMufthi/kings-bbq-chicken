import { Facebook, Music, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="King's BBQ Chicken" className="h-20 w-auto rounded-lg mb-4" />
            <p className="text-cream/60 max-w-md mb-6">
              Experience the authentic taste of premium BBQ chicken, grilled to perfection 
              with our signature blend of spices. Open late night for your cravings.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/14VYaiDrECJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-cream/60 hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@kings.bbq.chicken?_r=1&_t=ZS-93TA8NGdYls"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-cream/60 hover:bg-primary hover:text-white transition-colors"
              >
                <Music className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/94778664726"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-cream/60 hover:bg-gold hover:text-charcoal transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-cream font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Hours", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-cream font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/60">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>No. 134, Galle Road, Dehiwala-Mount Lavinia 10350</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+94778664726" className="hover:text-gold transition-colors">
                  +94 77 866 4726
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream/60">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Daily: 4PM - 1AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © {currentYear} King's BBQ Chicken. All rights reserved.
          </p>
          <p className="text-cream/40 text-sm">
            Premium BBQ Chicken in Dehiwala, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
