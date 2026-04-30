"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback } from "react";
import {
  ArrowRight,
  Github,
  Terminal,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

function GmailIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-7 sm:size-10">
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-8 sm:size-12">
      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/>
      <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.308-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.918,43.798,4.893,43.803,4.868,43.803z"/>
      <path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,4.5c-10.989,0-19.932,8.942-19.937,19.932c-0.001,3.385,0.862,6.685,2.506,9.607l-2.732,9.974c-0.089,0.325,0.199,0.626,0.526,0.547l10.229-2.683c2.802,1.488,5.942,2.303,9.16,2.304h0.008c10.988,0,19.932-8.942,19.936-19.932c0.002-5.328-2.073-10.335-5.838-14.101C34.351,6.574,29.342,4.502,24.014,4.5L24.014,4.5z"/>
      <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/>
      <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-8 sm:size-12">
      <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/>
      <path fill="#fff" d="M34.11,14.114l-3.172,16.592c0,0-0.445,1.113-1.668,0.557l-7.497-5.832l-3.164-1.543l-5.497-1.836c0,0-0.841-0.297-0.926-0.928c-0.085-0.631,0.952-0.964,0.952-0.964l20.386-7.979C33.527,12.181,34.11,12.632,34.11,14.114z"/>
      <path fill="#b0bec5" d="M22.9,30.799l-2.913,2.908c0,0-0.121,0.091-0.254,0.043l0.555-4.985L22.9,30.799z"/>
      <path fill="#cfd8dc" d="M27.818,17.57l-9.172,5.786c0,0-0.064,0.067-0.055,0.221l-0.613,4.677l-2.054-6.162l9.784-3.989C26.301,17.746,27.818,17.57,27.818,17.57z"/>
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 127 127" className="size-7 sm:size-10">
      <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80z" fill="#E01E5A"/>
      <path d="M33.9 80c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
      <path d="M47.1 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.9 6.7 39.8.8 47.1.8c7.3 0 13.2 5.9 13.2 13.2v13.2H47.1z" fill="#36C5F0"/>
      <path d="M47.1 33.9c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14.1C6.8 60.3.9 54.4.9 47.1c0-7.3 5.9-13.2 13.2-13.2h33z" fill="#36C5F0"/>
      <path d="M99.8 47.1c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V47.1z" fill="#2EB67D"/>
      <path d="M93.1 47.1c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14.1C66.7 6.8 72.6.9 79.9.9c7.3 0 13.2 5.9 13.2 13.2v33z" fill="#2EB67D"/>
      <path d="M79.9 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2z" fill="#ECB22E"/>
      <path d="M79.9 93.1c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2h-33z" fill="#ECB22E"/>
    </svg>
  );
}

function IMessageIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-8 sm:size-12">
      <linearGradient id="iMessageGrad" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4cd964"/>
        <stop offset="1" stopColor="#28b345"/>
      </linearGradient>
      <rect width="40" height="40" x="4" y="4" fill="url(#iMessageGrad)" rx="10" ry="10"/>
      <path fill="#fff" d="M24,11c-7.168,0-13,5.158-13,11.5c0,3.651,1.944,6.93,5,9.098V36l4.499-2.53C21.948,33.808,22.96,34,24,34c7.168,0,13-5.158,13-11.5S31.168,11,24,11z"/>
    </svg>
  );
}

const channels = [
  { label: "Email", Component: GmailIcon, className: "right-[2%] top-[6%]" },
  { label: "WhatsApp", Component: WhatsAppIcon, className: "-right-[3%] top-[40%]" },
  { label: "Telegram", Component: TelegramIcon, className: "right-[2%] bottom-[12%]" },
  { label: "Slack", Component: SlackIcon, className: "left-[30%] -bottom-4" },
  { label: "iMessage", Component: IMessageIcon, className: "left-[50%] -bottom-4" },
];

const codeLines = [
  "curl -X POST https://api.naughyfication.dev/v1/notify \\",
  "  -H \"Authorization: Bearer $NAUGHY_API_KEY\" \\",
  "  -H \"Content-Type: application/json\" \\",
  "  -d '{",
  "    \"to\": \"user@example.com\",",
  "    \"channel\": \"email\",",
  "    \"template_id\": \"welcome\",",
  "    \"retry_policy\": \"critical\",",
  "    \"data\": { \"name\": \"Developer\" }",
  "  }'"
];

