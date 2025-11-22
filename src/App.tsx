import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FocusAreas from "./pages/FocusAreas";
import Projects from "./pages/Projects";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import Publications from "./pages/Publications";
import Events from "./pages/Events";
import Partnerships from "./pages/Partnerships";
import Gallery from "./pages/Gallery";
import CarbonDashboard from "./pages/CarbonDashboard";
import WaterHub from "./pages/WaterHub";
import GISMap from "./pages/GISMap";
import DataDownloads from "./pages/DataDownloads";
import VolunteerPortal from "./pages/VolunteerPortal";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/carbon-dashboard" element={<CarbonDashboard />} />
          <Route path="/water-rejuvenation" element={<WaterHub />} />
          <Route path="/gis-map" element={<GISMap />} />
          <Route path="/data-downloads" element={<DataDownloads />} />
          <Route path="/volunteer-portal" element={<VolunteerPortal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
