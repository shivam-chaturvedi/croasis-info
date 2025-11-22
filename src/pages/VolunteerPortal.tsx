import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ClipboardList, Sparkles } from "lucide-react";

const VolunteerPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Phase 2 · Coming Soon</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Volunteer Portal
          </h1>
          <p className="text-lg text-muted-foreground">
            Registration placeholder with consent, role selection, and confirmation emails for field volunteers and researchers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Roles</h3>
            </div>
            <p className="text-muted-foreground">
              Field documentation, GIS support, research assistance, and community facilitation. Final form will capture availability, skills, and location.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Process</h3>
            </div>
            <p className="text-muted-foreground">
              Intake form → confirmation email → onboarding checklist. Consent, safety briefings, and data privacy notes will be included.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm text-muted-foreground mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            Coming soon
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Volunteer intake will be added after approval of this blueprint and data protection review.
          </p>
          <Button asChild>
            <a href="mailto:info@croasis.org?subject=Volunteer%20interest%20-%20CRG">Share volunteer interest</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VolunteerPortal;
