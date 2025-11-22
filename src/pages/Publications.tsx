import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Filter, FileDown, Search } from "lucide-react";

const Publications = () => {
  const items = [
    { title: "Agroecology in Meghalaya: Baseline Findings", status: "PDF placeholder", type: "Report", year: "2024" },
    { title: "Watershed Rejuvenation Methods", status: "Abstract + citation coming", type: "Brief", year: "2024" },
    { title: "Traditional Seed Systems & Climate Resilience", status: "Draft under review", type: "Paper", year: "2025" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Publications</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Research, Reports, and Open Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Scaffold for PDFs, abstracts, citations, and licenses aligned to CRG’s knowledge-sharing goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Search className="w-5 h-5 text-primary" />
              <span className="text-sm">Search & filter coming soon (by category, author, year)</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Filter className="w-5 h-5 text-primary" />
              <span className="text-sm">Filter presets: Reports · Briefs · Papers · Resources</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <Card key={item.title} className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-xs font-semibold uppercase text-muted-foreground">{item.type}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.status}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.year}</span>
                  <span>License: CC-BY (to confirm)</span>
                </div>
                <Button variant="outline" size="sm" className="mt-2" disabled>
                  <FileDown className="w-4 h-4 mr-2" />
                  Download coming soon
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
