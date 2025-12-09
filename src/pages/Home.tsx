import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LOGO_URL, mediaUrl } from "@/lib/media";

const communityTeam = mediaUrl("06_image.jpg");

const heroSliderPhotos = [
  {
    src: mediaUrl("01_image.jpg"),
    alt: "Terraced landscapes in Meghalaya",
    caption: "Terraced landscapes helping retain soil, water, and hope.",
  },
  {
    src: mediaUrl("02_image.jpg"),
    alt: "Agroecology training plot",
    caption: "Agroecology training plots co-designed with village partners.",
  },
  {
    src: mediaUrl("03_image.jpg"),
    alt: "Women-led livelihood group",
    caption: "Women-led livelihood groups managing seed banks and nurseries.",
  },
  {
    src: mediaUrl("04_image.jpg"),
    alt: "Watershed restoration site",
    caption: "Water harvesting and restoration work across springs and ridgelines.",
  },
];

const impactBackground = mediaUrl("07_image.jpg");

const impactMetrics = [
  { title: "Activities in", value: 26, suffix: "", description: "states & union territories" },
  { title: "Children reached", value: 8, suffix: "M", description: "through direct programs and government partnerships" },
  { title: "Girls and women reached", value: 270, suffix: "K", description: "through mothers' groups and second chance programs" },
  { title: "Youth reached", value: 124, suffix: "K", description: "through vocational and non-vocational courses" },
];

