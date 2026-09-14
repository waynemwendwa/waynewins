import { ArrowUpRight, Asterisk } from "lucide-react";
export default function AboutSection() {
  return (
    <section id="about" className="section wrap about-section">
      <div>
        <p className="eyebrow muted">02 / THE APPROACH</p>
        <Asterisk className="about-asterisk" strokeWidth={1} />
        <span className="small-label">
          A MIND FOR THE DETAILS.
          <br />
          AN EYE ON THE BIG PICTURE.
        </span>
      </div>
      <div>
        <h2>
          Good code is invisible.
          <br />
          <span className="serif-word">Great experiences aren’t.</span>
        </h2>
        <p className="about-lead">
          I’m Wayne, a developer who cares as much about how a product feels as
          how it works.
        </p>
        <p>
          From a first sketch to the final interaction, I bring design
          sensitivity and engineering precision to the same table. I build
          across the web and Android—connecting thoughtful interfaces with the
          systems behind them.
        </p>
        <a className="text-link" href="#contact">
          Have an idea in mind? <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
