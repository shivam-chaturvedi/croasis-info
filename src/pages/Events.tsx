import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, MapPin, MailCheck } from "lucide-react";

const Events = () => {
  const upcoming = [
    { title: "Spring Rejuvenation Workshop", date: "TBD 2025", location: "East Khasi Hills", note: "Hands-on training with village water committees." },
    { title: "Agroecology Seed Exchange", date: "TBD 2025", location: "Ri-Bhoi", note: "Community seed fair + traditional variety showcase." },
  ];

  const past = [
    { title: "Women’s Climate Leadership Circle", date: "Nov 2024", location: "Shillong", note: "Peer learning and enterprise clinic." },
    { title: "Community Forest Governance Roundtable", date: "Sep 2024", location: "West Khasi Hills", note: "Customary law and restoration pathways." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Events</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Upcoming & Recent Activities
          </h1>
          <p className="text-lg text-muted-foreground">
            Registration, confirmations, and community invites will be handled with email templates and consent notes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Upcoming</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {upcoming.map((event) => (
                <Card key={event.title} className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarClock className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.note}</p>
                  <Button size="sm" variant="secondary">Notify me</Button>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Recent</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {past.map((event) => (
                <Card key={event.title} className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarClock className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.note}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase text-muted-foreground mb-2">
                <MailCheck className="w-4 h-4 text-primary" />
                Event intake & confirmations
              </div>
              <p className="text-muted-foreground">
                CRG will use a single events intake form, confirmation email, and post-event summary template to standardize communication.
              </p>
            </div>
            <Button asChild>
              <a href="mailto:info@croasis.org?subject=Event%20details%20-%20CRG">Send event details</a>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
