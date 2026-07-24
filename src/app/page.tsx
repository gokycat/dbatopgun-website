import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { DataSentinel } from "@/components/DataSentinel";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Outcomes } from "@/components/Outcomes";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Outcomes />
        <Services />
        <DataSentinel />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
