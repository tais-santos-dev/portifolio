import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />

        <Section id="about" title="About" kicker="Who I am">
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-[--color-muted]">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills & Tools" kicker="What I use">
          <Skills />
        </Section>

        <Section id="projects" title="Projects" kicker="Selected work">
          <Projects />
        </Section>

        <Section id="experience" title="Experience" kicker="Where I've worked">
          <Experience />
        </Section>

        <Section id="contact" title="Contact" kicker="Get in touch">
          <Contact />
        </Section>
      </main>

      <footer className="border-t border-[--color-border]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 text-center text-sm text-[--color-muted] sm:flex-row sm:px-6 sm:text-left">
          <p>
            © {2026} {profile.name}. Built with Next.js & Tailwind.
          </p>
          <a href="#top" className="transition-colors hover:text-[--color-text]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
