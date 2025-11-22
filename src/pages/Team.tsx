import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Example Name",
      role: "Founder & Director",
      bio: "Environmental scientist with 15+ years experience in community-based conservation and participatory research in Northeast India.",
      email: "director@croasis.org",
    },
    {
      name: "Example Name",
      role: "Program Coordinator - Agroecology",
      bio: "Agronomist specializing in traditional farming systems, seed conservation, and farmer participatory research.",
      email: "agroecology@croasis.org",
    },
    {
      name: "Example Name",
      role: "Livelihoods & Enterprise Manager",
      bio: "Social entrepreneur with expertise in value chain development, women's empowerment, and sustainable enterprise building.",
      email: "livelihoods@croasis.org",
    },
    {
      name: "Example Name",
      role: "Climate & Water Resources Lead",
      bio: "Hydrologist and climate adaptation specialist working on watershed restoration and community resilience.",
      email: "climate@croasis.org",
    },
    {
      name: "Example Name",
      role: "Monitoring & Evaluation Officer",
      bio: "Data scientist focused on participatory monitoring, impact assessment, and evidence-based program design.",
      email: "me@croasis.org",
    },
    {
      name: "Example Name",
      role: "Community Engagement Coordinator",
      bio: "Community organizer with deep connections to indigenous knowledge systems and traditional governance structures.",
      email: "community@croasis.org",
    },
  ];

  const advisors = [
    {
      name: "Prof. Example Name",
      role: "Scientific Advisor",
      affiliation: "Department of Environmental Science, [University Name]",
    },
    {
      name: "Dr. Example Name",
      role: "Agroecology Advisor",
      affiliation: "Independent Researcher & Consultant",
    },
    {
      name: "Example Name",
      role: "Community Development Advisor",
      affiliation: "[NGO/Institution Name]",
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
              Our Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate researchers, organizers, and changemakers committed to community-led ecological restoration
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Core Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Advisory Board
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent mb-3 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-white">
                    {advisor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{advisor.name}</h3>
                <p className="text-sm font-medium text-secondary mb-2">{advisor.role}</p>
                <p className="text-xs text-muted-foreground">{advisor.affiliation}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for passionate individuals who share our commitment to community-led conservation and sustainable development. If you're interested in research positions, internships, or volunteering opportunities, please reach out.
            </p>
            <a
              href="mailto:info@croasis.org?subject=Career Inquiry"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <Mail className="w-5 h-5" />
              Contact us about opportunities
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
