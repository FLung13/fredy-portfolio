
import {
  Terminal,
  Mail,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/FLung13",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fredy-lung/",
  },
  {
    label: "Email",
    href: "mailto:lungfredy@gmail.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/20 bg-[#040e1c] px-5 py-10 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Branding */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-cyan-300"
            >
              <Terminal size={25} />
              <span className="text-xl font-bold tracking-wider">
                FL<span className="text-white">.DEV</span>
              </span>
            </a>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Computer Science student building software
              systems, web applications, and exploring
              intelligent technologies.
            </p>
          </div>

          {/* Social links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Connect
            </h3>

            <div className="flex flex-wrap gap-5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="inline-flex items-center gap-1 text-sm text-slate-300 transition hover:text-cyan-300"
                >
                  {link.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cyan-400/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} Fredy Lung. Built with React and Tailwind CSS.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-white"
          >
            Back to Top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
