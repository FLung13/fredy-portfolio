
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Mathematics Instructional Student Assistant",
    organization: "California State University, Los Angeles",
    date: "June 2025 – Present",
    type: "Campus Employment",
    bullets: [
      "Facilitate mathematics workshops covering Precalculus and Calculus.",
      "Mentor groups of approximately 30 students through guided problem-solving and collaborative learning.",
      "Coordinate with faculty and support student engagement and academic progress.",
    ],
  },
  {
    title: "Chapter Webmaster",
    organization: "ASCE — Cal State LA",
    date: "Current",
    type: "Student Leadership",
    bullets: [
      "Develop and maintain the chapter's WordPress website.",
      "Organize pages for membership, projects, officers, sponsors, resources, and chapter information.",
      "Improve responsive navigation, visual consistency, and website accessibility.",
    ],
  },
  {
    title: "Web Designer",
    organization: "ASCE Pacific Southwest Symposium 2026",
    date: "September 2024 – April 2026",
    type: "Web Development",
    bullets: [
      "Maintained and updated an event website used by 500+ users.",
      "Implemented front-end changes using HTML, CSS, and JavaScript.",
      "Collaborated with organizers to translate event requirements into website updates.",
    ],
  },
  {
    title: "Webmaster",
    organization: "SHPE — Cal State LA",
    date: "Current",
    type: "Student Leadership",
    bullets: [
      "Support the chapter's web presence and digital communications.",
      "Collaborate with student leadership on website and organizational needs.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[#07182d] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            05 / Experience Log
          </p>

          <h2 className="flex flex-wrap items-center gap-3 text-3xl font-bold md:text-5xl">
            <BriefcaseBusiness className="text-cyan-400" size={36} />
            Professional <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400">
            Experience in software development, website management,
            academic support, and student organization leadership.
          </p>

          <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/60 via-cyan-400/10 to-transparent" />
        </div>

        <div className="relative space-y-6 border-l border-cyan-400/25 pl-5 md:pl-9">
          {experiences.map((experience) => (
            <article
              key={experience.title + experience.organization}
              className="relative rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-5 transition hover:border-cyan-400/50 md:p-7"
            >
              <div className="absolute -left-[27px] top-8 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#061327] md:-left-[43px]" />

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-cyan-400">
                    {experience.type}
                  </p>

                  <h3 className="text-xl font-bold text-white">
                    {experience.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-300">
                    {experience.organization}
                  </p>
                </div>

                <span className="rounded-full border border-cyan-400/25 px-3 py-1 text-xs text-cyan-200">
                  {experience.date}
                </span>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/Fredy_Lung_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            View Full Resume
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
