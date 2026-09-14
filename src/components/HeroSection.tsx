import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Code2 } from "lucide-react";
import portrait from "@/assets/wayne-portrait.webp";
export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#homePage">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a
          href="#homePage"
          className="wordmark"
          aria-label="Wayne Mwendwa home"
        >
          w<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav glass">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={17} />
        </a>
        <button
          className="menu-button glass"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav glass"
            aria-label="Mobile navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {["Work", "About", "Expertise", "Contact"].map((label, i) => (
              <a
                key={label}
                href={["#projects", "#about", "#skills", "#contact"][i]}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <section id="homePage" className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS
          </div>
          <h1 id="hero-title">
            Beyond the ordinary.
            <br /><span className="serif-word">Into possibility.</span>
          </h1>
          <p className="intro">
            I’m Wayne Mwendwa, a full-stack developer turning ambitious ideas
            into distinctive digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowDown size={18} />
            </a>
            <a className="text-link" href="#contact">
              Let’s build something <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="hero-footnote">
            <span>BASED IN NAIROBI, KENYA</span>
            <span>BUILDING FOR THE WORLD</span>
          </div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-back glass" aria-hidden="true" />
          <div className="portrait-card glass">
            <div className="portrait-top">
              <span>YOUR DEVELOPER IN THIS UNIVERSE</span>
              <span>01 / WM</span>
            </div>
            <div className="portrait-image">
              <img
                src={portrait}
                alt="Wayne Mwendwa, full-stack developer"
                loading="eager"
                width="4016"
                height="6016"
              />
              <div className="portrait-caption">
                <strong>Wayne Mwendwa</strong>
                <span>Developer. Thinker. Maker.</span>
              </div>
            </div>
            <div className="portrait-bottom">
              <span>FULL-STACK DEVELOPER</span>
              <ArrowUpRight size={18} />
            </div>
          </div>
          <div className="floating-note glass">
            <Code2 size={22} />
            <div>
              Thoughtfully designed.
              <br />
              <strong>Precisely built.</strong>
            </div>
          </div>
          <span className="composition-label" aria-hidden="true">
            CRAFT × CODE × CURIOSITY
          </span>
        </div>
      </section>
      <div className="stack-strip">
        <div className="wrap">
          <span className="strip-label">FROM INTERFACE TO INFRASTRUCTURE</span>
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Kotlin</span>
          <span className="strip-star" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
    </>
  );
}
