import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

const items: Array<{ src: string; cls?: string }> = [
  { src: "/images/couple1.jpg", cls: "large" },
  { src: "/images/couple2.jpg", cls: "tall" },
  { src: "/images/couple3.jpg" },
  { src: "/images/couple4.jpg", cls: "wide" },
  { src: "/images/couple5.jpg" },
  { src: "/images/couple6.jpg", cls: "tall" },
  { src: "/images/couple7.jpg", cls: "large" },
  { src: "/images/couple8.jpg" },
  { src: "/images/couple9.jpg", cls: "wide" },
];

const images = items.map(i => i.src);

export default function Gallery() {
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const close = useCallback(() => setLbIndex(null), []);
  const prev = useCallback(() => setLbIndex(i => i !== null ? (i - 1 + images.length) % images.length : null), []);
  const next = useCallback(() => setLbIndex(i => i !== null ? (i + 1) % images.length : null), []);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);
      gsap.from(".dump-item", {
        scrollTrigger: { trigger: ".photo-dump-grid", start: "top 85%", toggleActions: "play none none reverse" },
        y: 40, duration: 1, stagger: 0.1, ease: "power2.out"
      });
    }
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ padding: "clamp(90px, 15vw, 140px) 5% clamp(20px, 4vw, 40px)", textAlign: "center" }}>
        <h1 style={{
          fontFamily: "'Syne'",
          fontSize: "clamp(1.8rem, 8vw, 5rem)",
          opacity: 0.2,
          letterSpacing: "clamp(6px, 2vw, 15px)",
          wordBreak: "break-word"
        }}>MOMENTS</h1>
      </section>

      <section style={{ padding: "0 clamp(12px, 3vw, 20px) clamp(60px, 10vw, 100px)", flex: 1 }}>
        <div className="photo-dump-grid">
          {items.map(({ src, cls }, i) => (
            <div
              key={i}
              className={`dump-item${cls ? " " + cls : ""}`}
              onClick={() => setLbIndex(i)}
              style={{ cursor: "pointer" }}
            >
              <img src={src} alt="Gallery" loading="lazy" />
              <div className="gallery-hover-hint">
                <i className="fas fa-expand" style={{ fontSize: "1.2rem", color: "#fff", opacity: 0.9 }}></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {lbIndex !== null && (
        <Lightbox images={images} index={lbIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </div>
  );
}
