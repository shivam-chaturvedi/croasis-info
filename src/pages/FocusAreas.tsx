import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mediaUrl } from "@/lib/media";

const heroImage = mediaUrl("05_image.jpg");

const FocusAreas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Focus Areas</h1>
          </div>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start relative">
            <div className="rounded-[35px] overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Education focus" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Education</h2>
              <p className="text-lg text-muted-foreground">
                From Early Childhood Education to elementary learning, CROASIS identifies gaps, co-designs contextual solutions,
                and collaborates with schools, families, and governments to deliver quality programs across Meghalaya.
              </p>
              <p className="text-lg text-muted-foreground">
                These education initiatives are complemented by agroecology, livelihood, and climate interventions that increase
                resilience across rural communities while building pathways for youth leadership and women’s empowerment.
              </p>
              <Link to="/programs" className="inline-flex items-center gap-2 text-amber-500 font-semibold text-lg">
                Read More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:absolute md:inset-x-0 md:-bottom-52 md:px-6 px-0 flex flex-wrap justify-center gap-3">
              {[
                { title: "Second Chance", image: mediaUrl("06_image.jpg") },
                { title: "Vocational Training", image: mediaUrl("04_image.jpg") },
                { title: "Education Report", image: mediaUrl("02_image.jpg") },
              ].map((card) => (
                <Card
                  key={card.title}
                  className="w-64 shadow-[0_20px_40px_rgba(15,23,42,0.25)] border border-border rounded-[24px] overflow-hidden bg-white"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">
                    {card.title}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FocusAreas;
