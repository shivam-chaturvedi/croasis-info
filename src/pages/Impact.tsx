import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CounterCard from "@/components/CounterCard";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Impact = () => {
  const stories = [
    {
      quote: "The spring in our village was almost dry. Now, after two years of restoration work with CRG, we have water throughout the year. Our children don't have to walk kilometers anymore.",
      author: "Balarisha Nongkhlaw",
      role: "Village Water Committee Member, West Khasi Hills",
    },
    {
      quote: "Through the seed bank program, we've rediscovered traditional rice varieties our grandparents grew. These seeds are more resilient and taste better than what we bought from the market.",
      author: "Pyndaplang Syiemlieh",
      role: "Farmer & Seed Keeper, East Khasi Hills",
    },
    {
      quote: "Our women's group now earns a steady income from organic honey and bamboo handicrafts. We're not just earning money—we're preserving our forests and our culture.",
      author: "Daphisha Lyngdoh",
      role: "Self-Help Group Leader, Ri-Bhoi",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Impact
            </h1>
            <p className="text-lg text-muted-foreground">
              Measuring change through community voices, ecological indicators, and evidence-based results
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <CounterCard end={45} label="Communities Reached" suffix="+" />
            <CounterCard end={2500} label="People Trained" suffix="+" />
            <CounterCard end={850} label="Hectares Restored" suffix="+" />
            <CounterCard end={15} label="Active Projects" suffix="" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <CounterCard end={38000} label="Trees Planted" suffix="+" />
            <CounterCard end={25} label="Springs Rejuvenated" suffix="+" />
            <CounterCard end={200} label="Seed Varieties Conserved" suffix="+" />
            <CounterCard end={35} label="Women's Enterprises" suffix="+" />
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Areas of Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Ecological Restoration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 850+ hectares under active restoration</li>
                <li>• 18 springs showing increased flow</li>
                <li>• 15 sacred groves legally protected</li>
                <li>• 85% tree survival rate</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Livelihood Enhancement</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 45% average income increase for SHG members</li>
                <li>• 28 sustainable enterprises operational</li>
                <li>• Market linkages with 8+ buyers</li>
                <li>• 3 organic certifications in progress</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Knowledge & Capacity</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 2,500+ individuals trained</li>
                <li>• 80 community researchers active</li>
                <li>• 12 farmer field schools established</li>
                <li>• 200+ traditional varieties documented</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Community Voices
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="p-8 relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground mb-6 italic relative z-10">
                  "{story.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{story.author}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Impact Measurement Approach
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                We employ a <strong className="text-foreground">mixed-methods approach</strong> to assess impact, combining quantitative ecological indicators with qualitative community assessments and participatory monitoring.
              </p>
              <p>
                Our measurement framework includes:
              </p>
              <ul className="space-y-2">
                <li>Baseline and periodic ecological surveys (biodiversity, soil health, water quality)</li>
                <li>Socio-economic assessments using household surveys and focus group discussions</li>
                <li>Participatory rural appraisal and community-led monitoring</li>
                <li>Photo and video documentation of landscape changes</li>
                <li>Third-party verification for selected indicators</li>
              </ul>
              <p className="text-sm mt-6">
                <em>All data is validated through community verification and cross-checked with scientific methods. We are committed to transparent and evidence-based reporting.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
