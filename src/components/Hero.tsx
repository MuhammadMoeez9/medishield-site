import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hospital-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern hospital facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Your Health is Our{" "}
            <span className="text-primary">Priority</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Experience world-class healthcare with our team of expert doctors and
            state-of-the-art facilities. Available 24/7 for your medical needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button size="lg" className="text-lg">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Our Services
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
            <Card className="p-4 gradient-card shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Emergency</p>
                  <p className="font-semibold">+1 234 567 8900</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 gradient-card shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Working Hours</p>
                  <p className="font-semibold">24/7 Available</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 gradient-card shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">123 Health St</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
