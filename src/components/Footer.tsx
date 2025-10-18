import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">MediCare+</h3>
            <p className="text-muted-foreground mb-4">
              Providing exceptional healthcare services with compassion and expertise since 1999.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Cardiology</li>
              <li className="text-muted-foreground">Neurology</li>
              <li className="text-muted-foreground">Pediatrics</li>
              <li className="text-muted-foreground">Emergency Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Health Street</li>
              <li>Medical District, MD 12345</li>
              <li className="text-primary font-semibold">+1 234 567 8900</li>
              <li>info@medicareplus.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} MediCare+. Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> for better health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
