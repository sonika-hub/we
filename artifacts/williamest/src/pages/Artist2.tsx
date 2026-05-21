import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const socials = [
  {
    href: "https://www.instagram.com/est_rvp/",
    icon: "fa-instagram",
    label: "Instagram",
    handle: "@est_rvp",
    color: "#e1306c",
    bg: "rgba(225,48,108,0.1)",
  },
  {
    href: "https://x.com/EstRvp",
    icon: "fa-x-twitter",
    label: "X",
    handle: "@EstRvp",
    color: "#fff",
    bg: "rgba(255,255,255,0.07)",
  },
  {
    href: "https://www.tiktok.com/@est_rvp",
    icon: "fa-tiktok",
    label: "TikTok",
    handle: "@est_rvp",
    color: "#69c9d0",
    bg: "rgba(105,201,208,0.1)",
  },
];

export default function Artist2() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".image-frame-wrapper", { duration: 1.5, x: -50, opacity: 0, ease: "power4.out" });
      gsap.from(".side-title-col h1", { duration: 1.2, y: 100, opacity: 0, delay: 0.3 });
      gsap.from(".social-pill", { duration: 0.6, y: 16, stagger: 0.12, delay: 0.8, ease: "power3.out" });
    }
  }, []);

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "70px" }}>
        <div className="artist-detail-layout">
          <div className="side-title-col">
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "8vw", margin: 0, color: "#1a1a1a", whiteSpace: "nowrap" }}>EST SUPHA</h1>
          </div>

          <div className="artist-main-content">
            <div className="image-frame-wrapper">
              <div className="image-frame-deco"></div>
              <img src="/images/artist2.jpg" alt="Est Supha" />
            </div>

            <h2 style={{ fontFamily: "'Syne'", fontSize: "clamp(1.4rem, 4vw, 3rem)", color: "var(--accent)", fontWeight: "bold", marginBottom: "20px" }}>The Waterline Icon</h2>
            <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: 1.8, maxWidth: "750px", opacity: 0.8, marginBottom: "40px" }}>
              Est Supha Sangaworawong is a Thai actor and former national swimmer who went from breaking records in the pool to breaking hearts on-screen. Born in Bangkok in 2001, he's signed under GMMTV and is best known for playing Po in ThamePo: Heart That Skips a Beat and Tew in High School Frenemy.
              <br /><br />
              Est switched lanes from sports to entertainment and ended up becoming one of GMMTV's fastest-rising BL actors, especially after teaming up with William Jakrapatr Kaewpanpong, where their chemistry basically took over the internet.
              <br /><br />
              Outside acting, Est is the CEO of Middle Riddle, a clothing brand known for clean, modern designs, and recently opened Haus The Bloom, a flower shop that reflects his softer, aesthetic side.
            </p>

            <div className="social-links-section">
              <span className="social-follow-label">Follow Est</span>
              <div className="social-pills-row">
                {socials.map(({ href, icon, label, handle, color, bg }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill"
                    style={{ "--pill-color": color, "--pill-bg": bg } as React.CSSProperties}
                  >
                    <i className={`fab ${icon} social-pill-icon`}></i>
                    <div className="social-pill-text">
                      <span className="social-pill-platform">{label}</span>
                      <span className="social-pill-handle">{handle}</span>
                    </div>
                    <i className="fas fa-arrow-up-right-from-square social-pill-arrow"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
