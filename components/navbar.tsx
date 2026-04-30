"use client";

import { motion } from "framer-motion";
import { Bell, Github, Menu, Star, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGitHubStars } from "@/lib/use-github-stars";

const GITHUB_URL = "https://github.com/siddharttth/naughyfication";

const links = [
  { label: "Features", href: "#features" },
  { label: "Docs", href: "#docs" },
  { label: "GitHub", href: GITHUB_URL },
  { label: "Pricing", href: "#pricing" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const stars = useGitHubStars();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/55 backdrop-blur-2xl"
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        <a href="#" className="group flex items-center gap-3 font-display text-lg font-bold text-white">
          <span className="relative grid size-9 place-items-center rounded-xl bg-primary/15 text-primary-soft ring-1 ring-primary/30">
            <Bell className="size-5 fill-primary/20" />
            <span className="absolute inset-0 rounded-xl bg-primary/35 blur-xl transition-opacity group-hover:opacity-80" />
          </span>
          Naughyfication
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-white/68 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="secondary" size="sm" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="Star Naughyfication on GitHub">
              <Star className="size-4 fill-white" />
              Star on GitHub
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
                {stars === null ? "…" : stars}
              </span>
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="#docs">Get Started</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="secondary" size="sm" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="Star on GitHub">
              <Star className="size-3.5 fill-white" />
              <span className="hidden xs:inline">Star</span>
              <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-xs text-white/70">
                {stars === null ? "…" : stars}
              </span>
            </a>
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "container-shell overflow-hidden transition-all duration-300 md:hidden",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <div className="glass-panel rounded-2xl p-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex rounded-xl px-4 py-3 text-sm font-medium text-white/74 hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="grid gap-3 p-3">
            <Button variant="secondary" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                View GitHub
              </a>
            </Button>
            <Button asChild>
              <a href="#docs">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
