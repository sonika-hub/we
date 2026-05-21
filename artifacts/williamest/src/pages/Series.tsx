import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Series() {
  const [, navigate] = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);

      (window as any).gsap.utils.toArray(".series-item-row").forEach((panel: HTMLElement) => {
        (window as any).ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onEnter: () => gsap.to("body", { backgroundColor: panel.dataset.color, duration: 0.8 }),
          onEnterBack: () => gsap.to("body", { backgroundColor: panel.dataset.color, duration: 0.8 }),
        });
      });

      gsap.from(".series-img", {
        scrollTrigger: { trigger: ".series-wrapper", start: "top 80%" },
        y: 50, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out"
      });
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const seriesList = [
    {
      color: "#0a192f",
      year: "2025",
      title: "THAMEPO",
      subtitle: "HEART THAT SKIPS A BEAT",
      role: "as thamepo",
      poster: "/images/series1_poster.jpg",
      link: "/series/1",
      reverse: false,
    },
    {
      color: "#2a1b0a",
      year: "2025",
      title: "ME AND THEE",
      subtitle: "",
      role: "as romemok",
      poster: "/images/series2_poster.jpg",
      link: "/series/2",
      reverse: true,
    },
    {
      color: "#2e0a0a",
      year: "2026",
      title: "YOU MANIAC",
      subtitle: "",
      role: "as deanmoth",
      poster: "/images/series3_poster.jpg",
      link: "/series/3",
      reverse: false,
    },
  ];

  return (
    <div className="series-page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <div className="series-wrapper">
          {seriesList.map((s, i) => (
            <section
              key={i}
              className="series-item-row"
              data-color={s.color}
              style={{
                padding: "clamp(60px, 10vw, 120px) clamp(16px, 8%, 10%)",
                minHeight: "80vh",
                display: "flex",
                flexDirection: s.reverse ? "row-reverse" : "row",
                alignItems: "center",
                gap: "clamp(20px, 4vw, 60px)",
              }}
            >
              <div className="series-image-wrapper" style={{ flex: "0 1 45%", minWidth: 0 }}>
                <img src={s.poster} alt={s.title} className="series-img"
                  style={{ width: "100%", borderRadius: "10px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", display: "block" }} />
              </div>
              <div style={{ flex: "0 1 50%", minWidth: 0 }}>
                <span style={{ letterSpacing: "5px", opacity: 0.5, fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)" }}>{s.year}</span>
                <h2 className="series-title-text" style={{ fontFamily: "'Syne'", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, margin: "12px 0" }}>
                  {s.title}<br />
                  {s.subtitle && <span style={{ fontSize: "0.4em", opacity: 0.7 }}>{s.subtitle}</span>}
                  {s.subtitle && <br />}
                  <span style={{ color: "var(--accent)", fontSize: "0.5em", letterSpacing: "2px" }}>{s.role}</span>
                </h2>
                <a href={s.link}
                  style={{
                    display: "inline-block", padding: "12px 36px",
                    border: "1px solid #fff", color: "#fff",
                    borderRadius: "50px", fontFamily: "'Syne'",
                    fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                    transition: "0.3s", marginTop: "8px"
                  }}
                  onClick={e => { e.preventDefault(); navigate(s.link); }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#000"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >more</a>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
