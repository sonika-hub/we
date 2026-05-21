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
    gradientTo: "#0a0a0a",
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
    gradientTo: "#0a0a0a",
    icon: "fa-heart",
    link: "https://www.youtube.com/results?search_query=william+jakrapatr+est+supha+love+echo",
  },
];

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".hero-title", { duration: 1.5, y: 60, opacity: 0, ease: "power4.out" });
      gsap.from(".hero-divider", { duration: 1, scaleX: 0, opacity: 0, delay: 0.5, ease: "power2.out" });
      gsap.from(".hero-subtitle", { duration: 1, y: 20, opacity: 0, delay: 0.8 });
      gsap.from(".music-section-label", { duration: 1, y: 20, delay: 1, ease: "power3.out" });
      gsap.from(".song-card", { duration: 1, y: 30, stagger: 0.2, delay: 1.1, ease: "power3.out" });
    }
  }, []);

  return (
    <div className="home-page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}>
      <Navbar />

      <header style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 24px 60px",
      }}>
        <h1 className="hero-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 8vw, 7rem)",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "clamp(2px, 1vw, 6px)",
          lineHeight: 1,
          marginBottom: 0,
          whiteSpace: "nowrap",
        }}>WILLIAMEST</h1>
        <div className="hero-divider" style={{ width: "80px", height: "2px", background: "var(--accent)", margin: "20px 0" }}></div>
        <p className="hero-subtitle" style={{ opacity: 0.7, fontSize: "clamp(0.85rem, 3vw, 1.2rem)", letterSpacing: "2px" }}>Powerhouse of GMMTV</p>
      </header>

      <section className="music-section">
        <div className="music-section-label">
          <span className="section-tag">THEIR MUSIC</span>
          <h2 className="music-section-title">Songs Together</h2>
          <p className="music-section-sub">Two voices. One undeniable sound.</p>
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
      </section>

      <Footer />
    </div>
  );
}
