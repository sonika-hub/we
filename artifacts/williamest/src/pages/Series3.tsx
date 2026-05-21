import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Series3() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);
      gsap.from(".cast-card", {
        scrollTrigger: { trigger: ".cast-section", start: "top 70%" },
        y: 100, opacity: 0, stagger: 0.3, duration: 1.2, ease: "power4.out"
      });
    }
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <section style={{
          height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 10%",
          background: "radial-gradient(circle at bottom left, #450a0a, #050505)"
        }}>
          <div style={{
            padding: "60px", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(30px)",
            border: "1px solid rgba(255,0,0,0.15)", borderRadius: "40px",
            maxWidth: "900px", position: "relative"
          }}>
            <div style={{
              position: "absolute", top: "-10px", right: "40px",
              background: "#ff0000", color: "#000", padding: "5px 15px",
              fontFamily: "'Syne'", fontWeight: 800, fontSize: "0.7rem",
              borderRadius: "4px", letterSpacing: "2px"
            }}>COMING 2026</div>

            <h1 style={{
              fontFamily: "'Syne'", fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
              textTransform: "uppercase", margin: "10px 0", lineHeight: 0.8, letterSpacing: "-3px"
            }}>
              YOU<br /><span style={{ color: "#ff0000" }}>MANIAC</span>
            </h1>
            <p style={{ margin: "30px auto", fontSize: "1.2rem", lineHeight: 1.6, opacity: 0.8, maxWidth: "600px", fontWeight: 300, fontStyle: "italic" }}>
              "red flag x red flag....... a craziest MANIA..."
            </p>
            <div style={{ height: "1px", width: "100px", background: "#ff0000", margin: "40px auto" }}></div>
          </div>
        </section>

        <section className="cast-section" style={{ padding: "120px 10%", background: "#050505" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "'Syne'", fontSize: "3rem", textTransform: "uppercase", letterSpacing: "-1px" }}>The Leads</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
            {[
              { src: "/images/william_maniac.jpg", name: "William J.", role: "AS DEAN" },
              { src: "/images/est_maniac.jpg", name: "Est Supha", role: "AS MOTH" },
            ].map(({ src, name, role }) => (
              <div key={name} className="cast-card" style={{ width: "350px", position: "relative", overflow: "hidden", borderRadius: "20px" }}>
                <img src={src} alt={name} style={{ width: "100%", height: "500px", objectFit: "cover", filter: "grayscale(1) contrast(1.1)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "40px 20px", background: "linear-gradient(transparent, #000)" }}>
                  <h3 style={{ fontFamily: "'Syne'", fontSize: "2rem", margin: 0 }}>{name}</h3>
                  <p style={{ color: "#ff0000", letterSpacing: "3px", fontSize: "0.8rem", margin: "5px 0" }}>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