const Home = () => {
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  useEffect(() => {
    if (!heroSliderPhotos.length) return;
    const timer = window.setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSliderPhotos.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [heroSliderPhotos.length]);

  const goToHeroSlide = (direction: "next" | "prev") => {
    setHeroSlideIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % heroSliderPhotos.length;
      }
      return (prev - 1 + heroSliderPhotos.length) % heroSliderPhotos.length;
    });
  };

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

  const storyCards = [
    {
      name: "Saloni",
      detail: "Once hesitant to speak in class, she now leads learning activities for younger children.",
      image: mediaUrl("09_image.jpg"),
    },
    {
      name: "Vineeta",
      detail: "Defying odds, she turned an electrical course into a path to independence.",
      image: mediaUrl("10_image.jpg"),
    },
    {
      name: "Ritanjali",
      detail: "A former school dropout, she passed Grade 10 while running her parlour and continuing studies.",
      image: mediaUrl("11_image.jpg"),
    },
  ];

  const aboutHighlights = [
    "Collaborative research across the Khasi Hills and surrounding communities.",
    "Participatory design of regenerative agriculture and watershed systems.",
    "Transparent impact reporting with partners and funders.",
  ];

  const teamMembers = [
    {
      name: "Amit Talukdar",
      title: "Founder",
      image: "https://crg.org.in/wp-content/uploads/2025/12/Amit-Talukdar.png",
      bio: "Engineering graduate and entrepreneur with ventures spanning manufacturing, education, and rural development. Focused on product design, strategy, and sustainable community enterprises.",
    },
  {
    name: "Pyntngenlang Khongsit",
    title: "Co-Founder",
    image: "https://crg.org.in/wp-content/uploads/2025/12/Pyntngenlang-Khongsit.png",
      bio: "Postgraduate in Environmental Science experienced in food processing, hydroponics, and environmental studies. Brings domain knowledge in community health, technical training, and research documentation.",
    },
  {
    name: "Kerlang Khonglam",
    title: "Lead - Environmental Research",
    image: "https://crg.org.in/wp-content/uploads/2025/12/Kerlang-Khonglam.png",
      bio: "Environmental scientist with expertise in plant macropropagation, field research, and conservation. Former Junior Research Fellow focused on threatened species and capacity-building projects in the Himalayas.",
    },
  ];

  const impactSectionRef = useRef<HTMLElement | null>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>(() =>
    impactMetrics.map(() => 0)
  );
  const [shouldAnimateImpact, setShouldAnimateImpact] = useState(false);

  useEffect(() => {
    const node = impactSectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldAnimateImpact(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAnimateImpact) return;
    const duration = 1400;
    impactMetrics.forEach((metric, index) => {
      let startTimestamp: number | null = null;
      const animate = (timestamp: number) => {
        if (startTimestamp === null) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * metric.value);
        setAnimatedValues((prev) => {
          const next = [...prev];
          next[index] = value;
          return next;
        });
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setAnimatedValues((prev) => {
            const next = [...prev];
            next[index] = metric.value;
            return next;
          });
        }
      };
      requestAnimationFrame(animate);
    });
  }, [shouldAnimateImpact]);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      {/* Hero slider */}
      <section className="relative h-[520px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${heroSlideIndex * 100}%)` }}
          >
            {heroSliderPhotos.map((slide) => (
              <div key={slide.alt} className="min-w-full h-full flex-shrink-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover grayscale-[0.05]"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>

        <div className="md:ml-60 relative z-10 h-full container mx-auto px-4 flex flex-col justify-between">
          <div className="py-8">
            <div className="flex items-center gap-3">
            {/* Empty Sec For Styling Only */}
            </div>
          </div>
          <div className="max-w-3xl text-white space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Community Vocational Training</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-amber-200 max-w-full">
              Vocational Training
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl">
              Equipping youth with employable skills, and unlocking access to entrepreneurship and job opportunities across Meghalaya.
            </p>
            <Link className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/50 pb-1" to="/programs">
              Read More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                aria-label="Previous slide"
                onClick={() => goToHeroSlide("prev")}
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next slide"
                onClick={() => goToHeroSlide("next")}
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center gap-2">
              {heroSliderPhotos.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setHeroSlideIndex(idx)}
                  className={`h-2.5 w-8 rounded-full transition ${
                    idx === heroSlideIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="py-12 md:py-16 bg-background/70">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">About Us</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Research, action, and stewardship in Meghalaya.
              </h2>
              <p className="text-base text-muted-foreground">
                CROASIS bridges academic rigor with community wisdom. We co-design regenerative farming systems,
                translate climate solutions, and document impact so every partner can track progress with clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-white shadow-lg" asChild>
                  <Link to="/about">Read Our Story</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary" asChild>
                  <Link to="/contact">Contact the Team</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-5">
              {aboutHighlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <span className="text-xl font-semibold text-primary">•</span>
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="relative py-16 overflow-hidden" ref={impactSectionRef}>
        <div className="absolute inset-0">
          <img
            src={impactBackground}
            alt="Children celebrating"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/60" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="bg-white/90 border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-[40px] p-8 backdrop-blur">
            <div className="grid lg:grid-cols-4 gap-6 text-center">
              {impactMetrics.map((metric, index) => (
                <div key={metric.title}>
                  <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground mb-3">{metric.title}</p>
                  <p className="text-4xl md:text-5xl font-bold text-primary">
                    {animatedValues[index]}
                    {metric.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Area */}
      <section className="py-16 bg-[url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-right-top">
        <div className="bg-white/90">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div className="rounded-[40px] overflow-hidden shadow-2xl bg-white">
                <img
                  src={mediaUrl("05_image.jpg")}
                  alt="Students learning outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Education</h2>
                <p className="text-lg text-muted-foreground">
                  From Early Childhood Education to secondary programs, we identify education-related gaps and co-design context-based solutions alongside schools, families, and governments. CROASIS programs support school readiness, remedial learning, and skill development that stay grounded in local realities.
                </p>
                <p className="text-lg text-muted-foreground">
                  Working directly with children, youth, and educators, we blend direct programs with systemic partnerships to scale replication across Meghalaya and beyond. These investments in education also feed into our livelihood and research priorities.
                </p>
                <Link
                  to="/focus-areas"
                  className="text-amber-500 font-semibold text-lg inline-flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Second Chance", image: mediaUrl("06_image.jpg") },
                { title: "Vocational Training", image: mediaUrl("04_image.jpg") },
                { title: "Annual Education Report", image: mediaUrl("02_image.jpg") },
              ].map((card) => (
                <Card
                  key={card.title}
                  className="shadow-[0_18px_40px_rgba(15,23,42,0.15)] border border-border rounded-[30px] overflow-hidden bg-white"
                >
                  <div className="h-56 overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="px-6 py-5 text-center text-lg font-medium text-foreground">
                    {card.title}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold text-foreground">Stories of Change</h2>
              <p className="text-base text-muted-foreground">
                Step into the heart of CROASIS' mission through real-life journeys that showcase resilience, determination,
                and hope. From children building learning foundations to women rewriting their futures, these stories highlight the transformative power of education, agroecology, and community-led action.
              </p>
            </div>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-2" >
                {storyCards.map((story) => (
                  <div
                    key={story.name}
                    className="w-full sm:w-[280px] rounded-3xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col"
                  >
                    <div className="h-48 overflow-hidden">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-[#ffba25] px-5 py-4 flex flex-col justify-between flex-1">
                      <p className="text-sm text-foreground">{story.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the founders and researchers driving CROASIS—each card below also acts as a template for adding collaborators in future sprints.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-[32px] bg-white border border-border shadow-lg overflow-hidden flex flex-col">
                <div className="h-52 bg-[#f8f8f8] flex items-center justify-center">
                  <img src={member.image} alt={member.name} className="max-h-full w-full object-contain" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground flex-1">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data-Driven Modules */}
      <section className="py-12 bg-white/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-3">Data-Driven Modules</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-3">
              Scaffolds for dashboards, portals, and partner experiences—aligned with the CROASIS blueprint, approvals,
              and impact targets.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {phaseTwoModules.map((module) => (
              <Card key={module.title} className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
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
