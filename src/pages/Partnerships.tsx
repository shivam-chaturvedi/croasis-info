import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, ShieldCheck, FileBadge2, ArrowUpRight } from "lucide-react";

const Partnerships = () => {
  const partners = [
    { name: "Community Forest Councils", note: "Customary land governance and restoration co-leads" },
    { name: "Local SHGs & Cooperatives", note: "Women-led enterprises and seed systems" },
    { name: "Research Collaborators", note: "Field methods, biodiversity assessments, and peer review" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Partnerships</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Collaborative, Transparent, Impact-Driven
          </h1>
          <p className="text-lg text-muted-foreground">
            Aligned with NGO standards (EDF, CI, Agroecology Fund) and grounded in Meghalaya’s community context.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <Card key={partner.name} className="p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Handshake className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{partner.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{partner.note}</p>
              <Button variant="ghost" size="sm" className="justify-start">
                View contribution lines
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Compliance & Permissions</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Partner logos will include permission notes, consent flags, and usage rights (SVG or high-res PNG). Documentation for CSR, grants, and MoUs will be linked with validity dates.
            </p>
            <Button variant="outline" size="sm">Upload partner assets</Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileBadge2 className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Impact Reporting</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Each partner section will carry contribution lines, KPIs, and links to relevant projects. Impact snapshots will be refreshed each milestone with data sources listed.
            </p>
            <Button asChild>
              <a href="mailto:info@croasis.org?subject=Partnership%20details%20-%20CRG">Share partnership details</a>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
