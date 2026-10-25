
import {
  GraduationCap,
  BookOpen,
  FileText,
  ArrowUpRight,
  CalendarDays,
  Award,
} from "lucide-react";

const coursework = [
  "Artificial Intelligence",
  "Data Science & Machine Learning",
  "Data Structures",
  "Design & Analysis of Algorithms",
  "Database Systems",
  "Software Engineering",
  "Computer Networks",
  "Object-Oriented Programming",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 bg-[#061327] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            02 / Academic Profile
          </p>

          <h2 className="flex flex-wrap items-center gap-3 text-3xl font-bold md:text-5xl">
            <GraduationCap className="text-cyan-400" size={36} />
            Education <span className="text-cyan-400">& Resume</span>
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400">
            My academic foundation in computer science,
            software engineering, algorithms, and
            intelligent systems.
          </p>

          <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/60 via-cyan-400/10 to-transparent" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* University information */}
          <article className="rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-6 md:p-8">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <GraduationCap className="text-cyan-300" size={29} />
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Undergraduate Education
            </p>

            <h3 className="text-2xl font-bold text-white">
              California State University, Los Angeles
            </h3>

            <p className="mt-3 text-slate-300">
              Bachelor of Science in Computer Science
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl border border-cyan-400/15 bg-[#061327] p-4">
                <CalendarDays className="mb-3 text-cyan-400" size={21} />
                <p className="text-xs text-slate-400">
                  Expected Graduation
                </p>
                <p className="mt-1 font-semibold text-white">
                  May 2027
                </p>
              </div>

              <div className="rounded-xl border border-cyan-400/15 bg-[#061327] p-4">
                <Award className="mb-3 text-cyan-400" size={21} />
                <p className="text-xs text-slate-400">
                  GPA
                </p>
                <p className="mt-1 font-semibold text-white">
                  3.93 / 4.00
                </p>
              </div>

            </div>

            <p className="mt-7 text-sm leading-7 text-slate-300">
              My studies focus on software development,
              data structures, algorithms, databases,
              artificial intelligence, and applying
              computer science concepts to real-world projects.
            </p>
          </article>

          {/* Coursework and resume */}
          <div className="flex flex-col gap-6">

            <article className="rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-6 md:p-8">

              <div className="mb-5 flex items-center gap-3">
                <BookOpen className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold">
                  Relevant Coursework
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-cyan-400/20 bg-[#061327] px-3 py-2 text-xs text-cyan-100"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </article>

            <article className="flex flex-1 flex-col justify-between rounded-2xl border border-cyan-400/20 bg-[#0b213c]/80 p-6 md:p-8">

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <FileText className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-bold">
                    Resume
                  </h3>
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  Explore my technical experience,
                  software projects, academic background,
                  and professional involvement.
                </p>
              </div>

              <a
                href="/Fredy_Lung_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <FileText size={19} />
                View Resume
                <ArrowUpRight size={17} />
              </a>

            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
