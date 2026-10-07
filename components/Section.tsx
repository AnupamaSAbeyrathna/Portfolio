import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, last, children }: {
  id: string; eyebrow: string; title: string; last?: boolean; children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-[72px] sm:py-24 ${last ? "" : "border-b border-line"}`}>
      <div className="wrap">
        <Reveal className="mb-12">
          <span className="mb-2.5 block font-mono text-[13px] text-muted">{eyebrow}</span>
          <h2 className="text-[clamp(1.8rem,4.5vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em]">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
