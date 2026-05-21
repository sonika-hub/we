import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

const archiveImages = [
  "/images/thamepo1.jpg",
  "/images/thamepo2.jpg",
  "/images/thamepo3.jpg",
  "/images/thamepo4.jpg",
  "/images/thamepo5.jpg",
  "/images/thamepo6.jpg",
];

export default function Series1() {
  const glassRef = useRef<HTMLDivElement>(null);
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const close = useCallback(() => setLbIndex(null), []);
  const prev = useCallback(() => setLbIndex(i => i !== null ? (i - 1 + archiveImages.length) % archiveImages.length : null), []);
  const next = useCallback(() => setLbIndex(i => i !== null ? (i + 1) % archiveImages.length : null), []);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);

      const cards = document.querySelectorAll('.p-card');
      const glass = glassRef.current;
      if (glass && cards.length >= 3) {
        glass.addEventListener('mouseenter', () => {
          gsap.to(cards[0], { x: -40, rotate: -20, duration: 0.7, ease: "power2.out" });
          gsap.to(cards[2], { x: 40, rotate: 20, duration: 0.7, ease: "power2.out" });
          gsap.to(cards[1], { y: -10, scale: 1.05, duration: 0.7, ease: "power2.out" });
        });
        glass.addEventListener('mouseleave', () => {
          gsap.to(cards[0], { x: 0, rotate: -8, duration: 0.7 });
          gsap.to(cards[2], { x: 0, rotate: 8, duration: 0.7 });
          gsap.to(cards[1], { y: 0, scale: 1, duration: 0.7 });
        });
      }
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
          background: "radial-gradient(circle at top right, #0a192f, #050505)"
        }}>
          <div ref={glassRef} style={{
            padding: "clamp(24px, 5vw, 60px)",
            background: "rgba(255,255,255,0.02)", backdropFilter: "blur(25px)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "clamp(20px, 4vw, 40px)",
            maxWidth: "900px", width: "100%", position: "relative"
          }}>
            <span style={{ letterSpacing: "5px", color: "#00f2fe", textTransform: "uppercase", fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)", fontWeight: "bold" }}>
              completed • 2025
            </span>
            <h1 style={{ fontFamily: "'Syne'", fontSize: "clamp(2.2rem, 8vw, 5.5rem)", textTransform: "uppercase", margin: "16px 0", lineHeight: 0.9 }}>
              Thamepo<br />
              <span style={{ fontSize: "0.4em", letterSpacing: "clamp(2px, 2vw, 10px)", opacity: 0.8, fontWeight: 300 }}>Heart That Skips a Beat</span>
            </h1>
            <p style={{ margin: "0 auto 32px", fontSize: "clamp(0.85rem, 2vw, 1.1rem)", lineHeight: 1.8, opacity: 0.6, maxWidth: "650px" }}>
              When Po is tasked with documenting boy group Mars's final concert before their disbandment, he inadvertently becomes the closest confidant of leader Thame.
            </p>
            <div style={{ display: "flex", gap: "clamp(8px, 2vw, 20px)", justifyContent: "center", alignItems: "flex-end", height: "clamp(130px, 22vw, 200px)", marginTop: "20px" }}>
              <div className="p-card" style={{ width: "clamp(55px, 9vw, 90px)", height: "clamp(80px, 13vw, 130px)", borderRadius: "12px", transform: "rotate(-8deg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/images/thamepothumb1.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} alt="" />
              </div>
              <div className="p-card" style={{ width: "clamp(70px, 11vw, 110px)", height: "clamp(100px, 16vw, 160px)", borderRadius: "12px", zIndex: 2, overflow: "hidden", border: "2px solid #00f2fe", boxShadow: "0 0 40px rgba(0,242,254,0.2)" }}>
                <img src="/images/thamepomain.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
              <div className="p-card" style={{ width: "clamp(55px, 9vw, 90px)", height: "clamp(80px, 13vw, 130px)", borderRadius: "12px", transform: "rotate(8deg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/images/thamepothumb2.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Archive */}
        <section style={{ padding: "clamp(40px, 8vw, 120px) clamp(16px, 5%, 8%)", background: "#050505" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(24px, 4vw, 60px)", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne'", fontSize: "clamp(1.4rem, 4vw, 3rem)", margin: 0, textTransform: "uppercase" }}>The Visual Archive</h2>
              <p style={{ opacity: 0.5, letterSpacing: "2px", fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)", marginTop: "6px" }}>BEHIND THE SCENES & STILLS</p>
            </div>
            <div style={{ height: "2px", flex: 1, minWidth: "30px", background: "linear-gradient(to right, #00f2fe, transparent)", margin: "0 20px 14px" }}></div>
          </div>
          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "clamp(120px, 18vw, 280px)", gap: "clamp(8px, 1.5vw, 25px)" }}>
            {[
              { style: { gridColumn: "span 2", gridRow: "span 2" }, idx: 0 },
              { style: { gridRow: "span 2" }, idx: 1 },
              { style: {}, idx: 2 },
              { style: {}, idx: 3 },
              { style: { gridColumn: "span 3" }, idx: 4 },
              { style: {}, idx: 5 },
            ].map(({ style, idx }) => (
              <div key={idx} className="grid-item series-lb-item" style={style} onClick={() => setLbIndex(idx)}>
                <img src={archiveImages[idx]} alt="" />
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
