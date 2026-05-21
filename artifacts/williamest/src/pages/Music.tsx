import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const songs = [
  {
    id: 1,
    title: "Good Times",
    type: "Cover",
    description: "A warm, nostalgic cover by William & Est — their voices weaving effortlessly into something unforgettable.",
    accentColor: "#f9c846",
    gradientFrom: "#2a1f00",
    gradientTo: "#0d0d0d",
    icon: "fa-music",
    link: "https://www.youtube.com/results?search_query=william+jakrapatr+est+supha+good+times",
  },
  {
    id: 2,
    title: "Love Echo",
    type: "Original",
    description: "An original track that captures the electric chemistry between William and Est in every note.",
    accentColor: "#00f2fe",
    gradientFrom: "#001a2a",
    gradientTo: "#0d0d0d",
    icon: "fa-heart",
    link: "https://www.youtube.com/results?search_query=william+jakrapatr+est+supha+love+echo",
  },
];

export default function Music() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".music-page-title", { duration: 1.2, y: 50, opacity: 0, ease: "power4.out" });
      gsap.from(".music-page-sub", { duration: 1, y: 20, opacity: 0, delay: 0.4, ease: "power3.out" });
      gsap.from(".song-card", { duration: 1, y: 50, stagger: 0.25, delay: 0.6, ease: "power3.out" });
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#050505" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "120px clamp(20px, 6vw, 80px) 80px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          <div style={{ marginBottom: "clamp(48px, 8vw, 90px)" }}>
            <span className="section-tag" style={{ display: "block", marginBottom: "16px" }}>WILLIAM &amp; EST</span>
            <h1 className="music-page-title" style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-2px",
              lineHeight: 0.95,
              margin: "0 0 20px",
            }}>Their<br />Music</h1>
            <p className="music-page-sub" style={{
              opacity: 0.5,
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              fontStyle: "italic",
              letterSpacing: "0.5px",
            }}>Two voices. One undeniable sound.</p>
          </div>

          <div className="song-cards-grid">
            {songs.map((song) => (
              <a
                key={song.id}
                href={song.link}
                target="_blank"
                rel="noreferrer"
                className="song-card"
                style={{ "--song-accent": song.accentColor, "--song-from": song.gradientFrom, "--song-to": song.gradientTo } as React.CSSProperties}
              >
                <div className="song-card-bg"></div>
                <div className="song-card-inner">
                  <div className="song-icon-wrap">
                    <i className={`fas ${song.icon} song-icon`}></i>
                  </div>
                  <div className="song-type-badge">{song.type}</div>
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-desc">{song.description}</p>
                  <div className="song-listen-btn">
                    <i className="fas fa-play"></i>
                    <span>Listen</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
