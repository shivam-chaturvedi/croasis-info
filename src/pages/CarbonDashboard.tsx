import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Gauge, Info } from "lucide-react";

const CarbonDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Carbon Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Methodology outline, KPI framework, and data placeholders for carbon and co-benefit reporting.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Planned KPIs</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Tons CO₂e sequestered (annualized)</li>
              <li>• Hectares under restoration by biome</li>
              <li>• Survival rates and growth curves</li>
              <li>• Community co-benefits and SDG mapping</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Data & Methods</h3>
            <p className="text-muted-foreground">
              Placeholder for methodology PDF, assumptions, sampling design, and verification partners. Final dashboard will integrate with the Data & Downloads module.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="p-6 flex items-start gap-3">
            <Gauge className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Status</h3>
              <p className="text-sm text-muted-foreground">
                Dashboard scaffold in place. Awaiting data sources, GA4 tracking ID, and visualization specs.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarbonDashboard;
