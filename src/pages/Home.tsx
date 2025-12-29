import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mediaUrl } from "@/lib/media";

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

const programs = [
  {
    title: "Education",
    description:
      "From Early Childhood Education to secondary programs, we identify education-related gaps and co-design context-based solutions alongside schools, families, and governments.",
    highlights: [
      "Programs support school readiness, remedial learning, and skill development that stay grounded in local realities.",
      "Systemic partnerships help scale replication across Meghalaya while feeding into livelihood and research priorities.",
    ],
  },
  {
    title: "Agroecology",
    description:
      "Agroecology applies ecological principles to farming, working with nature while improving soil health, biodiversity, water conservation, and climate resilience without sacrificing productivity.",
    highlights: [
      "Innovative water-saving and planting solutions restore degraded landscapes while supporting healthy plant growth in challenging environments.",
      "Technologies like Waterboxx and Growboxx help trees and crops build strong roots with minimal water and regenerate self-sustaining ecosystems.",
    ],
  },
  {
    title: "Livelihood Models",
    description:
      "Sustainable livelihood models focus on economic stability and social well-being while preserving natural resources for the long term.",
    highlights: [
      "Nature-based solutions link ecosystem restoration with inclusive income opportunities and community empowerment.",
      "Regenerative land management, climate-smart agriculture, and restoration initiatives help people earn while enhancing environmental resilience.",
    ],
  },
  {
    title: "Climate & Environment",
    description:
      "Research and innovation focus on protecting ecosystems and promoting sustainable practices that reduce ecological impact.",
    highlights: [
      "Large-scale reforestation, land restoration, and biodiversity recovery are supported through nature-based solutions.",
      "By enabling trees and plants to grow in dry and degraded areas, Croasis contributes to climate mitigation, carbon sequestration, and resilient landscapes.",
    ],
  },
  {
    title: "Training & Skill Development",
    description:
      "Training empowers individuals and communities with practical knowledge to build sustainable livelihoods, bridging theory and real-world application.",
    highlights: [
      "Hands-on, field-based programs teach climate-smart farming, food processing, and entrepreneurship skills tailored to local needs.",
      "Workshops, demonstrations, and mentorship help farmers, youth, and entrepreneurs adopt sustainable practices and create lasting impact.",
    ],
  },
];

const impactStats = [
  {
    title: "Agroecology",
    metrics: [
      "300 hectares under sustainable plantation",
      "3,000 saplings planted to date",
      "97% survival rate of new saplings",
    ],
  },
  {
    title: "Livelihood Models",
    metrics: [
      "50 handholding engagements with communities",
      "350 farmers collaborating on regenerative land management",
    ],
  },
  {
    title: "Climate & Environment",
    metrics: [
      "5 ongoing restoration and watershed initiatives",
      "Significant water savings through Growboxx and Waterboxx deployments",
    ],
  },
  {
    title: "Training & Skill Development",
    metrics: [
      "120 participants including SHGs, youth, and women entrepreneurs",
      "Field-based mentorship that converts skills into resilient livelihoods",
    ],
  },
];

const resourceItems = [
  {
    label: "Blogs",
    description: "Field reflections, partner perspectives, and community lessons.",
  },
  {
    label: "Campaigns",
    description: "Updates on fundraising, awareness, and mobilization across Meghalaya.",
  },
  {
    label: "Publications & Reports",
    description: "Participatory climate research outputs, case studies, and insights.",
  },
  {
    label: "Policies",
    description: "Guidelines that guide partnerships, data stewardship, and community consent.",
  },
];

const privacyGuidelinesLink = {
  label: "Privacy Guidelines (PDF)",
  href: "/privacy-guidelines.pdf",
};

const subPageGroups = [
  {
    heading: "About Us",
    pages: ["Our Story", "Media & Publications", "Our Team", "Financials"],
  },
  {
    heading: "Programs",
    pages: [
      "Education",
      "Agroecology",
      "Livelihood Models",
      "Climate & Environment",
      "Training & Skill Development",
    ],
  },
  {
    heading: "Resources",
    pages: ["Blogs", "Campaigns", "Publications & Reports", "Policies"],
  },
  {
    heading: "Contact",
    pages: ["Address", "Email Id", "Phone Number", "Map Location", "Send Us a Message"],
  },
];

const contactHighlights = [
  { label: "Address", value: "Shillong, Meghalaya, India" },
  { label: "Email Id", value: "info@croasis.org" },
  { label: "Phone Number", value: "+91 99715 39559" },
  { label: "Map Location", value: "Map integration and directions on the contact page" },
];

const storyCards = [
  {
    name: "Children & Learning",
    detail:
      "Children gain strong educational foundations while youth and educators co-create learning environments rooted in heritage agronomy.",
    image: mediaUrl("09_image.jpg"),
  },
  {
    name: "Farmers & Agroecology",
    detail:
      "Farmers adopt sustainable agroecological practices, stewarding watersheds and seed banks while restoring degraded lands.",
    image: mediaUrl("10_image.jpg"),
  },
  {
    name: "Women & Youth Leadership",
    detail:
      "Women and youth build confidence, new skills, and independent livelihoods through Croasis' hands-on mentoring.",
    image: mediaUrl("11_image.jpg"),
  },
];

const aboutHighlights = [
  "Co-creating regenerative futures with village partners and institutional allies.",
  "Blending academic rigor with traditional knowledge to restore ecosystems and livelihoods.",
  "Anchoring each partnership in trust, transparent storytelling, and adaptive learning.",
];

