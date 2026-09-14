import { ArrowUpRight, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const projects = [
  {
    title: "E-Commerce Excellence",
    category: "COMMERCE / WEB APPLICATION",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=700&fit=crop",
    alt: "Retail payment terminal",
    description:
      "A luxury e-commerce platform with advanced product filtering, secure payment integration, and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    note: "A considered shopping experience, from discovery to checkout.",
  },
  {
    title: "Portfolio Dashboard",
    category: "FINTECH / DASHBOARD",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=700&fit=crop",
    alt: "Analytics charts on a screen",
    description:
      "An investment portfolio dashboard with interactive charts, real-time analytics, and responsive data visualization.",
    tech: ["React", "TypeScript", "Chart.js", "REST API"],
    note: "Complex information. Clearer decisions.",
  },
  {
    title: "Task Management Pro",
    category: "PRODUCTIVITY / WEB APPLICATION",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1000&h=700&fit=crop",
    alt: "Digital planning workspace",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and an intuitive user experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "WebSocket"],
    note: "A shared space to turn plans into progress.",
  },
];
export default function ProjectsSection() {
  return (
    <section id="projects" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow muted">01 / SELECTED WORK</p>
          <h2>
            Ideas, made <span className="serif-word">real.</span>
          </h2>
        </div>
        <p>
          A selection of web experiences.
          <br />
          Built with purpose, down to the pixel.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={p.title} className={`project-card glass project-${i}`}>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="project-visual"
                  aria-label={`View details of ${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width="1000"
                    height="700"
                  />
                  <span className="project-index">0{i + 1}</span>
                  <span className="project-open">
                    <Plus size={24} />
                  </span>
                </button>
              </DialogTrigger>
              <div className="project-body">
                <p className="eyebrow muted">{p.category}</p>
                <h3>
                  <DialogTrigger className="project-title">
                    {p.title}
                    <ArrowUpRight size={23} />
                  </DialogTrigger>
                </h3>
                <p>{p.note}</p>
                <div className="tags">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <DialogContent className="project-dialog">
                <DialogHeader>
                  <DialogTitle>{p.title}</DialogTitle>
                  <DialogDescription>{p.description}</DialogDescription>
                </DialogHeader>
                <img src={p.image} alt={p.alt} />
                <div className="tags">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <p>
                  Interested in the thinking behind this project? Get in touch
                  to discuss the details.
                </p>
                <a
                  className="button primary"
                  href="mailto:waynemwendwa04@gmail.com"
                >
                  Ask about this project <ArrowUpRight size={18} />
                </a>
              </DialogContent>
            </Dialog>
          </article>
        ))}
      </div>
      <a
        className="text-link github-link"
        href="https://github.com/waynemwendwa"
        target="_blank"
        rel="noreferrer"
      >
        More from my corner of GitHub <ArrowUpRight size={18} />
      </a>
    </section>
  );
}
