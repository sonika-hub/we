import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Series1() {
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);

      gsap.from(".grid-item", {
        scrollTrigger: { trigger: ".bento-grid", start: "top 75%" },
        y: 60, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out"
      });

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
        <section style={{
          height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 10%",
          background: "radial-gradient(circle at top right, #0a192f, #050505)"
        }}>
          <div ref={glassRef} style={{
            padding: "60px", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(25px)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "40px", maxWidth: "900px", position: "relative"
          }}>
            <span style={{ letterSpacing: "5px", color: "#00f2fe", textTransform: "uppercase", fontSize: "0.8rem", fontWeight: "bold" }}>
              completed • 2025
            </span>
            <h1 style={{ fontFamily: "'Syne'", fontSize: "clamp(3rem, 8vw, 5.5rem)", textTransform: "uppercase", margin: "20px 0", lineHeight: 0.9 }}>
              Thamepo<br />
              <span style={{ fontSize: "0.4em", letterSpacing: "10px", opacity: 0.8, fontWeight: 300 }}>Heart That Skips a Beat</span>
            </h1>
            <p style={{ margin: "0 auto 40px", fontSize: "1.1rem", lineHeight: 1.8, opacity: 0.6, maxWidth: "650px" }}>
              When Po is tasked with documenting boy group Mars's final concert before their disbandment, he inadvertently becomes the closest confidant of leader Thame.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "flex-end", height: "200px", marginTop: "20px" }}>
              <div className="p-card" style={{ width: "90px", height: "130px", borderRadius: "12px", transform: "rotate(-8deg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <img src="/images/thamepothumb1.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} alt="" />
              </div>
              <div className="p-card" style={{ width: "110px", height: "160px", borderRadius: "12px", zIndex: 2, overflow: "hidden", border: "2px solid #00f2fe", boxShadow: "0 0 40px rgba(0,242,254,0.2)" }}>
                <img src="/images/thamepomain.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
              <div className="p-card" style={{ width: "90px", height: "130px", borderRadius: "12px", transform: "rotate(8deg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <img src="/images/thamepothumb2.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "120px 8%", background: "#050505" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne'", fontSize: "3rem", margin: 0, textTransform: "uppercase" }}>The Visual Archive</h2>
              <p style={{ opacity: 0.5, letterSpacing: "2px" }}>BEHIND THE SCENES & STILLS</p>
            </div>
            <div style={{ height: "2px", flex: 1, background: "linear-gradient(to right, #00f2fe, transparent)", margin: "0 40px 15px" }}></div>
          </div>
          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "280px", gap: "25px" }}>
            <div className="grid-item" style={{ gridColumn: "span 2", gridRow: "span 2" }}><img src="/images/thamepo1.jpg" style={{ borderRadius: "24px" }} alt="" /></div>
            <div className="grid-item" style={{ gridRow: "span 2" }}><img src="/images/thamepo2.jpg" style={{ borderRadius: "24px" }} alt="" /></div>
            <div className="grid-item"><img src="/images/thamepo3.jpg" style={{ borderRadius: "24px" }} alt="" /></div>
            <div className="grid-item"><img src="/images/thamepo4.jpg" style={{ borderRadius: "24px" }} alt="" /></div>
            <div className="grid-item" style={{ gridColumn: "span 3" }}><img src="/images/thamepo5.jpg" style={{ borderRadius: "24px" }} alt="" /></div>
            <div className="grid-item"><img src="/images/thamepo6.jpg" style={{ borderRadius: "24px" }} alt="" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
