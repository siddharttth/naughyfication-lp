import { ArrowRight, BookOpen, Rocket } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container-shell">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[32px] p-8 sm:p-10 lg:p-14">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,62,191,0.27),transparent_32%),radial-gradient(circle_at_88%_50%,rgba(255,131,216,0.18),transparent_30%)]" />
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid size-24 place-items-center rounded-[28px] bg-primary/16 text-primary-soft shadow-glow ring-1 ring-primary/30">
                <Rocket className="size-11" />
              </div>
              <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
                <div>
                  <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Ready to supercharge your notifications?
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
                    Ship a notification layer with retries, DLQs, tracking, and webhooks before your users need to notice.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
                  <Button size="lg" asChild>
                    <a href="#docs">
                      Get Started
                      <ArrowRight className="size-5" />
                    </a>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <a href="#docs">
                      <BookOpen className="size-5" />
                      Read Docs
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
