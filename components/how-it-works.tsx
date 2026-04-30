import { ArrowRight, CheckCircle2, CloudLightning, Code2, LineChart } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Integrate",
    description: "Add a REST API call or SDK to your application.",
    icon: Code2
  },
  {
    title: "Send",
    description: "Trigger channel-aware notifications with templates and payloads.",
    icon: CloudLightning
  },
  {
    title: "Deliver",
    description: "Workers route, retry, and fail over across providers.",
    icon: CheckCircle2
  },
  {
    title: "Track",
    description: "Watch delivery states, webhook callbacks, logs, and metrics.",
    icon: LineChart
  }
];

export function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From API call to tracked delivery in four clean steps."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="relative h-full">
                  {index < steps.length - 1 ? (
                    <ArrowRight className="absolute -right-5 top-10 hidden size-5 text-primary/50 lg:block" />
                  ) : null}
                  <div className="glass-panel h-full rounded-2xl p-6">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-primary to-fuchsia-600 font-display text-lg font-bold shadow-glow">
                        {index + 1}
                      </span>
                      <span className="grid size-12 place-items-center rounded-2xl bg-white/[0.05] text-primary-soft ring-1 ring-white/10">
                        <Icon className="size-5" />
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/58">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
