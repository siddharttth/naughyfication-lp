"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export function DeveloperLetter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger — small envelope tab at the bottom center */}
      <div className="flex justify-center py-10">
        <button
          onClick={() => setOpen(true)}
          className="group relative flex flex-col items-center gap-2 text-white/30 transition-all duration-300 hover:text-white/70"
        >
          {/* Envelope icon hand-drawn feel */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <svg viewBox="0 0 64 48" className="size-10 fill-none" strokeWidth="1.5">
              <rect x="2" y="6" width="60" height="36" rx="4" stroke="currentColor" />
              <path d="M2 10 L32 28 L62 10" stroke="currentColor" />
              <path d="M2 42 L22 26" stroke="currentColor" strokeOpacity="0.5" />
              <path d="M62 42 L42 26" stroke="currentColor" strokeOpacity="0.5" />
            </svg>
            {/* wax seal dot */}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-3 rounded-full bg-primary/60 ring-2 ring-primary/20 group-hover:bg-primary transition-colors duration-300" />
          </motion.div>
          <span className="font-mono text-[11px] tracking-widest uppercase">a letter for you</span>
        </button>
      </div>

      {/* Letter modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Letter paper */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg"
                initial={{ scale: 0.85, y: 40, rotateX: 8 }}
                animate={{ scale: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                style={{ perspective: 800 }}
              >
                {/* Paper texture card */}
                <div
                  className="relative overflow-hidden rounded-sm px-8 py-10 sm:px-12 sm:py-14"
                  style={{
                    background: "linear-gradient(160deg, #fdf6ec 0%, #f5e9d4 60%, #ede0c4 100%)",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
                  }}
                >
                  {/* Paper grain overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Ruled lines */}
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={i}
                      className="pointer-events-none absolute left-0 right-0 border-b border-[#c9aa78]/25"
                      style={{ top: `${88 + i * 32}px` }}
                    />
                  ))}

                  {/* Left margin line */}
                  <div className="pointer-events-none absolute bottom-0 left-16 top-0 border-l-2 border-[#e07a7a]/20" />

                  {/* Close button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 grid size-7 place-items-center rounded-full text-[#8b6a3e]/50 transition hover:text-[#8b6a3e]"
                  >
                    <X className="size-4" />
                  </button>

                  {/* Logo + wax seal header */}
                  <div className="mb-6 flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Naughyfication"
                      width={48}
                      height={48}
                      className="size-12 drop-shadow-[0_2px_8px_rgba(255,62,191,0.4)]"
                    />
                    <div>
                      <div className="font-mono text-xs tracking-widest text-[#8b6a3e]/60 uppercase">Naughyfication</div>
                      <div className="font-mono text-[10px] text-[#8b6a3e]/40">Est. 2025 — Open Source</div>
                    </div>
                    {/* Wax seal stamp */}
                    <div className="ml-auto flex size-14 flex-col items-center justify-center rounded-full border-2 border-[#c0392b]/30 bg-[#c0392b]/10 text-center">
                      <span className="font-mono text-[8px] font-bold leading-tight tracking-widest text-[#c0392b]/70 uppercase">open<br/>source</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="mb-5 font-mono text-xs text-[#8b6a3e]/50 italic">
                    {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </div>

                  {/* Letter body */}
                  <div className="space-y-4 font-serif text-[15px] leading-relaxed text-[#3d2b1a]">
                    <p>Dear Developer,</p>

                    <p>
                      If you&apos;re reading this, you&apos;re exactly the kind of person I built
                      Naughyfication for — someone who cares about how software is made, and believes
                      that the best tools are built in the open, together.
                    </p>

                    <p>
                      This project started as a scratch for my own itch: I was tired of heavyweight
                      notification vendors, vendor lock-in, and black-box reliability. So I built
                      something I&apos;d actually want to use — open-source, self-hostable, and
                      developer-first from day one.
                    </p>

                    <p>
                      It&apos;s not perfect. There are rough edges, missing providers, and corners
                      I haven&apos;t gotten to yet. And that&apos;s exactly why I&apos;d love for
                      you to be a part of it.
                    </p>

                    <p>
                      Whether it&apos;s a bug fix, a new channel integration, better docs, or just
                      a GitHub star — every contribution makes this better for every developer who
                      comes after you.
                    </p>

                    <p className="font-medium">
                      Come build with me. The repo is open, the issues are labeled, and the
                      coffee is imaginary but the gratitude is very real.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-8">
                    <div
                      className="mb-1 font-serif text-2xl italic text-[#3d2b1a]/80"
                      style={{ fontFamily: "Georgia, serif", transform: "rotate(-1.5deg)", display: "inline-block" }}
                    >
                      Siddharth
                    </div>
                    <div className="font-mono text-xs text-[#8b6a3e]/50">Maker of Naughyfication</div>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://github.com/siddharttth/naughyfication"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-sm border border-[#8b6a3e]/30 bg-[#8b6a3e]/8 py-3 font-mono text-sm text-[#5c3d1e] transition hover:bg-[#8b6a3e]/15 hover:text-[#3d2b1a]"
                  >
                    <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    Contribute on GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
