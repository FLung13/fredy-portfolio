
import {
  Code2,
  Layers,
  Database,
  Wrench,
  BrainCircuit,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code2,
    description: "Languages used in systems, backend, and application development.",
    skills: ["C", "C++", "Python", "Java", "SQL", "Kotlin"],
  },
  {
    id: "frameworks",
    title: "Web Development & Frameworks",
    icon: Layers,
    description: "Technologies for building responsive and full-stack applications.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Django",
      "Spring Boot",
      "Bootstrap",
      "WordPress",
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Systems",
    icon: Database,
    description: "Database management, data structures, and persistent storage.",
    skills: [
      "MySQL",
      "SQLite",
      "B+ Trees",
      "Query Parsing",
      "File I/O",
      "Data Structures",
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: Wrench,
    description: "Tools used for development, collaboration, and deployment.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "VS Code",
      "Jira",
      "Vercel",
      "Unity",
    ],
  },
];

const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Engineering",
  "Cloud Computing",
  "MLOps",
];

function SkillCard({ category }) {
  const Icon = category.icon;

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-2xl border border-cyan-400/20
        bg-[#0b213c]/80 p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-400/60
        hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]
      "
    >
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-20
          [background-image:linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10">
        <div
          className="
            mb-5 flex h-12 w-12
            items-center justify-center
            rounded-xl border border-cyan-400/30
            bg-cyan-400/10 text-cyan-300
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          <Icon size={25} />
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">
          {category.title}
        </h3>

        <p className="mb-6 text-sm leading-6 text-slate-400">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-md border border-cyan-400/20
                bg-[#061327] px-3 py-2
                text-xs font-medium text-cyan-100
                transition-colors duration-200
                group-hover:border-cyan-400/35
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative scroll-mt-24
        overflow-hidden bg-[#07182d]
        px-5 py-20 text-white
        md:px-8 md:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            03 / System Capabilities
          </p>

          <h2 className="flex flex-wrap items-center gap-3 text-3xl font-bold md:text-5xl">
            <Cpu className="text-cyan-400" size={36} />
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400">
            Programming languages, frameworks, tools, and
            engineering concepts I've used throughout
            my academic and personal projects.
          </p>

          <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/60 via-cyan-400/10 to-transparent" />
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

        {/* Current interests */}
        <div
          className="
            mt-8 rounded-2xl border border-cyan-400/20
            bg-[#0b213c]/60 p-6 md:p-8
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <BrainCircuit className="text-cyan-400" size={26} />

            <h3 className="text-xl font-bold text-white">
              Areas of Interest & Continued Learning
            </h3>
          </div>

          <p className="mb-5 max-w-3xl text-sm leading-7 text-slate-300">
            Alongside software engineering, I'm expanding
            my knowledge of intelligent systems, data-driven
            applications, and cloud-based development.
          </p>

          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="
                  rounded-lg border border-amber-400/25
                  bg-amber-400/5 px-4 py-2
                  text-sm text-amber-200
                "
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/FLung13"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-lg border border-cyan-400/40
              px-6 py-3 text-sm font-semibold text-cyan-300
              transition hover:bg-cyan-400/10
            "
          >
            Explore My GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
