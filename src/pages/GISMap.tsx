import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Map, MapPin, Layers } from "lucide-react";

const GISMap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Interactive GIS Map
          </h1>
          <p className="text-lg text-muted-foreground">
            Static preview with legend mock. Final module will display project pins, focus areas, and water sites.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          <Card className="p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Map Layers</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Planned layers: project locations, focus areas, springs, watersheds, and community partners. Legend and filters will mirror the data tables.
            </p>
          </Card>
          <Card className="p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Data Sources</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Intake will include lat/long, consent for map display, and data validity dates. Map tiles will be static during Phase-2 scaffold.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="p-6 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Status</h3>
              <p className="text-sm text-muted-foreground">
                GIS scaffold in place. Awaiting geospatial data and design direction for interactive tiles.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GISMap;
