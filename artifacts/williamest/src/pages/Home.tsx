import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".hero .title", { duration: 1.5, y: 60, opacity: 0, ease: "power4.out" });
      gsap.from(".hero .divider", { duration: 1, scaleX: 0, opacity: 0, delay: 0.5, ease: "power2.out" });
      gsap.from(".hero .subtitle", { duration: 1, y: 20, opacity: 0, delay: 0.8 });
    }
  }, []);

  return (
    <div className="home-page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <header className="hero" style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
      }}>
        <h1 className="title" style={{ fontSize: "5rem", marginBottom: 0 }}>WILLIAMEST</h1>
        <div className="divider" style={{ width: "100px", height: "2px", background: "var(--accent)", margin: "20px 0" }}></div>
        <p className="subtitle" style={{ opacity: 0.7, fontSize: "1.2rem" }}>Powerhouse of GMMTV</p>
      </header>
      <Footer />
    </div>
  );
}
