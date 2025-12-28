import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Education",
    description:
      "From Early Childhood Education to secondary programs, we identify education-related gaps and co-design context-based solutions alongside schools, families, and governments.",
    details: [
      "Programs support school readiness, remedial learning, and skill development that stay grounded in local realities.",
      "Working directly with children, youth, and educators, we blend direct programs with systemic partnerships to scale replication across Meghalaya and beyond.",
      "These investments in education feed into our livelihood and research priorities.",
    ],
  },
  {
    title: "Agroecology",
    description:
      "A sustainable approach that applies ecological principles to agricultural systems—improving soil health, biodiversity, water conservation, and climate resilience while maintaining productivity.",
    details: [
      "Innovative water-saving and planting solutions restore degraded landscapes while supporting healthy plant growth in challenging environments.",
      "Croasis technologies like the Waterboxx and Growboxx help trees and crops establish strong root systems with minimal water.",
      "The approach empowers farmers to produce food and restore nature in productive, resilient, and environmentally responsible ways.",
    ],
  },
  {
    title: "Livelihood Models",
    description:
      "Sustainable livelihood models focus on economic stability and social well-being while preserving natural resources long-term.",
    details: [
      "Nature-based solutions link ecosystem restoration with inclusive income opportunities and community empowerment.",
      "Regenerative land management, climate-smart agriculture, and community-driven restoration initiatives build resilient systems that benefit people and ecosystems.",
      "Croasis bridges restoration with market access so families earn while enhancing environmental resilience.",
    ],
  },
  {
    title: "Climate & Environment",
    description:
      "Research and innovation protect ecosystems and promote sustainable practices that reduce ecological impact.",
    details: [
      "Through Waterboxx and Growboxx, we support large-scale reforestation, land restoration, and biodiversity recovery while reducing water use.",
      "Enabling trees and plants to grow in dry and degraded areas contributes to climate mitigation, carbon sequestration, and resilient landscapes.",
      "Each initiative is anchored in long-term documentation and adaptive learning so we can respond to ecological feedback as it happens.",
    ],
  },
  {
    title: "Training & Skill Development",
    description:
      "Training empowers individuals and communities with practical knowledge to build sustainable livelihoods in farming, food processing, and entrepreneurship.",
    details: [
      "Hands-on field-based training programs are tailored to local needs with workshops, on-site demonstrations, and mentorship.",
      "Participants receive climate-smart agricultural skills, value-addition techniques, and business knowledge.",
      "These interventions equip farmers, youth, and entrepreneurs to adopt sustainable practices and create lasting impact.",
    ],
  },
];

const impactNumbers = [
  {
    title: "Agroecology",
    points: ["300 hectares under sustainable plantation", "3,000 saplings planted to date", "97% survival rate of saplings"],
  },
  {
    title: "Livelihood Models",
    points: ["50 communities receiving handholding support", "350 farmers actively working with Croasis"],
  },
  { title: "Climate & Environment", points: ["5 ongoing restoration and watershed initiatives"] },
  {
    title: "Training & Skill Development",
    points: ["120 participants including SHG members, youth, and women entrepreneurs"],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.5em] uppercase text-primary">Our Programs</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-6 mb-4">
            Regenerative systems designed with communities across Meghalaya.
          </h1>
          <p className="text-lg text-muted-foreground">
            Education, agroecology, livelihoods, climate, and training come together in repeatable program pathways that share evidence,
            celebrate local leadership, and sustain resilient economic and ecological outcomes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-2">
          {programs.map((program) => (
            <Card key={program.title} className="p-8 rounded-[30px] border border-border shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <h2 className="text-2xl font-semibold text-foreground">{program.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{program.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {program.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-background/70">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white/90 border border-border rounded-[40px] p-10 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <p className="text-sm uppercase tracking-[0.6em] text-muted-foreground mb-4">Impact Numbers</p>
            <h2 className="text-3xl font-semibold text-foreground mb-8">Numbers that reflect community-led transformation.</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {impactNumbers.map((impact) => (
                <div key={impact.title} className="rounded-[30px] border border-border p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">{impact.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {impact.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-foreground">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-muted-foreground">Stories Of Change</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-4">
            Step into the heart of Croasis’ mission through inspiring real-life stories.
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            These journeys showcase children gaining strong educational foundations, farmers adopting sustainable agroecological practices,
            and women and youth building confidence, skills, and independent livelihoods. Rooted in education, agroecology, and community-led action,
            each story highlights how Croasis works alongside communities to create lasting change, strengthen resilience, and foster a more sustainable
            and equitable future.
          </p>
          <Button className="mt-8 rounded-full bg-primary text-white px-8 py-3" asChild>
            <a href="/contact">Share your story</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
