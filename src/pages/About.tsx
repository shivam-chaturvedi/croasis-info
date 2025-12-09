import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { mediaUrl } from "@/lib/media";

const heroStill = mediaUrl("02_image.jpg");

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Us</h1>
          </div>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div className="rounded-[32px] overflow-hidden border border-border shadow-2xl bg-black">
              <div className="relative">
                <img src={heroStill} alt="CROASIS field story" className="w-full h-full object-contain" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm">
                  Video credits · CROASIS Research Group
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-base text-muted-foreground">
                <strong className="text-foreground">CROASIS Research Group</strong> co-creates regenerative futures with communities across Meghalaya. We blend academic rigor with traditional knowledge to restore ecosystems, strengthen livelihoods, and document climate solutions that scale.
              </p>
              <p className="text-base text-muted-foreground">
                Working directly with villages, youth, and institutions, we design repeatable programs that share evidence, celebrate local leadership, and drive resilient economic pathways. Our impact lives in the stories of families nurturing new food systems and youth leading heritage agronomy.
              </p>
              <p className="text-base text-muted-foreground">
                From agroecological practice to participatory climate research, our interdisciplinary teams map field data, host collaborative trainings, and publish insights so partners across India benefit from community-led innovation. Each partnership is anchored in trust, long-term documentation, and adaptive learning so we can respond to ecological feedback as it happens.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-primary font-semibold text-lg"
              >
                Read More
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
