import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Series2() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);

      gsap.from(".grid-item", {
        scrollTrigger: { trigger: ".photo-dump", start: "top 70%" },
        y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power2.out"
      });

      const card = document.querySelector('.glass-card');
      const thumbs = document.querySelectorAll('.p-card');
      if (card && thumbs.length >= 3) {
        card.addEventListener('mouseenter', () => {
          gsap.to(thumbs[0], { x: -30, rotate: -20, duration: 0.5 });
          gsap.to(thumbs[2], { x: 30, rotate: 20, duration: 0.5 });
          gsap.to(thumbs[1], { scale: 1.1, duration: 0.5 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(thumbs, { x: 0, scale: 1, rotate: (i: number) => (i === 0 ? -10 : i === 2 ? 10 : 0), duration: 0.5 });
        });
      }
    }
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <section style={{
          height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 10%",
          background: "radial-gradient(circle at top right, #1a1a2e, #050505)"
        }}>
          <div className="glass-card" style={{
            padding: "60px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "40px", maxWidth: "900px"
          }}>
            <span style={{ letterSpacing: "5px", color: "#fed24f", textTransform: "uppercase", fontSize: "0.8rem" }}>completed • 2025</span>
            <h1 style={{ fontFamily: "'Syne'", fontSize: "clamp(3rem, 8vw, 5rem)", textTransform: "uppercase", margin: "20px 0" }}>Me and Thee</h1>
            <p style={{ margin: "0 auto 30px", fontSize: "1.1rem", lineHeight: 2, opacity: 0.7, maxWidth: "700px" }}>
              After a dramatic first encounter, photographer Peach becomes an amateur life coach to wealthy businessman Thee. Fixated on lakorns and out of touch with reality, Khun Thee needs to get a grip.
            </p>
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", alignItems: "flex-end", height: "180px" }}>
              <div className="p-card" style={{ width: "80px", height: "120px", borderRadius: "10px", transform: "rotate(-10deg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/images/me_thee_thumb1.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
              <div className="p-card" style={{ width: "100px", height: "150px", borderRadius: "10px", zIndex: 2, overflow: "hidden", border: "2px solid #fed24f" }}>
                <img src="/images/me_thee_main1.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
              <div className="p-card" style={{ width: "80px", height: "120px", borderRadius: "10px", transform: "rotate(10deg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/images/me_thee_thumb2.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="photo-dump" style={{ padding: "100px 10%" }}>
          <h2 style={{ fontFamily: "'Syne'", fontSize: "2.5rem", marginBottom: "50px" }}>VISUAL ARCHIVE</h2>
          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "250px", gap: "20px" }}>
            <div className="grid-item" style={{ gridColumn: "span 2", gridRow: "span 2" }}><img src="/images/me_thee1.jpg" style={{ borderRadius: "20px" }} alt="" /></div>
            <div className="grid-item" style={{ gridRow: "span 2" }}><img src="/images/me_thee2.jpg" style={{ borderRadius: "20px" }} alt="" /></div>
            <div className="grid-item"><img src="/images/me_thee3.jpg" style={{ borderRadius: "20px" }} alt="" /></div>
            <div className="grid-item"><img src="/images/me_thee4.jpg" style={{ borderRadius: "20px" }} alt="" /></div>
            <div className="grid-item" style={{ gridColumn: "span 3" }}><img src="/images/me_thee5.jpg" style={{ borderRadius: "20px" }} alt="" /></div>
            <div className="grid-item"><img src="/images/me_thee6.jpg" style={{ borderRadius: "20px" }} alt="" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
