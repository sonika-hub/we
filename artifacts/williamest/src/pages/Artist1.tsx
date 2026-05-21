import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Artist1() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".image-frame", { duration: 2, x: -50, opacity: 0, ease: "power4.out" });
      gsap.from(".side-title h1", { duration: 1.5, y: 100, opacity: 0, delay: 0.5 });
      gsap.from(".social-links", { duration: 1, y: 20, opacity: 0, delay: 1 });
    }
  }, []);

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "100px" }}>
        <div style={{ display: "flex", minHeight: "100vh" }} className="artist-detail-container">
          <div className="side-title" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            padding: "40px", borderRight: "1px solid #333",
            display: "flex", justifyContent: "center",
            minWidth: "80px"
          }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "8vw", margin: 0, color: "#1a1a1a", whiteSpace: "nowrap" }}>WILLIAM J.</h1>
          </div>

          <div className="main-content" style={{ padding: "60px 5% 100px", flex: 1 }}>
            <div className="image-frame" style={{ position: "relative", width: "100%", maxWidth: "600px", marginBottom: "50px" }}>
              <img src="/images/artist1.jpg" style={{ width: "100%", filter: "sepia(0.2) brightness(0.9)", borderRadius: "4px" }} alt="William Jakrapatr" />
              <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "100%", height: "100%", border: "1px solid var(--accent)", zIndex: -1 }}></div>
            </div>

            <h2 style={{ fontFamily: "'Syne'", fontSize: "3rem", color: "var(--accent)" }}>The "lungs" of new gen T-pop</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "650px", opacity: 0.8, marginBottom: "40px" }}>
              William Jakrapatr Kaewpanpong is a Thai-American singer, actor, guitarist, pianist — and the main powerhouse vocalist of LYKN under GMMTV. Most people first noticed him in ThamePo: Heart That Skips a Beat, where he completely blew up with his emotional acting, insane live vocals, and effortless chemistry with Est Supha Sangaworawong.
              <br /><br />
              He came into the spotlight through Project Alpha (2023), debuted with LYKN in 2024, and fans instantly crowned him the "Lungs of T-Pop" because his voice hits hard. His OSTs like 5CM, Good Time, and Love Echo went viral across platforms.
              <br /><br />
              Outside of music and acting, William is huge online — millions of followers, nonstop trending tags, viral TikToks, and fanmeets that sell out from Bangkok to Tokyo under the WilliamEst name.
              <br /><br />
              And on top of all that? At just 20 years old, he became the CEO of his own clothing brand Zaven, proving he's not just talented — he's business-smart and building his own lane.
            </p>

            <div className="social-links" style={{ display: "flex", gap: "30px", alignItems: "center", marginBottom: "60px" }}>
              {[
                { href: "https://www.instagram.com/williamjkp/", icon: "fa-instagram" },
                { href: "https://x.com/Williamjkp1", icon: "fa-x-twitter" },
                { href: "https://www.tiktok.com/@william_jkp1", icon: "fa-tiktok" },
              ].map(({ href, icon }) => (
                <a key={icon} href={href} target="_blank" rel="noreferrer"
                  style={{ color: "#fff", fontSize: "1.5rem", transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget.style.color = "#00f2fe"); (e.currentTarget.style.transform = "scale(1.2)"); }}
                  onMouseLeave={e => { (e.currentTarget.style.color = "#fff"); (e.currentTarget.style.transform = "scale(1)"); }}>
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
              <div style={{ height: "1px", width: "50px", background: "rgba(255,255,255,0.2)" }}></div>
              <span style={{ fontFamily: "'Syne'", fontSize: "0.8rem", letterSpacing: "3px", opacity: 0.5 }}>FOLLOW</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
