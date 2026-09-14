import { Smartphone, ArrowUpRight } from "lucide-react";
import mobileImage from "@/assets/mobile-mockup.jpg";
export default function MobileSection() {
  return (
    <section
      className="wrap mobile-section glass"
      aria-labelledby="mobile-title"
    >
      <div className="mobile-copy">
        <p className="eyebrow muted">SMALL SCREEN. SAME AMBITION.</p>
        <h2 id="mobile-title">
          Native by design.
          <br />
          <span className="serif-word">Fluid by nature.</span>
        </h2>
        <p>
          Android applications built with Kotlin, with smooth interactions,
          thoughtful architecture, and security in mind.
        </p>
        <div className="mobile-projects">
          <div>
            <Smartphone size={20} />
            <div>
              <h3>TaskFlow Pro</h3>
              <p>Real-time sync & collaboration</p>
            </div>
          </div>
          <div>
            <Smartphone size={20} />
            <div>
              <h3>FinanceTracker</h3>
              <p>Personal finance & analytics</p>
            </div>
          </div>
        </div>
        <a
          className="text-link"
          href="mailto:waynemwendwa04@gmail.com?subject=Android%20project%20enquiry"
        >
          Let’s talk mobile <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="mobile-art">
        <img
          src={mobileImage}
          alt="Android mobile interface concept"
          loading="lazy"
        />
      </div>
    </section>
  );
}
