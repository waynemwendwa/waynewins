import { Braces, Database, Smartphone } from "lucide-react";
const groups = [
  {
    icon: Braces,
    title: "The experience",
    subtitle: "FRONTEND DEVELOPMENT",
    text: "Responsive interfaces that balance clarity, character, and performance.",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    icon: Database,
    title: "The foundation",
    subtitle: "BACKEND DEVELOPMENT",
    text: "Connected systems that make the experience work behind the scenes.",
    tools: ["Node.js", "Express.js", "PHP / Laravel", "REST APIs", "SQL"],
  },
  {
    icon: Smartphone,
    title: "Beyond the browser",
    subtitle: "MOBILE DEVELOPMENT",
    text: "Native Android experiences built with care for the smallest screen.",
    tools: ["Kotlin", "Android SDK", "Room DB", "Coroutines", "Material 3"],
  },
];
export default function SkillsSection() {
  return (
    <section id="skills" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow muted">03 / EXPERTISE</p>
          <h2>
            One idea.
            <br />
            <span className="serif-word">Every layer.</span>
          </h2>
        </div>
        <p>
          The tools change. The attention
          <br />
          to detail stays the same.
        </p>
      </div>
      <div className="skills-grid">
        {groups.map((g, i) => (
          <article className="skill-card glass" key={g.title}>
            <div className="skill-top">
              <g.icon size={27} strokeWidth={1.4} />
              <span>0{i + 1}</span>
            </div>
            <p className="eyebrow muted">{g.subtitle}</p>
            <h3>{g.title}</h3>
            <p>{g.text}</p>
            <div className="tags">
              {g.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
