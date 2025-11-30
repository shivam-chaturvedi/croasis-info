import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CounterCard from "@/components/CounterCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sprout, Users, Droplets, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { LOGO_URL, mediaUrl } from "@/lib/media";

const agroecologyIcon = mediaUrl("02_image.jpg");
const livelihoodIcon = mediaUrl("03_image.jpg");
const climateIcon = mediaUrl("04_image-rotated.jpg");
const trainingIcon = mediaUrl("01_image-rotated.jpg");
const communityTeam = mediaUrl("06_image.jpg");
const heroImage = mediaUrl("02_image.jpg");

const Home = () => {
  const [horizontalImages, setHorizontalImages] = useState<string[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const gallerySources = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => mediaUrl(`${String(i + 1).padStart(2, "0")}_image.jpg`)),
    []
  );

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

  const phaseTwoModules = [
    {
      title: "Carbon Dashboard",
      description: "Methodology outline and KPI framework for carbon and co-benefits.",
      link: "/carbon-dashboard",
    },
    {
      title: "Water Rejuvenation Hub",
      description: "Case previews, flow monitoring placeholders, and catchment templates.",
      link: "/water-rejuvenation",
    },
    {
      title: "Interactive GIS Map",
      description: "Static map mock with upcoming pins for projects, springs, and partners.",
      link: "/gis-map",
    },
    {
      title: "Data & Downloads",
      description: "Dataset placeholders with licensing, sources, and update cadence.",
      link: "/data-downloads",
    },
    {
      title: "Volunteer Portal",
      description: "Registration scaffold with consent and onboarding checklists.",
      link: "/volunteer-portal",
    },
  ];

  useEffect(() => {
    let isMounted = true;
    const loadImages = async () => {
      const results: string[] = [];
      await Promise.all(
        gallerySources.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => {
                if (img.naturalWidth > img.naturalHeight) {
                  results.push(src);
                }
                resolve();
              };
              img.onerror = resolve;
              img.src = src;
            })
        )
      );
      if (isMounted) {
        setHorizontalImages(results);
      }
    };
    loadImages();
    return () => {
      isMounted = false;
    };
  }, [gallerySources]);

  useEffect(() => {
    if (!horizontalImages.length) return;
    const interval = window.setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % horizontalImages.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [horizontalImages.length]);

  const goToSlide = (direction: "next" | "prev") => {
    if (!horizontalImages.length) return;
    setCarouselIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % horizontalImages.length;
      }
      return (prev - 1 + horizontalImages.length) % horizontalImages.length;
    });
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[640px] md:h-[780px] overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src={heroImage}
              alt="Community members restoring landscapes together"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_45%)]" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white animate-fade-in bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl border border-white/15">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/" aria-label="Go to Croasis home" className="group">
                <img
                  src={LOGO_URL}
                  alt="CROASIS Research Group logo"
                  className="w-20 h-20 md:w-52 md:h-32 rounded-xl object-contain shadow-lg border border-white/30 bg-white/80"
                />
                <span className="sr-only">CROASIS Research Group</span>
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
              <span className="block text-amber-100">Rooted in Community,</span>
              <span className="block text-emerald-100">Growing Sustainability</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-amber-50/90 drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)]">
              CROASIS Research Group works alongside communities in Meghalaya to build resilient ecosystems, sustainable livelihoods, and climate-smart futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-white text-foreground hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/projects">
                  Explore Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Image Carousel */}
      {horizontalImages.length > 0 && (
        <section className="py-12 bg-muted/60">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase font-semibold text-primary tracking-wide">Field moments</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Scenes from the Khasi Hills</h2>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => goToSlide("prev")}>
                  ‹
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => goToSlide("next")}>
                  ›
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-medium bg-white/80 backdrop-blur">
              <div
                className="flex transition-transform duration-[1400ms] ease-in-out w-full"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {horizontalImages.map((src, idx) => (
                  <div key={src} className="min-w-full flex-shrink-0 h-[320px] md:h-[440px]">
                    <img
                      src={src}
                      alt={`Field photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading={idx > 2 ? "lazy" : "eager"}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {horizontalImages.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      idx === carouselIndex ? "bg-primary" : "bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact Counters */}
      <section className="py-16 bg-white/70 backdrop-blur">
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

      {/* Phase 2 Modules */}
      <section className="py-16 bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Phase 2 · Coming Soon</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">Data-Driven Modules</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scaffolds for dashboards and portals aligned with CRG's blueprint—built for approvals, data intake, and performance targets.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {phaseTwoModules.map((module) => (
              <Card key={module.title} className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-foreground">{module.title}</h3>
                <p className="text-muted-foreground flex-1">{module.description}</p>
                <Link
                  to={module.link}
                  className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View scaffold
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