const impactBackground = mediaUrl("07_image.jpg");

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="md:ml-60 relative z-10 h-full container mx-auto px-4 flex flex-col justify-between">
          <div className="py-8">
            <div className="flex items-center gap-3">
              {/* Decorative spacing */}
            </div>
          </div>
          <div className="max-w-3xl text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] font-semibold text-amber-300">
              CROASIS Research Group
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-amber-200 max-w-full">
              Co-creating regenerative futures with communities across Meghalaya.
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl">
              We blend academic rigor with traditional knowledge to restore ecosystems, strengthen livelihoods,
              and document climate solutions that scale. Working directly with villages, youth, and institutions,
              we design repeatable programs that share evidence, celebrate local leadership, and drive resilient
              economic pathways.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white shadow-lg" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
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

      <section id="about-us" className="py-16 md:py-20 bg-background/70">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <p className="text-base uppercase tracking-[0.5em] font-bold text-foreground">About Us</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Restoring ecosystems while celebrating local leadership.
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  CROASIS Research Group co-creates regenerative futures with communities across Meghalaya. We blend
                  academic rigor with traditional knowledge to restore ecosystems, strengthen livelihoods, and document
                  climate solutions that scale.
                </p>
                <p>
                  Working directly with villages, youth, and institutions, we design repeatable programs that share
                  evidence, celebrate local leadership, and drive resilient economic pathways. Our impact lives in the
                  stories of families nurturing new food systems and youth leading heritage agronomy.
                </p>
                <p>
                  From agroecological practice to participatory climate research, our interdisciplinary teams map field
                  data, host collaborative trainings, and publish insights so partners across India benefit from
                  community-led innovation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-white" asChild>
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

      <section id="programs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] font-semibold text-muted-foreground">Our Programs</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Program pillars that nurture people and nature.</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mt-2">
                Education, agroecology, livelihoods, climate, and skill-building come together to create regenerative systems
                that communities can lead and sustain.
              </p>
            </div>
            <Link
              to="/programs"
              className="text-amber-500 font-semibold inline-flex items-center gap-2"
            >
              View full programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <Card
                key={program.title}
                className="p-6 rounded-[30px] border border-border shadow-[0_18px_40px_rgba(15,23,42,0.1)] flex flex-col gap-4 bg-white"
              >
                <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {program.highlights.map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={impactBackground}
            alt="Community celebration"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-800/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="bg-white/95 border border-white/70 shadow-[0_30px_60px_rgba(15,23,42,0.3)] rounded-[40px] p-8 backdrop-blur">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.6em] text-muted-foreground mb-3">Impact Numbers</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Numbers that reflect community-led transformation.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {impactStats.map((stat) => (
                <div key={stat.title} className="rounded-3xl border border-border bg-white/80 p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-foreground">{stat.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {stat.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-2">
                        <span className="text-foreground">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background/70">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] font-semibold text-muted-foreground">Stories Of Change</p>
              <h2 className="text-4xl font-semibold text-foreground">
                Real-life reflections rooted in education, agroecology, and community-led action.
              </h2>
              <p className="text-base text-muted-foreground">
                Step into the heart of Croasis’ mission through journeys that reflect resilience, determination, and hope. These stories highlight children gaining strong educational foundations,
                farmers adopting regenerative practices, and women and youth creating independent livelihoods alongside communities.
              </p>
            </div>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-2">
                {storyCards.map((story) => (
                  <div
                    key={story.name}
                    className="w-full sm:w-[280px] rounded-3xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col"
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

      <section id="resources" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">Resources</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Knowledge that nurtures replication.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {resourceItems.map((resource) => (
              <Card
                key={resource.label}
                className="p-6 rounded-[30px] border border-border shadow-[0_18px_40px_rgba(15,23,42,0.08)] bg-white"
              >
                <h3 className="text-xl font-semibold text-foreground">{resource.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{resource.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-foreground">{privacyGuidelinesLink.label}</p>
              <p className="text-sm text-muted-foreground">
                Download the PDF to review how we steward data, consent, and community privacy within every engagement.
              </p>
            </div>
            <a
              href={privacyGuidelinesLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              View PDF
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">Sub Pages</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Inside Main Headings</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Explore every section and the sub pages that keep the narrative complete.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {subPageGroups.map((group) => (
              <Card
                key={group.heading}
                className="p-6 rounded-[30px] border border-border shadow-[0_18px_30px_rgba(15,23,42,0.1)] bg-white"
              >
                <h3 className="text-lg font-semibold text-foreground">{group.heading}:</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.pages.map((page) => (
                    <p key={page}>{page}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-summary" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div className="rounded-[40px] border border-border bg-white p-8 shadow-[0_25px_50px_rgba(15,23,42,0.18)]">
              <p className="text-sm uppercase tracking-[0.4em] font-semibold text-muted-foreground">Contact</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-4">
                Reach out to co-create regenerative pathways.
              </h2>
              <p className="text-base text-muted-foreground mt-4">
                Whether you are a community member, funder, or practitioner, our team is ready to collaborate on education,
                agroecology, climate, and livelihood initiatives.
              </p>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                {contactHighlights.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{item.label}</span>
                    <p className="text-base text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-full bg-primary text-white" size="lg" asChild>
                  <Link to="/contact">Send Us a Message</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10" asChild>
                  <Link to="/contact#donate">Donate Now</Link>
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden rounded-[40px] border border-border p-0">
              <div
                className="w-full h-full min-h-[320px] bg-cover bg-center"
                style={{ backgroundImage: `url(${communityTeam})` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                  <span className="text-xs uppercase tracking-[0.4em] text-white">Map Location</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-3">Data-Driven Modules</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-3">
              Scaffolds for dashboards, portals, and partner experiences—aligned with the Croasis blueprint, approvals, and impact targets.
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
