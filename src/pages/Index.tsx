import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Installation } from "../components/Installation";
import { Usage } from "../components/Usage";
import { Stack } from "../components/Stack";
import { Testimonials } from "../components/Testimonials";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Installation />
      <Usage />
      <Stack />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
