import { Code2, Github, Server, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const badges = [
  { label: "Open Source", icon: Github },
  { label: "Self Hosted", icon: Server },
  { label: "Developer First", icon: Code2 },
  { label: "Reliable Infrastructure", icon: ShieldCheck }
];

export function FeatureStrip() {
  return (
    <section className="relative z-10 -mt-4 pb-20">
      <Reveal className="container-shell">
        <div className="glass-panel grid overflow-hidden rounded-3xl md:grid-cols-4">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-4 border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/14 text-primary-soft ring-1 ring-primary/25">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-base font-semibold text-white">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
