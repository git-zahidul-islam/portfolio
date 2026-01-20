import { Header } from "@/components/shared/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-[family-name:var(--font-inter)]">
      <Header />
      <div className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8">
        <div className="space-y-5">
          <Hero />
          <Experience />
          <Projects />
          <div id="about" className="scroll-mt-24"><About /></div>
          <Skills />
          <Education />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
