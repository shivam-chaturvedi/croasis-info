import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Waves, MapPinned } from "lucide-react";

const WaterHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Phase 2 · Coming Soon</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Water Rejuvenation Hub
          </h1>
          <p className="text-lg text-muted-foreground">
            Case previews, data placeholders, and methodology for spring and watershed rejuvenation across Meghalaya.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">What’s Coming</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Rejuvenation cases with before/after metrics</li>
              <li>• Flow monitoring charts and seasonal data</li>
              <li>• Community water governance notes</li>
              <li>• Downloadable templates for catchment plans</li>
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPinned className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Mapping</h3>
            </div>
            <p className="text-muted-foreground">
              Static map placeholder will be linked to the GIS module. Final version will include pins for rejuvenated springs, watersheds, and monitoring points.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="p-6 flex items-start gap-3">
            <Waves className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Status</h3>
              <p className="text-sm text-muted-foreground">
                Scaffold ready. Awaiting intake tables (metrics, photos, consent flags) and hydrological data to populate visuals.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterHub;
