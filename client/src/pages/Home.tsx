import { About } from "@/components/sections/About";
import { Publications } from "@/components/sections/Publications";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
      <Publications />
      <Experience />
      <Contact />
    </div>
  );
}
