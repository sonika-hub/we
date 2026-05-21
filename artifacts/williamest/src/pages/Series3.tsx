import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Series3() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);
      gsap.from(".cast-card", {
        scrollTrigger: { trigger: ".cast-section", start: "top 70%" },
        y: 100, opacity: 0, stagger: 0.3, duration: 1.2, ease: "power4.out"
      });
      gsap.from(".maniac-grid-item", {
        scrollTrigger: { trigger: ".maniac-grid", start: "top 75%" },
        y: 60, opacity: 0, stagger: 0.12, duration: 1, ease: "power3.out"
      });
    }
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <main style={{ flex: 1 }}>

        {/* Hero */}
        <section style={{
          minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "100px 5% 60px",
          background: "radial-gradient(circle at bottom left, #450a0a, #050505)"
        }}>
          <div style={{
            padding: "clamp(30px, 5vw, 60px)",
            background: "rgba(0,0,0,0.4)", backdropFilter: "blur(30px)",
            border: "1px solid rgba(255,0,0,0.15)", borderRadius: "40px",
            maxWidth: "900px", width: "100%", position: "relative"
          }}>
            <div style={{
              position: "absolute", top: "-10px", right: "clamp(15px, 4vw, 40px)",
              background: "#ff0000", color: "#000", padding: "5px 15px",
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.7rem",
              borderRadius: "4px", letterSpacing: "2px"
            }}>COMING 2026</div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 10vw, 6.5rem)",
              textTransform: "uppercase", margin: "10px 0", lineHeight: 0.8, letterSpacing: "-3px"
            }}>
              YOU<br /><span style={{ color: "#ff0000" }}>MANIAC</span>
            </h1>
            <p style={{ margin: "30px auto", fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.6, opacity: 0.8, maxWidth: "600px", fontWeight: 300, fontStyle: "italic" }}>
              "red flag x red flag....... a craziest MANIA..."
            </p>
            <div style={{ height: "1px", width: "100px", background: "#ff0000", margin: "40px auto" }}></div>
          </div>
        </section>

        {/* Cast */}
        <section className="cast-section" style={{ padding: "clamp(60px, 10vw, 120px) 5%", background: "#050505" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 80px)" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", textTransform: "uppercase", letterSpacing: "-1px" }}>The Leads</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(15px, 3vw, 40px)", flexWrap: "wrap" }}>
            {[
              { src: "/images/william_maniac.jpg", name: "William J.", role: "AS DEAN" },
              { src: "/images/est_maniac.jpg", name: "Est Supha", role: "AS MOTH" },
            ].map(({ src, name, role }) => (
              <div key={name} className="cast-card" style={{ width: "clamp(200px, 40vw, 350px)", position: "relative", overflow: "hidden", borderRadius: "20px" }}>
                <img src={src} alt={name} style={{ width: "100%", height: "clamp(280px, 50vw, 500px)", objectFit: "cover", filter: "grayscale(1) contrast(1.1)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "clamp(20px, 4vw, 40px) 20px", background: "linear-gradient(transparent, #000)" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.2rem, 3vw, 2rem)", margin: 0 }}>{name}</h3>
                  <p style={{ color: "#ff0000", letterSpacing: "3px", fontSize: "0.8rem", margin: "5px 0" }}>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Archive */}
        <section style={{ padding: "clamp(40px, 8vw, 100px) 5%", background: "#080808" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(30px, 5vw, 60px)", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", margin: 0, textTransform: "uppercase" }}>Visual Archive</h2>
              <p style={{ opacity: 0.5, letterSpacing: "2px", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", marginTop: "6px" }}>BEHIND THE SCENES & STILLS</p>
            </div>
            <div style={{ height: "2px", flex: 1, minWidth: "40px", background: "linear-gradient(to right, #ff0000, transparent)", marginBottom: "15px", marginLeft: "20px" }}></div>
          </div>

          {/* Responsive bento grid */}
          <div className="maniac-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "clamp(140px, 18vw, 260px)",
            gap: "clamp(8px, 1.5vw, 20px)",
          }}>
            {/* Row 1: large left (spans 7 cols, 2 rows) + tall right (spans 5 cols, 2 rows) */}
            <div className="maniac-grid-item" style={{ gridColumn: "span 7", gridRow: "span 2", overflow: "hidden", borderRadius: "clamp(10px,1.5vw,20px)", background: "#111" }}>
              <img src="/images/youmaniac1.jpg" alt="You Maniac" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.2,1,0.3,1)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")} />
            </div>
            <div className="maniac-grid-item" style={{ gridColumn: "span 5", gridRow: "span 2", overflow: "hidden", borderRadius: "clamp(10px,1.5vw,20px)", background: "#111" }}>
              <img src="/images/youmaniac2.jpg" alt="You Maniac" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.2,1,0.3,1)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")} />
            </div>

            {/* Row 3: three equal columns */}
            <div className="maniac-grid-item" style={{ gridColumn: "span 4", overflow: "hidden", borderRadius: "clamp(10px,1.5vw,20px)", background: "#111" }}>
              <img src="/images/youmaniac3.jpg" alt="You Maniac" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.2,1,0.3,1)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")} />
            </div>
            <div className="maniac-grid-item" style={{ gridColumn: "span 4", overflow: "hidden", borderRadius: "clamp(10px,1.5vw,20px)", background: "#111" }}>
              <img src="/images/youmaniac4.jpg" alt="You Maniac" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.2,1,0.3,1)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")} />
            </div>
            <div className="maniac-grid-item" style={{ gridColumn: "span 4", overflow: "hidden", borderRadius: "clamp(10px,1.5vw,20px)", background: "#111" }}>
              <img src="/images/youmaniac5.jpg" alt="You Maniac" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.2,1,0.3,1)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")} />
            </div>
          </div>

          {/* Mobile fallback: single column stack on very small screens */}
          <style>{`
            @media (max-width: 600px) {
              .maniac-grid {
                grid-template-columns: 1fr 1fr !important;
                grid-auto-rows: 200px !important;
              }
              .maniac-grid > div {
                grid-column: span 1 !important;
                grid-row: span 1 !important;
              }
            }
            @media (min-width: 601px) and (max-width: 900px) {
              .maniac-grid {
                grid-template-columns: repeat(6, 1fr) !important;
                grid-auto-rows: clamp(150px, 22vw, 220px) !important;
              }
              .maniac-grid > div:nth-child(1) { grid-column: span 3 !important; grid-row: span 2 !important; }
              .maniac-grid > div:nth-child(2) { grid-column: span 3 !important; grid-row: span 2 !important; }
              .maniac-grid > div:nth-child(3) { grid-column: span 2 !important; grid-row: span 1 !important; }
              .maniac-grid > div:nth-child(4) { grid-column: span 2 !important; grid-row: span 1 !important; }
              .maniac-grid > div:nth-child(5) { grid-column: span 2 !important; grid-row: span 1 !important; }
            }
          `}</style>
        </section>

      </main>
      <Footer />
    </div>
  );
}
