import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);
      gsap.from(".dump-item", {
        scrollTrigger: {
          trigger: ".photo-dump-grid",
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power2.out"
      });
    }
  }, []);

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

  return (
    <div className="gallery-page" style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <section style={{ padding: "120px 5% 40px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Syne'", fontSize: "clamp(2rem, 8vw, 5rem)", opacity: 0.2, letterSpacing: "15px" }}>MOMENTS</h1>
      </section>
      <section style={{ padding: "0 20px 100px", flex: 1 }}>
        <div className="photo-dump-grid">
          {items.map(({ src, cls }, i) => (
            <div key={i} className={`dump-item${cls ? " " + cls : ""}`}>
              <img src={src} alt="Gallery" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
