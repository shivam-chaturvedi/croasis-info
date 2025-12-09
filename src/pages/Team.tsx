import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Amit Talukdar",
    title: "Founder",
    image: "https://crg.org.in/wp-content/uploads/2025/12/Amit-Talukdar.png",
    bio: "Engineering graduate and entrepreneur with ventures across manufacturing, education, and rural development. Experienced in product design, strategy, and creating community-focused enterprises.",
  },
  {
    name: "Pyntngenlang Khongsit",
    title: "Co-Founder",
    image: "https://crg.org.in/wp-content/uploads/2025/12/Pyntngenlang-Khongsit.png",
    bio: "Postgraduate in Environmental Science with field experience in food processing, hydroponics, and environmental studies. Brings practical knowledge in community health, technical training, and documentation.",
  },
  {
    name: "Kerlang Khonglam",
    title: "Lead - Environmental Research",
    image: "https://crg.org.in/wp-content/uploads/2025/12/Kerlang-Khonglam.png",
    bio: "Environmental scientist skilled in plant macropropagation, field research, and conservation projects. Former Junior Research Fellow focused on threatened species and capacity building in the Himalayas.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Meet the Founders</h1>
            <p className="text-lg text-muted-foreground mt-4">
              Core leadership shaping CROASIS’ research, implementation, and community partnerships. Add more profiles by appending to the <code>teamMembers</code> array.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-[32px] overflow-hidden border border-border shadow-xl bg-white flex flex-col">
                <div className="h-72 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-foreground">{member.name}</h2>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
