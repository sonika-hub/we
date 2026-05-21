import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Update these YouTube video IDs when confirmed ──────────────────────────
const songs = [
  {
    id: 1,
    title: "Good Times",
    type: "Cover",
    youtubeId: "f2NYvhORv20",
    description: "A warm, nostalgic cover by William & Est — their voices weaving effortlessly into something unforgettable.",
    accentColor: "#f9c846",
    gradientFrom: "#2a1f00",
    gradientTo: "#0d0d0d",
  },
  {
    id: 2,
    title: "Love Echo",
    type: "Original",
    youtubeId: "GGcXqB4_ZPc",
    description: "An original track that captures the electric chemistry between William and Est in every note.",
    accentColor: "#00f2fe",
    gradientFrom: "#001a2a",
    gradientTo: "#0d0d0d",
  },
];

export default function Music() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeSong = songs.find(s => s.youtubeId === activeId) ?? null;

  const closeModal = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeId]);

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
            }}>Two voices. One undeniable sound.</p>
          </div>

          <div className="song-cards-grid">
            {songs.map((song) => (
              <div
                key={song.id}
                className="song-card"
                style={{ "--song-accent": song.accentColor, "--song-from": song.gradientFrom, "--song-to": song.gradientTo, cursor: "default" } as React.CSSProperties}
              >
                <div className="song-card-bg"></div>

                {/* Thumbnail */}
                <button
                  className="song-thumb-btn"
                  onClick={() => setActiveId(song.youtubeId)}
                  aria-label={`Play ${song.title}`}
                  style={{ "--song-accent": song.accentColor } as React.CSSProperties}
                >
                  <img
                    src={`https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`}
                    alt={song.title}
                    className="song-thumb-img"
                  />
                  <div className="song-thumb-overlay">
                    <div className="song-play-circle">
                      <i className="fas fa-play" style={{ fontSize: "1.2rem", marginLeft: "3px", color: "#fff" }}></i>
                    </div>
                  </div>
                </button>

                {/* Info */}
                <div className="song-card-inner" style={{ paddingTop: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="song-type-badge">{song.type}</div>
                  </div>
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-desc">{song.description}</p>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => setActiveId(song.youtubeId)}
                      className="song-watch-btn"
                      style={{ "--song-accent": song.accentColor } as React.CSSProperties}
                    >
                      <i className="fas fa-play"></i>
                      <span>Watch</span>
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${song.youtubeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="song-yt-btn"
                    >
                      <i className="fab fa-youtube"></i>
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {activeSong && (
        <div className="yt-modal-overlay" onClick={closeModal}>
          <div className="yt-modal-box" onClick={e => e.stopPropagation()}>
            <div className="yt-modal-header">
              <div>
                <span className="yt-modal-type">{activeSong.type}</span>
                <h2 className="yt-modal-title">{activeSong.title}</h2>
              </div>
              <button className="yt-modal-close" onClick={closeModal} aria-label="Close">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="yt-embed-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${activeSong.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeSong.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="yt-iframe"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
