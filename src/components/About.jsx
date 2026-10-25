
import { UserRound, ArrowUpRight, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#061327] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            04 / Developer Profile
          </p>
          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-5xl">
            <UserRound className="text-cyan-400" size={34} />
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/60 via-cyan-400/10 to-transparent" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-6 md:p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Hello, I'm Fredy Lung
            </p>

            <p className="text-base leading-8 text-slate-200">
              I'm a senior Computer Science student at California
              State University, Los Angeles, interested in software
              engineering, full-stack development, and artificial
              intelligence.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300">
              I enjoy developing practical applications, from a custom
              SQL database engine in C++ to web applications built
              with React, Django, and Spring Boot. My current work
              includes a sponsored senior design project with SMPTE
              and website development for student organizations.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Beyond programming, I support students through
              mathematics workshops and contribute to technical
              initiatives on campus. I value teamwork, clear
              communication, and continuous learning.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
            >
              Let's Connect
              <ArrowUpRight size={18} />
            </a>
          </article>

          <article className="rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-6 md:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <GraduationCap className="text-cyan-300" size={25} />
            </div>

            <h3 className="text-xl font-bold">Current Focus</h3>

            <div className="mt-6 space-y-5">
              {[
                ["Software Engineering", "Building maintainable applications and systems."],
                ["Full-Stack Development", "Developing responsive interfaces and backend services."],
                ["AI & Machine Learning", "Applying data science and intelligent algorithms."],
                ["Collaboration", "Working with teams, faculty, and project sponsors."],
              ].map(([title, description]) => (
                <div key={title} className="border-l-2 border-cyan-400/50 pl-4">
                  <h4 className="font-semibold text-cyan-200">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
