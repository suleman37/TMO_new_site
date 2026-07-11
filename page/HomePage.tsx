import About from "@/Components/About/About";
import Clients from "@/Components/Clients/Clients";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Scripts from "@/Components/Scripts/Scripts";
import Services from "@/Components/Services/Services";
import SiteExtras from "@/Components/SiteExtras/SiteExtras";
import Stacks from "@/Components/Stacks/Stacks";
import Works from "@/Components/Works/Works";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <Stacks />
      <Clients />
      <Contact />
      <Footer />
      <SiteExtras />
      <Scripts />
    </>
  );
}
