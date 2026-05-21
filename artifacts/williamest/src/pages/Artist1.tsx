import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Artist1() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".image-frame-wrapper", { duration: 2, x: -50, opacity: 0, ease: "power4.out" });
      gsap.from(".side-title-col h1", { duration: 1.5, y: 100, opacity: 0, delay: 0.5 });
      gsap.from(".social-links", { duration: 1, y: 20, opacity: 0, delay: 1 });
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

            <div className="social-links" style={{ display: "flex", gap: "clamp(16px, 4vw, 30px)", alignItems: "center", flexWrap: "wrap", marginBottom: "60px" }}>
              {[
                { href: "https://www.instagram.com/williamjkp/", icon: "fa-instagram" },
                { href: "https://x.com/Williamjkp1", icon: "fa-x-twitter" },
                { href: "https://www.tiktok.com/@william_jkp1", icon: "fa-tiktok" },
              ].map(({ href, icon }) => (
                <a key={icon} href={href} target="_blank" rel="noreferrer"
                  style={{ color: "#fff", fontSize: "clamp(1.2rem, 3vw, 1.5rem)", transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget.style.color = "#00f2fe"); (e.currentTarget.style.transform = "scale(1.2)"); }}
                  onMouseLeave={e => { (e.currentTarget.style.color = "#fff"); (e.currentTarget.style.transform = "scale(1)"); }}>
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
              <div style={{ height: "1px", width: "40px", background: "rgba(255,255,255,0.2)" }}></div>
              <span style={{ fontFamily: "'Syne'", fontSize: "0.75rem", letterSpacing: "3px", opacity: 0.5 }}>FOLLOW</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
