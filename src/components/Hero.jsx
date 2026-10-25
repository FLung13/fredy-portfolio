import Hotspot from "./Hotspot";
import { Monitor, BookOpen, Cpu, Coffee } from "lucide-react";
import { ArrowDown, FileText } from "lucide-react";
const workstation = "/workstation.webp";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[85vh] flex-col bg-[#061327] text-white"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#10385a_0%,_#061327_65%)] opacity-50" />

      {/* Introduction */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-12 pb-4 text-center md:px-6 md:pt-20">        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Computer Science • Software Engineering
      </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I'm{" "}
          <span className="text-cyan-400">Fredy Lung.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          Computer Science student at Cal State LA building
          software systems, full-stack applications, and
          exploring AI and machine learning.
        </p>

        {/* Buttons */}
        <div className="mx-auto mt-7 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore Projects
          </a>

          <a
            href="/Fredy_Lung_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 px-6 py-3 text-cyan-300 transition hover:bg-cyan-400/10"
          >
            <FileText size={18} />
            View Resume
          </a>

          <a
            href="https://github.com/FLung13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-slate-200 transition hover:border-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 flex items-center justify-center gap-3 px-5 text-center">
        <span className="h-px w-8 bg-cyan-400/50" />

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Explore My Workstation
        </p>

        <span className="h-px w-8 bg-cyan-400/50" />
      </div>

      {/* Interactive workstation */}
      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1450px] px-2 md:px-8">

        {/* Desktop interactive image */}
        <div className="relative hidden overflow-visible md:block">

          <img
            src={workstation}
            alt="Interactive isometric developer workstation"
            className="block h-auto w-full select-none"
            width="1536"
            height="1024"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />

          <Hotspot
            label="Projects"
            tooltip="Click to explore Projects"
            href="#projects"
            x={53}
            y={20}
            Icon={Monitor}
          />

          <Hotspot
            label="Education"
            tooltip="Education, Coursework & Resume"
            href="#education"
            x={76}
            y={31}
            Icon={BookOpen}
          />

          <Hotspot
            label="Skills"
            tooltip="Explore Technical Skills"
            href="#skills"
            x={52}
            y={53}
            Icon={Cpu}
          />

          <Hotspot
            label="Contact"
            tooltip="Contact & Socials"
            href="#contact"
            x={26}
            y={59}
            Icon={Coffee}
          />

        </div>


        {/* Mobile workstation navigation */}
        <div className="md:hidden">

          <img
            src={workstation}
            alt="Developer workstation illustration"
            className="h-auto w-full"
          />

          <div className="mx-auto mt-5 grid max-w-lg grid-cols-1 gap-3 px-5 pb-8 sm:grid-cols-2">

            <a
              href="#projects"
              className="flex min-h-20 items-center gap-4 rounded-xl border border-cyan-400/30 bg-[#0b213c] p-4 transition active:scale-[0.98] hover:border-cyan-400"
            >
              <Monitor className="shrink-0 text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">Featured Projects</h3>
                <p className="text-xs text-slate-400">Explore my work</p>
              </div>
            </a>

            <a
              href="#education"
              className="flex min-h-20 items-center gap-4 rounded-xl border border-cyan-400/30 bg-[#0b213c] p-4 transition active:scale-[0.98] hover:border-cyan-400"
            >
              <BookOpen className="shrink-0 text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">Education & Resume</h3>
                <p className="text-xs text-slate-400">Academic background</p>
              </div>
            </a>

            <a
              href="#skills"
              className="flex min-h-20 items-center gap-4 rounded-xl border border-cyan-400/30 bg-[#0b213c] p-4 transition active:scale-[0.98] hover:border-cyan-400"
            >
              <Cpu className="shrink-0 text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">Technical Skills</h3>
                <p className="text-xs text-slate-400">Languages, tools & frameworks</p>
              </div>
            </a>

            <a
              href="#contact"
              className="flex min-h-20 items-center gap-4 rounded-xl border border-cyan-400/30 bg-[#0b213c] p-4 transition active:scale-[0.98] hover:border-cyan-400"
            >
              <Coffee className="shrink-0 text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">Contact & Socials</h3>
                <p className="text-xs text-slate-400">Let's connect</p>
              </div>
            </a>

          </div>
        </div>


      </div>


      {/* Scroll indicator */}
      <a
        href="#projects"
        className="relative z-10 mx-auto mb-8 mt-4 flex items-center gap-2 text-sm text-cyan-300 transition hover:text-white"
      >
        Explore my work
        <ArrowDown size={17} />
      </a>
    </section>
  );
}

export default Hero;
