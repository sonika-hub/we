import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".glass-card", { duration: 1.2, y: 30, opacity: 0, ease: "expo.out" });
    }
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px 60px" }}>
        <section style={{ width: "100%", maxWidth: "600px" }}>
          <div className="glass-card" style={{
            padding: "50px",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "30px",
            textAlign: "center"
          }}>
            <div style={{
              width: "80px", height: "80px", lineHeight: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              margin: "0 auto 30px",
              fontFamily: "'Syne', sans-serif",
              fontSize: "2rem", fontWeight: 800, color: "#000",
              boxShadow: "0 10px 30px rgba(79, 172, 254, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>SP</div>

            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.2rem", margin: 0, letterSpacing: "-1px" }}>SONIKA P</h2>
            <p style={{ color: "#4facfe", letterSpacing: "4px", fontSize: "0.8rem", marginTop: "10px", fontWeight: "bold", textTransform: "uppercase" }}>
              Cybersecurity student
            </p>

            <div style={{ width: "30px", height: "2px", background: "#333", margin: "30px auto" }}></div>

            <p style={{ lineHeight: 1.8, opacity: 0.7, fontSize: "1.05rem", marginBottom: "40px" }}>
              Crafting digital spaces for the stories we love.<br />
              Created with ❤️ for the BL community.
            </p>

            <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
              <a href="https://www.instagram.com/_sonika_p_/" target="_blank" rel="noreferrer"
                style={{ color: "#fff", fontSize: "1.8rem", transition: "0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4facfe")}
                onMouseLeave={e => (e.currentTarget.style.color = "#fff")}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com/Willyfan98" target="_blank" rel="noreferrer"
                style={{ color: "#fff", fontSize: "1.8rem", transition: "0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4facfe")}
                onMouseLeave={e => (e.currentTarget.style.color = "#fff")}>
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
