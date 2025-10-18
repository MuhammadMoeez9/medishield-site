import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need to book an appointment? We're here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 gradient-card shadow-soft">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>
              <div>
                <Input type="tel" placeholder="Phone Number" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <p className="text-muted-foreground">Emergency: +1 234 567 8900</p>
                  <p className="text-muted-foreground">General: +1 234 567 8901</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-muted-foreground">info@medicareplus.com</p>
                  <p className="text-muted-foreground">appointments@medicareplus.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <p className="text-muted-foreground">123 Health Street</p>
                  <p className="text-muted-foreground">Medical District, MD 12345</p>
                  <p className="text-muted-foreground">United States</p>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-lg mb-2">Working Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <p className="text-sm text-primary font-medium mt-3">
                  Emergency services available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
