import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="wrap site-footer">
      <div className="footer-top">
        <a className="wordmark" href="#homePage" aria-label="Back to top">
          w<span>.</span>
        </a>
        <p>Thoughtful by design. Wayne by name.</p>
        <div>
          {[
            ["GitHub", "https://github.com/waynemwendwa"],
            ["LinkedIn", "https://linkedin.com/in/wayne-matheka-481592374"],
            ["X / Twitter", "https://x.com/teknikalitis"],
          ].map(([name, url]) => (
            <a href={url} key={name} target="_blank" rel="noreferrer">
              {name}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>NAIROBI, KE ↗ EVERYWHERE</span>
        <a href="#homePage">Back to top ↑</a>
      </div>
    </footer>
  );
}
