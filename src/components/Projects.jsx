
import {
  ArrowUpRight,
  Monitor,
  Database,
  Globe,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    id: "smpte",
    title: "SMPTE Senior Design Project",
    category: "Senior Capstone",
    status: "In Progress",
    icon: Monitor,
    description:
      "Developing a standards-focused media measurement and calibration workflow as part of a sponsored senior design project.",
    technologies: [
      "Media Standards",
      "Colorimetry",
      "Software Integration",
    ],
    github: null,
    live: null,
  },
  {
    id: "sql",
    title: "Custom SQL Database Engine",
    category: "Systems Programming",
    status: "Completed",
    icon: Database,
    description:
      "Developed a custom SQL database engine in C++ supporting query parsing, B+ tree indexing, and persistent file-based storage.",
    technologies: [
      "C++",
      "Data Structures",
      "B+ Trees",
      "File I/O",
    ],
    github: "https://github.com/FLung13/mini-sql-database",
    live: null,
  },
  {
    id: "asce",
    title: "ASCE Chapter Website",
    category: "Web Development",
    status: "In Progress",
    icon: Globe,
    description:
      "Developing and maintaining the Cal State LA ASCE chapter website, including responsive navigation, club resources, membership information, and content organization.",
    technologies: [
      "WordPress",
      "HTML",
      "CSS",
      "Web Design",
    ],
    github: null,
    live: null,
  },
  {
    id: "library",
    title: "Book Library Web Application",
    category: "Full-Stack Development",
    status: "Completed",
    icon: BookOpen,
    description:
      "Built a full-stack Django web application featuring authentication, book search, ratings, favorites, and shopping cart functionality.",
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "Bootstrap",
    ],
    github: "https://github.com/FLung13/book-exchange-app",
    live: null,
  },
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <article
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl border border-cyan-400/20
        bg-[#0b213c]/80 p-6
        transition-all duration-300
        hover:-translate-y-1 hover:border-cyan-400/70
        hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
      "
    >
      {/* Technical grid background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-20
          [background-image:linear-gradient(rgba(34,211,238,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.09)_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl border border-cyan-400/30
              bg-cyan-400/10 text-cyan-300
            "
          >
            <Icon size={25} />
          </div>

          <span
            className={
              project.status === "Completed"
                ? "rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
                : "rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-300"
            }
          >
            {project.status}
          </span>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>

        <h3 className="mb-3 text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mb-6 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-md border border-cyan-400/20
                bg-[#061327] px-3 py-1.5
                text-xs text-cyan-200
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap gap-5 border-t border-cyan-400/15 pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
            >
              <ArrowUpRight size={17} />
              View Source
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
            >
              <ExternalLink size={17} />
              Live Website
            </a>
          )}

          {!project.github && !project.live && (
            <span className="text-xs text-slate-500">
              Project details available upon request
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#07182d] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            01 / Portfolio Archive
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400">
            A collection of software engineering, full-stack
            development, and academic projects focused on
            solving practical problems.
          </p>

          <div className="mt-7 h-px w-full bg-gradient-to-r from-cyan-400/60 via-cyan-400/10 to-transparent" />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub profile */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/FLung13"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-lg
              border border-cyan-400/40 px-6 py-3
              text-sm font-semibold text-cyan-300
              transition hover:bg-cyan-400/10
            "
          >
            Explore All GitHub Repositories
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
