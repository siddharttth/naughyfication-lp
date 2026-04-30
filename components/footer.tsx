import { Bell, BookOpen, Code2, Github } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/siddharttth/naughyfication", icon: Github },
  { label: "Docs", href: "#docs", icon: BookOpen },
  { label: "API Reference", href: "#docs", icon: Code2 }
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3 font-display text-lg font-bold text-white">
            <span className="grid size-9 place-items-center rounded-xl bg-primary/14 text-primary-soft ring-1 ring-primary/25">
              <Bell className="size-5" />
            </span>
            Naughyfication
          </a>
          <p className="mt-4 text-sm text-white/52">Built for developers who care about reliability.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-white/66 transition hover:border-primary/30 hover:text-white"
              >
                <Icon className="size-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="container-shell mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Naughyfication. Open Source.</p>
        <p>Send Notifications That Never Fail.</p>
      </div>
    </footer>
  );
}
