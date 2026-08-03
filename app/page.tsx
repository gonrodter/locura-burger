import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Burgers from "@/components/Burgers";
import Carne from "@/components/Carne";
import Locura from "@/components/Locura";
import Resenas from "@/components/Resenas";
import Visitanos from "@/components/Visitanos";
import Footer from "@/components/Footer";
import ScrollReveals from "@/components/ScrollReveals";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <ScrollReveals />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Burgers />
        <Carne />
        <Locura />
        <Resenas />
        <Visitanos />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
