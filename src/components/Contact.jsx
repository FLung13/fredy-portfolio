import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Mail,
  ArrowUpRight,
  RadioTower,
  FileText,
  Globe,
} from "lucide-react";


const contactLinks = [
  {
    label: "Email",
    value: "lungfredy@gmail.com",
    href: "mailto:lungfredy@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/FLung13",
    href: "https://github.com/FLung13",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fredy-lung",
    href: "https://www.linkedin.com/in/fredy-lung/",
    Icon: FaLinkedin,
  },
];


export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#061327] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            06 / Communication Terminal
          </p>

          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-5xl">
            <RadioTower
              className="shrink-0 text-cyan-400"
              size={36}
            />
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            I'm interested in software engineering, full-stack
            development, and AI-related opportunities.
            Feel free to reach out about internships,
            technical projects, or collaboration.
          </p>

          <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/60 via-cyan-400/10 to-transparent" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Communication links */}
          <div className="rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <RadioTower className="text-cyan-400" size={23} />
              <h3 className="text-xl font-bold">
                Communication Channels
              </h3>
            </div>

            <div className="space-y-3">
              {contactLinks.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-cyan-400/15 bg-[#061327] p-4 transition hover:border-cyan-400/60 hover:bg-cyan-400/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Icon size={22} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-widest text-slate-400">
                      {label}
                    </span>
                    <span className="block break-all text-sm font-medium text-white">
                      {value}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-cyan-400 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Resume panel */}
          <div className="flex flex-col justify-between rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-6 md:p-8">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                <FileText className="text-cyan-300" size={27} />
              </div>

              <h3 className="text-xl font-bold">
                Interested in My Work?
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                View my resume for more information about
                my technical projects, academic experience,
                and professional background.
              </p>
            </div>

            <a
              href="/Fredy_Lung_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <FileText size={19} />
              View Resume
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
