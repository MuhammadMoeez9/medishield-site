import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      initials: "SJ",
      experience: "15+ years",
      description: "Specialized in interventional cardiology and heart disease prevention.",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      initials: "MC",
      experience: "12+ years",
      description: "Expert in treating neurological disorders and brain health.",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      initials: "ER",
      experience: "10+ years",
      description: "Dedicated to providing compassionate care for children.",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Emergency Medicine",
      initials: "JW",
      experience: "18+ years",
      description: "Leading emergency care with rapid diagnostic expertise.",
    },
  ];

  return (
    <section id="doctors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Doctors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                    {doctor.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  {doctor.specialty}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-semibold text-primary mb-2">{doctor.experience}</p>
                <CardDescription>{doctor.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
