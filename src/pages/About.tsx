import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, FileText, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About CROASIS Research Group
            </h1>
            <p className="text-lg text-muted-foreground">
              A people-centric, community-driven research organization working at the intersection of biodiversity conservation, sustainable development, and climate resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">CROASIS Research Group (CRG)</strong> is based in Meghalaya, India, one of the world's most biodiverse yet climate-vulnerable regions. We are researchers, community organizers, and changemakers committed to building ecological resilience through participatory, locally-led action.
              </p>
              <p>
                Since our founding, we have worked alongside rural communities to restore degraded landscapes, strengthen traditional knowledge systems, develop sustainable livelihoods, and build capacity for climate adaptation. Our approach is grounded in agroecology, community empowerment, and evidence-based research.
              </p>
              <p>
                We believe that sustainable development must be rooted in local realities, respect indigenous wisdom, and center the voices of those most affected by environmental change. Our work is not just about conservation—it's about justice, dignity, and shared futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Mission</h3>
              <p className="text-muted-foreground">
                To empower communities in Meghalaya through participatory research, sustainable livelihood development, and ecological restoration that honors traditional knowledge and builds climate resilience.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Vision</h3>
              <p className="text-muted-foreground">
                A Meghalaya where communities thrive in harmony with nature, where traditional wisdom guides sustainable development, and where climate justice is realized for all.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Values</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Community-centered approaches</li>
                <li>• Evidence-based research</li>
                <li>• Respect for traditional knowledge</li>
                <li>• Ecological integrity</li>
                <li>• Transparency & accountability</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal & Registration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Legal Registration</h2>
            </div>
            <Card className="p-8">
              <p className="text-muted-foreground mb-6">
                CROASIS Research Group operates as a registered non-profit research organization committed to transparency and accountability in all our operations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="font-semibold text-foreground block mb-1">Registration Type:</span>
                  <span className="text-muted-foreground">Society / Trust (To be updated)</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block mb-1">Registration Number:</span>
                  <span className="text-muted-foreground">XXX/XXXX/XXXX</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block mb-1">Tax Status:</span>
                  <span className="text-muted-foreground">12A & 80G Certified (If applicable)</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block mb-1">FCRA:</span>
                  <span className="text-muted-foreground">Status to be confirmed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  For verification of our legal status and compliance documents, please contact us directly.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Where We Work</h2>
            </div>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Head Office</h3>
                  <p className="text-muted-foreground">
                    Shillong, Meghalaya<br />
                    India - 793XXX<br />
                    <br />
                    Email: info@croasis.org<br />
                    Phone: +91 XXX XXX XXXX
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Working Areas</h3>
                  <p className="text-muted-foreground">
                    Our projects span across East Khasi Hills, West Khasi Hills, Ri-Bhoi, and Jaintia Hills districts of Meghalaya, with a primary focus on rural and peri-urban communities facing climate and ecological challenges.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
