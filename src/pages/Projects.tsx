import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Community-Led Biodiversity Management",
      status: "Active",
      location: "East Khasi Hills",
      duration: "2023-2025",
      beneficiaries: "12 villages, 450 households",
      description: "A participatory initiative working with indigenous communities to restore degraded landscapes, protect sacred groves, and strengthen traditional knowledge systems for biodiversity conservation.",
      objectives: [
        "Restore 200 hectares of degraded forest land",
        "Establish 12 community seed banks",
        "Document traditional ecological knowledge",
        "Train 100 community biodiversity monitors",
      ],
      impact: [
        "150 hectares already under restoration",
        "8 seed banks operational with 200+ varieties",
        "60 community members trained as monitors",
        "15 sacred groves legally protected",
      ],
    },
    {
      title: "Spring & Stream Rejuvenation Program",
      status: "Active",
      location: "West Khasi Hills & Ri-Bhoi",
      duration: "2022-2024",
      beneficiaries: "18 villages, 3,000+ individuals",
      description: "Working with communities to restore degraded water sources through ecological approaches including reforestation, check dams, and traditional water harvesting revival.",
      objectives: [
        "Rejuvenate 25 springs and streams",
        "Plant 50,000 native trees in catchment areas",
        "Revive traditional water management practices",
        "Improve water security for downstream communities",
      ],
      impact: [
        "18 springs showing increased flow",
        "38,000 trees planted with 85% survival rate",
        "12 traditional water systems restored",
        "Water availability improved by 40% in dry season",
      ],
    },
    {
      title: "Women-Led Sustainable Enterprises",
      status: "Active",
      location: "Multiple districts",
      duration: "2023-2026",
      beneficiaries: "35 self-help groups, 420 women",
      description: "Supporting women's collectives to develop sustainable livelihood enterprises based on non-timber forest products, traditional handicrafts, and organic produce.",
      objectives: [
        "Establish 40 women-led green enterprises",
        "Develop market linkages for traditional products",
        "Provide business skills and financial literacy training",
        "Create sustainable income alternatives",
      ],
      impact: [
        "28 enterprises established and operational",
        "Average income increase of 45% for members",
        "3 organic certification processes underway",
        "Market linkages with 8 urban buyers established",
      ],
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
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Community-driven initiatives building ecological resilience and sustainable livelihoods across Meghalaya
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-shadow animate-fade-in">
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                        <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-primary" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-primary" />
                          {project.beneficiaries}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Key Objectives</h3>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Impact & Results</h3>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
