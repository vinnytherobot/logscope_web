import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Installation } from "../components/Installation";
import { Usage } from "../components/Usage";
import { Stack } from "../components/Stack";
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
      <Footer />
    </div>
  );
};

export default Index;
