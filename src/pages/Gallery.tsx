import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const images = [
  { src: "/images/01_image.jpg", caption: "Terraced landscapes in Meghalaya", credit: "CRG field team" },
  { src: "/images/02_image.jpg", caption: "Agroecology training plot", credit: "CRG field team" },
  { src: "/images/03_image.jpg", caption: "Women-led livelihood group", credit: "CRG field team" },
  { src: "/images/04_image.jpg", caption: "Watershed restoration site", credit: "CRG field team" },
  { src: "/images/05_image.jpg", caption: "Capacity building workshop", credit: "CRG field team" },
  { src: "/images/06_image.jpg", caption: "Community leadership meeting", credit: "CRG field team" },
  { src: "/images/07_image.jpg", caption: "Field monitoring", credit: "CRG field team" },
  { src: "/images/08_image.jpg", caption: "Landscape detail", credit: "CRG field team" },
];

const videos = [
  { src: "/videos/01_video.mp4", caption: "Watershed restoration fieldwork", credit: "CRG field team" },
  { src: "/videos/02_video.mp4", caption: "Agroecology training session", credit: "CRG field team" },
  { src: "/videos/03_video.mp4", caption: "Community meeting highlights", credit: "CRG field team" },
  { src: "/videos/04_video.mp4", caption: "Spring rejuvenation activity", credit: "CRG field team" },
  { src: "/videos/05_video.mp4", caption: "Livelihood enterprise demo", credit: "CRG field team" },
  { src: "/videos/06_video.mp4", caption: "Field monitoring clip", credit: "CRG field team" },
  { src: "/videos/07_video.mp4", caption: "Training recap reel", credit: "CRG field team" },
  { src: "/videos/08_video.mp4", caption: "Community celebration", credit: "CRG field team" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Field Stories in Images
          </h1>
          <p className="text-lg text-muted-foreground">
            Local, consented photography from Meghalaya communities. Captions and credits to be confirmed per the Master Image List.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <Card key={image.src} className="overflow-hidden">
              <img src={image.src} alt={image.caption} className="w-full h-56 object-cover" />
              <div className="p-4 space-y-1">
                <p className="text-sm font-semibold text-foreground">{image.caption}</p>
                <p className="text-xs text-muted-foreground">Credit: {image.credit}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Field Videos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Short clips from CRG projects and trainings. Final captions and consent tags will be updated per the Master Media List.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <Card key={video.src} className="overflow-hidden">
                <video src={video.src} controls className="w-full h-56 object-cover" />
                <div className="p-4 space-y-1">
                  <p className="text-sm font-semibold text-foreground">{video.caption}</p>
                  <p className="text-xs text-muted-foreground">Credit: {video.credit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
