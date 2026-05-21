import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const socials = [
  {
    href: "https://www.instagram.com/williamjkp/",
    icon: "fa-instagram",
    label: "Instagram",
    handle: "@williamjkp",
    color: "#e1306c",
    bg: "rgba(225,48,108,0.1)",
  },
  {
    href: "https://x.com/Williamjkp1",
    icon: "fa-x-twitter",
    label: "X",
    handle: "@Williamjkp1",
    color: "#fff",
    bg: "rgba(255,255,255,0.07)",
  },
  {
    href: "https://www.tiktok.com/@william_jkp1",
    icon: "fa-tiktok",
    label: "TikTok",
    handle: "@william_jkp1",
    color: "#69c9d0",
    bg: "rgba(105,201,208,0.1)",
  },
];

export default function Artist1() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".image-frame-wrapper", { duration: 2, x: -50, opacity: 0, ease: "power4.out" });
      gsap.from(".side-title-col h1", { duration: 1.5, y: 100, opacity: 0, delay: 0.5 });
      gsap.from(".social-pill", { duration: 0.6, y: 16, stagger: 0.12, delay: 1, ease: "power3.out" });
    }
  }, []);

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "70px" }}>
        <div className="artist-detail-layout">
          <div className="side-title-col">
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "8vw", margin: 0, color: "#1a1a1a", whiteSpace: "nowrap" }}>WILLIAM J.</h1>
          </div>

          <div className="artist-main-content">
            <div className="image-frame-wrapper">
              <div className="image-frame-deco"></div>
              <img src="/images/artist1.jpg" alt="William Jakrapatr" />
            </div>

            <h2 style={{ fontFamily: "'Syne'", fontSize: "clamp(1.4rem, 4vw, 3rem)", color: "var(--accent)", marginBottom: "20px" }}>The "lungs" of new gen T-pop</h2>
            <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: 1.8, maxWidth: "650px", opacity: 0.8, marginBottom: "40px" }}>
              William Jakrapatr Kaewpanpong is a Thai-American singer, actor, guitarist, pianist — and the main powerhouse vocalist of LYKN under GMMTV. Most people first noticed him in ThamePo: Heart That Skips a Beat, where he completely blew up with his emotional acting, insane live vocals, and effortless chemistry with Est Supha Sangaworawong.
              <br /><br />
              He came into the spotlight through Project Alpha (2023), debuted with LYKN in 2024, and fans instantly crowned him the "Lungs of T-Pop" because his voice hits hard. His OSTs like 5CM, Good Time, and Love Echo went viral across platforms.
              <br /><br />
              Outside of music and acting, William is huge online — millions of followers, nonstop trending tags, viral TikToks, and fanmeets that sell out from Bangkok to Tokyo under the WilliamEst name. At just 20 years old, he became the CEO of his own clothing brand Zaven.
            </p>

            <div className="social-links-section">
              <span className="social-follow-label">Follow William</span>
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
