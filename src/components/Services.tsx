import { Heart, Brain, Baby, Activity, Pill, Stethoscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Expert heart care with advanced diagnostic and treatment facilities.",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for brain and nervous system disorders.",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Comprehensive healthcare for children from birth to adolescence.",
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response team.",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "In-house pharmacy with a wide range of medications.",
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Complete primary care and preventive health services.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services delivered by experienced medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
