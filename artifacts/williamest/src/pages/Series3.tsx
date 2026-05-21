import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

const archiveImages = [
  "/images/youmaniac1.jpg",
  "/images/youmaniac2.jpg",
  "/images/youmaniac3.jpg",
  "/images/youmaniac4.jpg",
  "/images/youmaniac5.jpg",
];

export default function Series3() {
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const close = useCallback(() => setLbIndex(null), []);
  const prev = useCallback(() => setLbIndex(i => i !== null ? (i - 1 + archiveImages.length) % archiveImages.length : null), []);
  const next = useCallback(() => setLbIndex(i => i !== null ? (i + 1) % archiveImages.length : null), []);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);
    }
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <main style={{ flex: 1 }}>

        {/* Hero */}
        <section style={{
          minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "90px 5% 60px",
          background: "radial-gradient(circle at bottom left, #450a0a, #050505)"
        }}>
          <div style={{
            padding: "clamp(24px, 5vw, 60px)",
            background: "rgba(0,0,0,0.4)", backdropFilter: "blur(30px)",
            border: "1px solid rgba(255,0,0,0.15)", borderRadius: "clamp(20px, 4vw, 40px)",
            maxWidth: "900px", width: "100%", position: "relative"
          }}>
            <div style={{
              position: "absolute", top: "-12px", right: "clamp(12px, 4vw, 40px)",
              background: "#ff0000", color: "#000", padding: "4px 14px",
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
              borderRadius: "4px", letterSpacing: "2px"
            }}>COMING 2026</div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 12vw, 6.5rem)",
              textTransform: "uppercase", margin: "10px 0", lineHeight: 0.85, letterSpacing: "-2px"
            }}>
              YOU<br /><span style={{ color: "#ff0000" }}>MANIAC</span>
            </h1>
            <p style={{ margin: "24px auto", fontSize: "clamp(0.85rem, 2.5vw, 1.2rem)", lineHeight: 1.6, opacity: 0.8, maxWidth: "540px", fontStyle: "italic" }}>
              "red flag x red flag....... a craziest MANIA..."
            </p>
            <div style={{ height: "1px", width: "80px", background: "#ff0000", margin: "30px auto 0" }}></div>
          </div>
        </section>

        {/* Cast */}
        <section className="cast-section" style={{ padding: "clamp(50px, 8vw, 120px) clamp(16px, 5%, 10%)", background: "#050505" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(30px, 5vw, 80px)" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", textTransform: "uppercase", letterSpacing: "-1px" }}>The Leads</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(14px, 3vw, 40px)", flexWrap: "wrap" }}>
            {[
              { src: "/images/william_maniac.jpg", name: "William J.", role: "AS DEAN" },
              { src: "/images/est_maniac.jpg", name: "Est Supha", role: "AS MOTH" },
            ].map(({ src, name, role }) => (
              <div key={name} className="cast-card" style={{ width: "clamp(150px, 40vw, 350px)", position: "relative", overflow: "hidden", borderRadius: "clamp(12px, 2vw, 20px)" }}>
                <img src={src} alt={name} style={{ width: "100%", height: "clamp(220px, 55vw, 500px)", objectFit: "cover", filter: "grayscale(1) contrast(1.1)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "clamp(16px, 3vw, 40px) 16px", background: "linear-gradient(transparent, #000)" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1rem, 3vw, 2rem)", margin: 0 }}>{name}</h3>
                  <p style={{ color: "#ff0000", letterSpacing: "3px", fontSize: "clamp(0.6rem, 1.2vw, 0.8rem)", margin: "4px 0" }}>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Archive */}
        <section style={{ padding: "clamp(40px, 8vw, 100px) clamp(16px, 5%, 8%)", background: "#080808" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(20px, 4vw, 60px)", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.4rem, 4vw, 3rem)", margin: 0, textTransform: "uppercase" }}>Visual Archive</h2>
              <p style={{ opacity: 0.5, letterSpacing: "2px", fontSize: "clamp(0.6rem, 1.2vw, 0.8rem)", marginTop: "6px" }}>BEHIND THE SCENES & STILLS</p>
            </div>
            <div style={{ height: "2px", flex: 1, minWidth: "30px", background: "linear-gradient(to right, #ff0000, transparent)", marginBottom: "14px", marginLeft: "16px" }}></div>
          </div>

          <div className="maniac-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "clamp(130px, 16vw, 240px)",
            gap: "clamp(8px, 1.2vw, 16px)",
          }}>
            {[
              { col: "span 7", row: "span 2", idx: 0 },
              { col: "span 5", row: "span 2", idx: 1 },
              { col: "span 4", row: undefined, idx: 2 },
              { col: "span 4", row: undefined, idx: 3 },
              { col: "span 4", row: undefined, idx: 4 },
            ].map(({ col, row, idx }) => (
              <div
                key={idx}
                className="maniac-grid-item series-lb-item"
                style={{ gridColumn: col, gridRow: row, overflow: "hidden", borderRadius: "clamp(10px, 1.5vw, 18px)", background: "#111" }}
                onClick={() => setLbIndex(idx)}
              >
                <img src={archiveImages[idx]} alt="You Maniac"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.2,1,0.3,1)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")} />
                <div className="gallery-hover-hint"><i className="fas fa-expand" style={{ fontSize: "1.2rem", color: "#fff" }}></i></div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
      {lbIndex !== null && <Lightbox images={archiveImages} index={lbIndex} onClose={close} onPrev={prev} onNext={next} />}
    </div>
  );
}
