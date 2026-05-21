import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Artist2() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".image-frame", { duration: 1.5, x: -50, opacity: 0, ease: "power4.out" });
      gsap.from(".side-title h1", { duration: 1.2, y: 100, opacity: 0, delay: 0.3 });
      gsap.from(".social-links", { duration: 1, y: 20, opacity: 0, delay: 0.8 });
    }
  }, []);

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "100px" }}>
        <div style={{ display: "flex", minHeight: "100vh" }} className="artist-detail-container">
          <div className="side-title" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            padding: "40px", borderRight: "1px solid #333",
            display: "flex", justifyContent: "center",
            minWidth: "80px"
          }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "8vw", margin: 0, color: "#1a1a1a", whiteSpace: "nowrap" }}>EST SUPHA</h1>
          </div>

          <div className="main-content" style={{ padding: "20px 5% 100px", flex: 1 }}>
            <div className="image-frame" style={{ position: "relative", width: "100%", maxWidth: "600px", marginBottom: "50px" }}>
              <img src="/images/artist2.jpg" style={{ width: "100%", filter: "sepia(0.2) brightness(0.9)", borderRadius: "4px" }} alt="Est Supha" />
              <div style={{ position: "absolute", top: "-15px", left: "-15px", width: "100%", height: "100%", border: "1px solid var(--accent)", zIndex: -1 }}></div>
            </div>

            <h2 style={{ fontFamily: "'Syne'", fontSize: "clamp(1.5rem, 4vw, 3rem)", color: "var(--accent)", fontWeight: "bold" }}>The Waterline Icon</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "750px", opacity: 0.8, marginBottom: "40px" }}>
              Est Supha Sangaworawong is a Thai actor and former national swimmer who went from breaking records in the pool to breaking hearts on-screen. Born in Bangkok in 2001, he's signed under GMMTV and is best known for playing Po in ThamePo: Heart That Skips a Beat and Tew in High School Frenemy.
              <br /><br />
              Est switched lanes from sports to entertainment and ended up becoming one of GMMTV's fastest-rising BL actors, especially after teaming up with William Jakrapatr Kaewpanpong, where their chemistry basically took over the internet.
              <br /><br />
              Outside acting, Est is surprisingly business-savvy. He's the CEO of Middle Riddle, a clothing brand known for clean, modern designs, and recently opened Haus The Bloom, a flower shop that reflects his softer, aesthetic side.
            </p>

            <div className="social-links" style={{ display: "flex", gap: "30px", alignItems: "center", flexWrap: "wrap" }}>
              {[
                { href: "https://www.instagram.com/est_rvp/", icon: "fa-instagram" },
                { href: "https://x.com/EstRvp", icon: "fa-x-twitter" },
                { href: "https://www.tiktok.com/@est_rvp", icon: "fa-tiktok" },
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
