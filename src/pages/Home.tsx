import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CounterCard from "@/components/CounterCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sprout, Users, Droplets, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import agroecologyIcon from "@/assets/agroecology-icon.jpg";
import livelihoodIcon from "@/assets/livelihood-icon.jpg";
import climateIcon from "@/assets/climate-icon.jpg";
import trainingIcon from "@/assets/training-icon.jpg";
import communityTeam from "@/assets/community-team.jpg";

const Home = () => {
  const focusAreas = [
    {
      icon: Sprout,
      title: "Agroecology",
      description: "Promoting biodiversity-rich farming systems that regenerate ecosystems and enhance food security.",
      image: agroecologyIcon,
      link: "/focus-areas#agroecology",
    },
    {
      icon: Users,
      title: "Sustainable Livelihoods",
      description: "Building resilient community enterprises rooted in traditional knowledge and ecological principles.",
      image: livelihoodIcon,
      link: "/focus-areas#livelihoods",
    },
    {
      icon: Droplets,
      title: "Climate & Environment",
      description: "Restoring watersheds, protecting biodiversity, and strengthening climate adaptation capacity.",
      image: climateIcon,
      link: "/focus-areas#climate",
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "Empowering communities through participatory research, skill development, and knowledge exchange.",
      image: trainingIcon,
      link: "/focus-areas#training",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Lush green terraced hillsides in Meghalaya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rooted in Community, Growing Sustainability
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              CROASIS Research Group works alongside communities in Meghalaya to build resilient ecosystems, sustainable livelihoods, and climate-smart futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/projects">
                  Explore Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <CounterCard end={45} label="Communities Impacted" />
            <CounterCard end={2500} label="People Trained" />
            <CounterCard end={850} label="Hectares Restored" />
            <CounterCard end={15} label="Active Projects" />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work across four interconnected pillars to build ecological resilience and community wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-medium transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <Link
                      to={area.link}
                      className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Featured Initiative
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Building Climate Resilience Through Community Action
              </h2>
              <p className="text-muted-foreground mb-4">
                Our community-led biodiversity management initiative brings together local knowledge and scientific research to restore degraded landscapes, protect water sources, and strengthen climate adaptation.
              </p>
              <p className="text-muted-foreground mb-6">
                Working across 12 villages in East Khasi Hills, we've helped communities establish seed banks, restore traditional water harvesting systems, and develop sustainable livelihood alternatives.
              </p>
              <Button asChild>
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-medium animate-fade-in">
              <img
                src={communityTeam}
                alt="Community team working on World Environment Day initiative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Building Sustainable Futures
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a funding partner, researcher, or community organization, there are many ways to collaborate with CRG.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
