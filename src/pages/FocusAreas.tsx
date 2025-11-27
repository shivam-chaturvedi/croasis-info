import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Sprout, Users, Droplets, GraduationCap } from "lucide-react";
import { mediaUrl } from "@/lib/media";

const agroecologyIcon = mediaUrl("02_image.jpg");
const livelihoodIcon = mediaUrl("03_image.jpg");
const climateIcon = mediaUrl("04_image.jpg");
const trainingIcon = mediaUrl("05_image.jpg");

const FocusAreas = () => {
  const areas = [
    {
      id: "agroecology",
      icon: Sprout,
      title: "Agroecology & Biodiversity",
      image: agroecologyIcon,
      description: "Building regenerative farming systems that restore ecosystems, enhance food security, and honor traditional agricultural knowledge.",
      activities: [
        "Participatory varietal selection and seed banking",
        "Integrated pest management using local knowledge",
        "Soil health assessment and organic amendments",
        "Biodiversity monitoring in agricultural landscapes",
        "Traditional crop conservation and revival",
      ],
      beneficiaries: "Over 800 farming households across 25 villages",
    },
    {
      id: "livelihoods",
      icon: Users,
      title: "Sustainable Livelihoods",
      image: livelihoodIcon,
      description: "Developing community-owned enterprises rooted in ecological principles and indigenous knowledge systems.",
      activities: [
        "Non-timber forest product value chains",
        "Community-based ecotourism initiatives",
        "Traditional handicraft revival and market linkages",
        "Women's self-help groups for sustainable enterprises",
        "Youth entrepreneurship in green livelihoods",
      ],
      beneficiaries: "1,200+ community members, 45 self-help groups",
    },
    {
      id: "climate",
      icon: Droplets,
      title: "Climate & Environment",
      image: climateIcon,
      description: "Restoring watersheds, protecting biodiversity hotspots, and strengthening community resilience to climate impacts.",
      activities: [
        "Spring and stream rejuvenation programs",
        "Community forest management and restoration",
        "Climate vulnerability assessments",
        "Sacred grove conservation",
        "Climate-smart agriculture practices",
      ],
      beneficiaries: "850 hectares restored, 15 watersheds protected",
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Training & Capacity Building",
      image: trainingIcon,
      description: "Empowering communities through participatory research, skill development, and knowledge co-creation.",
      activities: [
        "Farmer field schools and learning exchanges",
        "Youth training in environmental monitoring",
        "Women's leadership in climate action",
        "Participatory action research workshops",
        "Documentation of traditional ecological knowledge",
      ],
      beneficiaries: "2,500+ individuals trained, 80+ community researchers",
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
              Our Focus Areas
            </h1>
            <p className="text-lg text-muted-foreground">
              Four interconnected pillars of community-led ecological restoration and sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {areas.map((area, index) => {
              const Icon = area.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={area.id}
                  id={area.id}
                  className="scroll-mt-20 animate-fade-in"
                >
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className={isEven ? 'order-1' : 'order-2'}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">{area.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">
                        {area.description}
                      </p>
                      <Card className="p-6 bg-muted/50 mb-6">
                        <h3 className="font-semibold text-foreground mb-3">Key Activities</h3>
                        <ul className="space-y-2">
                          {area.activities.map((activity, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                      <div className="flex items-start gap-2 text-sm">
                        <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-foreground block">Reach & Impact:</span>
                          <span className="text-muted-foreground">{area.beneficiaries}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`relative rounded-2xl overflow-hidden shadow-medium ${isEven ? 'order-2' : 'order-1'}`}>
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FocusAreas;
