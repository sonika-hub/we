import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".hero-title", { duration: 1.5, y: 60, opacity: 0, ease: "power4.out" });
      gsap.from(".hero-divider", { duration: 1, scaleX: 0, opacity: 0, delay: 0.5, ease: "power2.out" });
      gsap.from(".hero-subtitle", { duration: 1, y: 20, opacity: 0, delay: 0.8 });
    }
  }, []);

  return (
    <div className="home-page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}>
      <Navbar />
      <header style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 24px 24px",
      }}>
        <h1 className="hero-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.5rem, 12vw, 7rem)",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "clamp(2px, 1vw, 6px)",
          lineHeight: 1,
          marginBottom: 0,
          wordBreak: "break-word",
          maxWidth: "100%",
        }}>WILLIAMEST</h1>
        <div className="hero-divider" style={{ width: "80px", height: "2px", background: "var(--accent)", margin: "20px 0" }}></div>
        <p className="hero-subtitle" style={{ opacity: 0.7, fontSize: "clamp(0.85rem, 3vw, 1.2rem)", letterSpacing: "2px" }}>Powerhouse of GMMTV</p>
      </header>
      <Footer />
    </div>
  );
}