function CodePanel() {
  return (
    <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[28px]">
      <div className="glass-panel relative p-3 sm:p-5">
        <div className="mb-3 flex items-center justify-between sm:mb-5">
          <div className="flex gap-1.5 sm:gap-2">
            <span className="size-2.5 rounded-full bg-[#ff625d] sm:size-3" />
            <span className="size-2.5 rounded-full bg-[#ffbd44] sm:size-3" />
            <span className="size-2.5 rounded-full bg-[#00ca4e] sm:size-3" />
          </div>
          <div className="rounded-full bg-primary/12 px-2.5 py-1 font-mono text-[10px] text-primary-soft sm:px-3 sm:py-1.5 sm:text-xs">
            POST /api/v1/notify
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/8 bg-black/40 p-3 shadow-inner sm:rounded-2xl sm:p-5">
          <div className="mb-3 flex items-center gap-2 text-xs text-white/58 sm:mb-4 sm:text-sm">
            <Terminal className="size-3.5 text-primary-soft sm:size-4" />
            naughyfication.request
          </div>
          <pre className="overflow-x-auto pb-1 font-mono text-[9px] leading-5 text-white/76 sm:pb-2 sm:text-[12px] sm:leading-6 lg:text-sm">
            {codeLines.map((line, index) => (
              <motion.code
                key={line}
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.12, duration: 0.35 }}
              >
                {line}
              </motion.code>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}

function FleeIcon({ channel, index }: { channel: typeof channels[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 1.2 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 1.2 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 90) {
      const angle = Math.atan2(dy, dx);
      const flee = 120;
      rawX.set(-Math.cos(angle) * flee);
      rawY.set(-Math.sin(angle) * flee);
    }
  }, [rawX, rawY]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  const Icon = channel.Component;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute ${channel.className} grid size-[52px] cursor-pointer place-items-center rounded-full sm:size-[72px]`}
      style={{
        x,
        y,
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
      animate={{ y: [0, -12, 0] }}
      transition={{ y: { duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" } }}
    >
      <Icon />
      <span className="sr-only">{channel.label}</span>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate pb-16 pt-24 sm:pt-40 lg:min-h-screen lg:pb-24">
      {/* decorative — clipped by main's overflow-x-hidden */}
      <div aria-hidden className="surface-grid absolute inset-0 opacity-50" />
      <div aria-hidden className="orb -right-28 top-20 size-[460px] bg-primary/25" />
      <div aria-hidden className="orb left-10 top-32 size-[260px] bg-fuchsia-500/16" />
      <div aria-hidden className="absolute right-0 top-0 h-[680px] w-[55vw] bg-[radial-gradient(circle_at_60%_28%,rgba(255,62,191,0.24),transparent_34%),radial-gradient(circle_at_70%_50%,rgba(127,70,255,0.14),transparent_38%)]" />

      <div className="container-shell grid items-center gap-10 lg:gap-14 lg:grid-cols-[0.95fr_1.05fr]">

        {/* ── Left: text content ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary-soft shadow-glow sm:px-4 sm:py-2 sm:text-sm">
            Open Source • Self Hosted • Developer First
          </div>

          <h1
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(1.6rem, 7vw, 4.5rem)", lineHeight: 1.08 }}
          >
            Send Notifications.
            <br />
            Any Channel.
            <span className="pink-text-gradient animate-shimmer"> One API.</span>
          </h1>

          <p className="mt-4 max-w-[30ch] text-sm leading-6 text-white/68 sm:mt-6 sm:max-w-prose sm:text-lg">
            Production-grade notification infrastructure with retries, tracking, DLQs, webhooks,
            metrics, and reliability built in.
          </p>

          {/* Buttons — never wider than text column */}
          <div className="mt-6 flex w-full max-w-xs flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#docs">
                Get Started
                <ArrowRight className="size-4 shrink-0" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://github.com/siddharttth/naughyfication" target="_blank" rel="noopener noreferrer">
                <Github className="size-4 shrink-0" />
                View GitHub
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2.5 text-sm text-white/60 sm:mt-8 lg:justify-start lg:grid lg:grid-cols-3 lg:gap-4">
            {["Easy to Self-Host", "No Vendor Lock-in", "Developer Friendly"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/[0.06] text-primary-soft ring-1 ring-white/10">
                  <Zap className="size-3.5" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: code panel (desktop + tablet) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full sm:block lg:max-w-none"
        >
          <div aria-hidden className="absolute inset-8 rounded-full border border-primary/20 opacity-70 blur-[1px]" />
          <svg aria-hidden className="absolute inset-0 h-full w-full overflow-visible opacity-80" viewBox="0 0 640 520">
            <motion.path d="M82 138 C186 70 446 78 552 158" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="6 10" fill="none" animate={{ pathLength: [0.25, 1, 0.25] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
            <motion.path d="M86 394 C202 470 440 462 560 346" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="6 10" fill="none" animate={{ pathLength: [1, 0.25, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#ff3ebf" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.32" />
              </linearGradient>
            </defs>
          </svg>

          <CodePanel />

          {channels.map((channel, index) => (
            <FleeIcon key={channel.label} channel={channel} index={index} />
          ))}
        </motion.div>

        {/* ── Mobile only: code panel without floating icons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="sm:hidden w-full"
        >
          <CodePanel />
        </motion.div>

      </div>
    </section>
  );
}
