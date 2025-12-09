import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table2, FileSpreadsheet, Shield, Download } from "lucide-react";

const DataDownloads = () => {
  const placeholders = [
    { title: "Impact Metrics (CSV placeholder)", note: "Counters, beneficiaries, hectares restored" },
    { title: "Water Monitoring (CSV placeholder)", note: "Flow readings, locations, seasons" },
    { title: "Seed Bank Inventory (CSV placeholder)", note: "Variety, source, storage notes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Data & Downloads
          </h1>
          <p className="text-lg text-muted-foreground">
            Placeholder tables for future datasets with licenses, sources, and validity dates.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-4 md:grid-cols-3">
          {placeholders.map((item) => (
            <Card key={item.title} className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                <FileSpreadsheet className="w-4 h-4 text-primary" />
                Dataset
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.note}</p>
              <Button size="sm" variant="outline" disabled>
                <Download className="w-4 h-4 mr-2" />
                Download coming soon
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="p-6 flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Licensing & Consent</h3>
              <p className="text-sm text-muted-foreground">
                Each dataset will include license, source, update cadence, and consent flags. Alignment with GA4 tracking and performance targets will be maintained.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataDownloads;
