"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BellRing,
  Gauge,
  GitBranch,
  KeyRound,
  Radio,
  Repeat2,
  Webhook
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    title: "Multi-channel notifications",
    description: "Route email, SMS, WhatsApp, Telegram, Slack, and custom providers from one API.",
    icon: BellRing
  },
  {
    title: "Retry engine",
    description: "Configurable exponential backoff keeps critical messages moving through provider turbulence.",
    icon: Repeat2
  },
  {
    title: "DLQ system",
    description: "Dead-letter queues capture failed events with enough context to replay or inspect them.",
    icon: GitBranch
  },
  {
    title: "Metrics & observability",
    description: "Track delivery latency, provider health, failure reasons, and channel performance.",
    icon: Activity
  },
  {
    title: "Webhook callbacks",
    description: "Receive signed delivery events for sent, failed, retried, opened, clicked, and bounced states.",
    icon: Webhook
  },
  {
    title: "Idempotency",
    description: "Prevent duplicate sends with request keys built for payment-grade notification flows.",
    icon: KeyRound
  },
  {
    title: "Rate limiting",
    description: "Protect providers and tenants with predictable limits, burst controls, and fair usage.",
    icon: Gauge
  },
  {
    title: "Queue infrastructure",
    description: "Redis-backed queues and workers absorb spikes while keeping delivery predictable.",
    icon: Radio
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div aria-hidden className="orb left-1/2 top-20 size-[340px] -translate-x-1/2 bg-primary/14" />
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Built For Reliability"
            title={
              <>
                Everything your notification layer needs before production starts hurting.
              </>
            }
            description="Naughyfication gives teams the reliability primitives they usually discover only after the first painful incident."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } }
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="group glass-panel relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary-soft ring-1 ring-primary/25 transition group-hover:scale-105 group-hover:bg-primary/18">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{feature.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
