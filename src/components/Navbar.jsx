
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Terminal,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    const ids = [
      "home",
      ...navigation.map((item) => item.href.slice(1)),
    ];

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () =>
      window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-[#061327]/95 text-white backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-5 md:px-8"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-3 text-cyan-300"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10">
            <Terminal size={22} />
          </span>

          <span className="text-lg font-bold tracking-wider">
            FL<span className="text-white">.DEV</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => {
            const active =
              activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={`border-b-2 py-2 text-sm font-medium transition ${
                  active
                    ? "border-cyan-400 text-cyan-300"
                    : "border-transparent text-slate-300 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Desktop resume */}
        <a
          href="/Fredy_Lung_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg border border-cyan-400/50 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10 lg:inline-flex"
        >
          <FileText size={17} />
          Resume
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/30 text-cyan-300 transition hover:bg-cyan-400/10 lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-cyan-400/15 bg-[#061327] px-5 pb-5 pt-3 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  activeSection === item.href.slice(1)
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-slate-200 hover:bg-cyan-400/10"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/Fredy_Lung_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 font-semibold text-slate-950"
            >
              <FileText size={18} />
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
