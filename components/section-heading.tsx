import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-primary-soft">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
