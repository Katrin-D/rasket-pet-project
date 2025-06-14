import Container from "@/components/Container";
import Benefits from "@/components/home.page/sections/Benefits/Benefits";
import CTA from "@/components/home.page/sections/CTA";
import FAQ from "@/components/home.page/sections/FAQ/FAQ";
import Hero from "@/components/home.page/sections/Hero/Hero";
import Logos from "@/components/home.page/sections/Logos";
import Pricing from "@/components/home.page/sections/Pricing/Pricing";
import Stats from "@/components/home.page/sections/Stats";
import Testimonials from "@/components/home.page/sections/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container>
        <Logos />
        <Benefits />
        <Pricing />
      </Container>

      <Testimonials />

      <Container>
        <FAQ />
        <Stats />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
