import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MenuPreview from "@/components/sections/MenuPreview";
import Reservation from "@/components/sections/Reservation";
import Gallery from "@/components/sections/Gallery";
import Careers from "@/components/sections/Careers";
import Reviews from "@/components/sections/Reviews";
import ReservationModal from "@/components/ui/ReservationModal";

export default function Home() {
  return (
    <div className="site-shell min-h-screen text-[#260B08] selection:bg-[#BF3829] selection:text-[#FFF4DF] bg-[#FFF4DF]">
      {/* SECTION BLOCK 1: Warm Ivory (Navbar, Hero, About, Menu Preview, Reservations) */}
      <div style={{ backgroundColor: "var(--ivory-warm)" }}>
        <Navbar />
        <Hero />
        <About />
        <MenuPreview />
        <Reservation />
      </div>

      {/* SECTION BLOCK 2: Deep Burgundy Photo Gallery */}
      <div style={{ backgroundColor: "var(--burgundy-deep)" }}>
        <Gallery />
      </div>

      {/* SECTION BLOCK 3: Warm Ivory (Careers Opportunity & Customer Reviews) */}
      <div style={{ backgroundColor: "var(--ivory-warm)" }}>
        <Careers />
        <Reviews />
      </div>

      {/* SECTION BLOCK 4: Deep Burgundy Footer */}
      <div style={{ backgroundColor: "var(--burgundy-deep)" }}>
        <Footer />
      </div>

      {/* Interactive Reservation Modal */}
      <ReservationModal />
    </div>
  );
}
