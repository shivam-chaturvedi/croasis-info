import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Policy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">Terms of Use</h1>
          <p className="text-lg text-muted-foreground">
            Placeholder terms covering site use, content ownership, and refund/donation policy alignment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-6 space-y-4 text-sm text-muted-foreground">
            <p>
              Final terms will include permitted use, attribution requirements, disclaimer, and dispute resolution. Donation/refund policy links will be added when confirmed.
            </p>
            <p>
              By using this site, visitors agree to the finalized terms once published. For questions, please contact info@croasis.org.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
