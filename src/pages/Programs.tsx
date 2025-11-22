import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, GraduationCap, Layers, Clock } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Agroecology Fellowship",
      status: "Accepting interest",
      timeline: "Next cohort: Q3 2025",
      description: "Immersive learning on seed systems, soil health, and community-led biodiversity monitoring.",
      cta: "Join waitlist",
    },
    {
      title: "Water Stewards Lab",
      status: "Pilot phase",
      timeline: "Cohort 1: 2025 (4 villages)",
      description: "Hands-on program for spring rejuvenation, catchment restoration, and community mapping.",
      cta: "View outline",
    },
    {
      title: "Climate & Livelihoods Accelerator",
      status: "Design in progress",
      timeline: "Cohort 0: TBD",
      description: "Supports women-led enterprises with training, market linkages, and climate risk screening.",
      cta: "Notify me",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Programs</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Capacity Building With Communities at the Center
          </h1>
          <p className="text-lg text-muted-foreground">
            Phase-1 program scaffolds with clear cohorts, registration flow, and transparent status for CRG partners and participants.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title} className="p-6 h-full flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Layers className="w-4 h-4" />
                <span>{program.status}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <span>{program.timeline}</span>
              </div>
              <p className="text-muted-foreground flex-1">{program.description}</p>
              <Button variant="secondary">{program.cta}</Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm text-muted-foreground mb-4">
              <Clock className="w-4 h-4 text-primary" />
              Program policies and confirmations
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Registration, Consent, and Follow-up</h2>
            <p className="text-muted-foreground mb-6">
              Each program will include a structured registration form, confirmation email text, and data/privacy note. Cohort calendars will be published with eligibility, selection criteria, and support provided by CRG.
            </p>
            <Button asChild>
              <a href="mailto:info@croasis.org?subject=Program%20intake%20-%20CRG">Submit program intake details</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
