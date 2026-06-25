import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, kicker, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-5 py-14 sm:px-6 sm:py-16 md:py-20">
      <Reveal>
        <div className="mb-10">
          {kicker && (
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[--color-accent]">
              {kicker}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
