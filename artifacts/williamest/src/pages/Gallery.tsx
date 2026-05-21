import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + items.length) % items.length : null), []);
  const next = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % items.length : null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

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
              onClick={() => setLightboxIndex(i)}
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lb-overlay" onClick={close}>
          <div className="lb-inner" onClick={e => e.stopPropagation()}>

            {/* Back button */}
            <button className="lb-back-btn" onClick={close} aria-label="Close">
              <i className="fas fa-arrow-left"></i>
              <span>Back</span>
            </button>

            {/* Counter */}
            <div className="lb-counter">{lightboxIndex + 1} / {items.length}</div>

            {/* Image */}
            <img
              key={lightboxIndex}
              src={items[lightboxIndex].src}
              alt="Full size"
              className="lb-img"
            />

            {/* Prev / Next arrows */}
            <button className="lb-arrow lb-arrow-prev" onClick={prev} aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="lb-arrow lb-arrow-next" onClick={next} aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
