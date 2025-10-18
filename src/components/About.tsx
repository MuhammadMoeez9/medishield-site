import { Award, Users, Building2, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Expert Doctors" },
    { icon: Building2, value: "15+", label: "Departments" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Availability" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">MediCare+</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For over 25 years, MediCare+ has been at the forefront of providing exceptional
              healthcare services to our community. Our commitment to excellence, combined with
              cutting-edge medical technology and a compassionate approach, makes us the
              healthcare provider of choice.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in treating every patient as family, ensuring personalized care that
              addresses not just symptoms, but overall well-being. Our multidisciplinary team
              works together to provide comprehensive healthcare solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-hero p-8 flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">Your Health Journey Starts Here</h3>
                <p className="text-lg opacity-90">
                  Trusted by thousands of patients for quality care and compassionate service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
