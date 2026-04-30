"use client";

import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const examples = {
  curl: `curl -X POST https://api.naughyfication.dev/v1/notify \\
  -H "Authorization: Bearer $NAUGHY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user@example.com",
    "channel": "email",
    "template_id": "welcome",
    "idempotency_key": "welcome-user-42",
    "data": {
      "name": "Developer"
    }
  }'`,
  JavaScript: `import { Naughyfication } from "@naughyfication/sdk";

const notify = new Naughyfication({
  apiKey: process.env.NAUGHY_API_KEY
});

await notify.send({
  to: "user@example.com",
  channel: "email",
  templateId: "welcome",
  idempotencyKey: "welcome-user-42",
  data: { name: "Developer" }
});`,
  Go: `client := naughyfication.New(os.Getenv("NAUGHY_API_KEY"))

_, err := client.Notify(ctx, naughyfication.Message{
  To:             "user@example.com",
  Channel:        "email",
  TemplateID:     "welcome",
  IdempotencyKey: "welcome-user-42",
  Data: map[string]any{
    "name": "Developer",
  },
})`
};

type ExampleKey = keyof typeof examples;

export function CodeExampleSection() {
  const [active, setActive] = useState<ExampleKey>("curl");
  const [copied, setCopied] = useState(false);
  const keys = useMemo(() => Object.keys(examples) as ExampleKey[], []);

  async function copyCode() {
    await navigator.clipboard.writeText(examples[active]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section id="docs" className="relative py-24">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Developer Experience"
            title="A simple API surface with production behavior behind it."
            description="Start with one request. Add templates, webhooks, retries, idempotency, and observability when you need them."
          />
        </Reveal>

        <Reveal className="mx-auto max-w-5xl">
          <div className="glass-panel overflow-hidden rounded-3xl">
            <div className="flex flex-col gap-4 border-b border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 overflow-x-auto">
                {keys.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-semibold transition",
                      active === key
                        ? "bg-primary/18 text-primary-soft ring-1 ring-primary/30"
                        : "text-white/58 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <Button variant="secondary" size="sm" onClick={copyCode}>
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
            <div className="bg-black/35 p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
                <Terminal className="size-4 text-primary-soft" />
                quickstart.{active.toLowerCase()}
              </div>
              <motion.pre
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-x-auto rounded-2xl border border-white/8 bg-[#05050b] p-5 font-mono text-[13px] leading-7 text-white/78"
              >
                <code>{examples[active]}</code>
              </motion.pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
