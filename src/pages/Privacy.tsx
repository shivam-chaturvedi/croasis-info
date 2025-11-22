import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Policy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Placeholder privacy statement. Final copy will reflect data handling for forms, analytics, and media consent.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-6 space-y-4 text-sm text-muted-foreground">
            <p>
              CROASIS Research Group is committed to protecting personal information collected through contact forms, event registrations, and program applications.
            </p>
            <p>
              We will outline data types collected, usage purposes, storage duration, consent processes, and removal requests once the final legal review is complete.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
