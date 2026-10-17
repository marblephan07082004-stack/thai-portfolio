import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { profile, education, experience, projects, skills, involvement } from "@/lib/constants";

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-3xl font-semibold tracking-tight">{children}</h2>;
}

export default function Home() {
  return (
    <>
      <Navbar name={profile.shortName} />
      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* Hero: laid out like a drawing title block */}
        <section className="grid-paper -mx-5 border-b border-ink/80 px-5 py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-mono text-sm text-blueprint">{profile.title}</p>
              <h1 className="mt-3 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">{profile.name}</h1>
              <p className="mt-6 max-w-xl text-lg">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
                <a href="#projects" className="bg-ink px-5 py-3 text-paper hover:bg-blueprint">See my projects</a>
                <a href={`mailto:${profile.email}`} className="border border-ink px-5 py-3 hover:border-callout hover:text-callout">Email me</a>
              </div>
            </div>
            <table className="w-full border border-ink bg-paper text-sm md:col-span-5">
              <tbody>
                {[
                  ["Drawn by", profile.name],
                  ["Program", "B.S. Mechanical Engineering, UCLA"],
                  ["Grad date", "June 2028"],
                  ["Looking for", "Summer 2027 internship"],
                  ["Based in", profile.location],
                  ["Tools", "SolidWorks, Onshape, MATLAB"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-ink last:border-0">
                    <th scope="row" className="w-28 border-r border-ink px-3 py-2 text-left font-medium text-blueprint">{k}</th>
                    <td className="px-3 py-2">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-16" aria-labelledby="projects">
          <SectionTitle id="projects">Projects</SectionTitle>
          <p className="mt-2 max-w-prose">Three team and individual builds, from CAD and fabrication to simulation.</p>
          <div className="mt-8">
            {projects.map((p, i) => <ProjectCard key={p.slug} p={p} flip={i % 2 === 1} />)}
          </div>
        </section>

        <section className="border-t border-ink/80 py-16" aria-labelledby="experience">
          <SectionTitle id="experience">Experience</SectionTitle>
          <div className="mt-8 space-y-10">
            {experience.map((e) => (
              <article key={e.role} className="grid gap-4 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-sm">{e.org}</p>
                  <p className="mt-1 font-mono text-sm text-blueprint">{e.date}</p>
                </div>
                <div className="md:col-span-8">
                  <ul className="list-disc space-y-2 pl-5 marker:text-callout">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <p className="mt-3 text-sm"><span className="font-semibold">Tools:</span> {e.tools.join(", ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-ink/80 py-16" aria-labelledby="skills">
          <SectionTitle id="skills">Skills</SectionTitle>
          <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="border-l-2 border-blueprint pl-4">
                <dt className="font-semibold">{s.group}</dt>
                <dd className="text-sm">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-ink/80 py-16" aria-labelledby="education">
          <SectionTitle id="education">Education</SectionTitle>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {education.map((e) => (
              <article key={e.school}>
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p>{e.degree}</p>
                <p className="mt-1 font-mono text-sm text-blueprint">{e.date}</p>
                <p className="text-sm">{e.detail}</p>
              </article>
            ))}
          </div>
          <h3 className="mt-14 text-xl font-semibold">Work and community</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {involvement.map((i) => (
              <article key={i.role} className="text-sm">
                <h4 className="font-semibold">{i.role}</h4>
                <p>{i.org}</p>
                <p className="font-mono text-blueprint">{i.date}</p>
                <p className="mt-2">{i.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-ink/80 py-16" aria-labelledby="contact">
          <SectionTitle id="contact">Contact</SectionTitle>
          <p className="mt-2 max-w-prose">I am looking for a Summer 2027 mechanical engineering internship. Email is the fastest way to reach me.</p>
          <ul className="mt-6 space-y-2">
            <li><a className="border-b-2 border-callout hover:text-callout" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="border-b-2 border-callout hover:text-callout" href={profile.linkedin}>LinkedIn</a></li>
            <li><a className="border-b-2 border-callout hover:text-callout" href={profile.github}>GitHub</a></li>
            <li className="text-sm">{profile.phone} · {profile.location} · {profile.status}</li>
          </ul>
        </section>
      </main>
      <footer className="border-t border-rule py-6 text-center text-sm">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
