import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ServiceCards } from "@/components/landing/ServiceCards";
import { Process } from "@/components/landing/Process";
import { About } from "@/components/landing/About";
import { Footer } from "@/components/landing/Footer";
import { ContactDialog } from "@/components/landing/ContactDialog";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased">
      <Header onContact={openContact} />
      <main>
        <Hero onContact={openContact} />
        <ServiceCards />
        <Process />
        <About />
      </main>
      <Footer onContact={openContact} />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
