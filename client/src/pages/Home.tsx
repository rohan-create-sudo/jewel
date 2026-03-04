import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { AboutCraftsmanship } from "@/components/AboutCraftsmanship";
import { ContactSection, Newsletter } from "@/components/Forms";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white w-full">
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <AboutCraftsmanship />
        <ContactSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
