"use client";

import { motion } from "framer-motion";
import { ArrowDown, Boxes, Cloud, Database, Server, Smartphone, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const nodes = [
  { label: "Client Apps", detail: "Web, mobile, backend jobs", icon: Smartphone },
  { label: "API Gateway", detail: "Auth, validation, idempotency", icon: Server },
  { label: "Redis Queue", detail: "Backpressure and delayed retries", icon: Database },
  { label: "Workers", detail: "Routing, retries, provider failover", icon: Workflow },
  { label: "Providers", detail: "Email, Slack, SMS, WhatsApp", icon: Cloud }
];

export function ArchitectureSection() {
  return (
    <section className="relative py-24">
      <div aria-hidden className="orb -left-24 top-1/3 size-[360px] bg-primary/12" />
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Architecture"
            title="A resilient pipeline that stays calm when traffic spikes."
            description="The system is designed around queues, workers, provider abstraction, and observable state transitions."
          />
        </Reveal>
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-8">
            <div aria-hidden className="surface-grid absolute inset-0 opacity-35" />
            <div className="relative z-10 grid gap-4 lg:grid-cols-5">
              {nodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="relative">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="h-full rounded-2xl border border-white/10 bg-black/30 p-5"
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary-soft ring-1 ring-primary/25">
                          <Icon className="size-5" />
                        </span>
                        <span className="font-mono text-xs text-white/36">0{index + 1}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">{node.label}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/56">{node.detail}</p>
                    </motion.div>
                    {index < nodes.length - 1 ? (
                      <motion.div
                        aria-hidden
                        className="absolute -bottom-4 left-1/2 z-20 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-primary/30 bg-background text-primary-soft lg:-right-6 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
                        animate={{ opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.25 }}
                      >
                        <ArrowDown className="size-4 lg:-rotate-90" />
                      </motion.div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
              {["Signed webhooks", "Provider health checks", "Replayable failures"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <Boxes className="size-5 text-primary-soft" />
                  <span className="text-sm font-semibold text-white/78">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
