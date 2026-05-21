import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  {
    year: "2023",
    month: "Nov",
    title: "Project Alpha — William Steps Into the Light",
    description: "William Jakrapatr entered the spotlight through Project Alpha, GMMTV's talent competition series — captivating audiences with raw vocals and undeniable stage presence before the world even knew his name.",
    image: "/images/artist1.jpg",
    tag: "debut",
    tagColor: "#00f2fe",
  },
  {
    year: "2024",
    month: "Jan",
    title: "ThamePo: Heart That Skips a Beat Premieres",
    description: "The series that changed everything. William as Tham and Est as Po — their chemistry was instant, electric, and completely took over the internet. ThamePo became the most-talked-about Thai BL series of the year.",
    image: "/images/thamepomain.jpg",
    tag: "series",
    tagColor: "#ff6b9d",
  },
  {
    year: "2024",
    month: "Mar",
    title: "LYKN Official Debut",
    description: "William officially debuted as the main vocalist of LYKN under GMMTV, cementing his place in the T-Pop scene. Fans already called him the 'Lungs of T-Pop' before the first album even dropped.",
    image: "/images/thamepo1.jpg",
    tag: "music",
    tagColor: "#f9c846",
  },
  {
    year: "2024",
    month: "Jun",
    title: "\"Good Times\" Cover Released",
    description: "William and Est dropped their first collab — a heartwarming cover that felt like a love letter from them to the fans. The song trended across platforms within hours of release.",
    image: "/images/couple3.jpg",
    tag: "music",
    tagColor: "#f9c846",
  },
  {
    year: "2024",
    month: "Aug",
    title: "Me Thee Rak Nee Doo Wow Series",
    description: "They reunited on-screen in Me Thee Rak Nee Doo Wow, proving their chemistry wasn't a one-time thing. Another hit series, another wave of WilliamEst content flooding every timeline.",
    image: "/images/me_thee_main1.jpg",
    tag: "series",
    tagColor: "#ff6b9d",
  },
  {
    year: "2024",
    month: "Oct",
    title: "\"Love Echo\" — Their First Original",
    description: "Love Echo marked a new era. An original track written for and about their unique bond — every lyric felt personal, every note felt earned. The MV hit 1M views faster than anyone expected.",
    image: "/images/couple6.jpg",
    tag: "music",
    tagColor: "#f9c846",
  },
  {
    year: "2025",
    month: "Feb",
    title: "WilliamEst Fanmeet — Sold Out Asia Tour",
    description: "From Bangkok to Tokyo, every date sold out in minutes. WilliamEst fanmeets became legendary — two hours of chaos, tears, and the kind of fan energy that makes headlines.",
    image: "/images/couple8.jpg",
    tag: "fanmeet",
    tagColor: "#a78bfa",
  },
  {
    year: "2025",
    month: "Sep",
    title: "Global Recognition — International Press",
    description: "WilliamEst trended globally, earning features in international entertainment press and recognition far beyond Thailand. The fandom — spanning every continent — only kept growing.",
    image: "/images/couple9.jpg",
    tag: "milestone",
    tagColor: "#00f2fe",
  },
  {
    year: "2026",
    month: "TBA",
    title: "You Maniac — Coming 2026",
    description: "Their most anticipated project yet. You Maniac promises a darker, more intense chapter for William and Est — and from the first teaser photos alone, the fandom is already losing it.",
    image: "/images/youmaniac1.jpg",
    tag: "upcoming",
    tagColor: "#ff3b3b",
    upcoming: true,
  },
];

export default function Timeline() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".tl-card").forEach((card: Element) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 88%" },
            y: 40,
            duration: 0.9,
            ease: "power3.out",
          });
        });
      }
      gsap.from(".tl-page-title", { duration: 1.2, y: 50, opacity: 0, ease: "power4.out" });
      gsap.from(".tl-page-sub", { duration: 1, y: 20, opacity: 0, delay: 0.4 });
    }
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "120px clamp(20px, 6vw, 80px) 100px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: "clamp(60px, 10vw, 100px)" }}>
            <span className="section-tag" style={{ display: "block", marginBottom: "16px" }}>WILLIAMEST</span>
            <h1 className="tl-page-title" style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-2px",
              lineHeight: 0.95,
              margin: "0 0 20px",
            }}>Their<br />Journey</h1>
            <p className="tl-page-sub" style={{
              opacity: 0.5,
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              fontStyle: "italic",
            }}>Every milestone. Every moment that mattered.</p>
          </div>

          {/* Timeline */}
          <div className="tl-track">
            <div className="tl-line"></div>

            {events.map((event, i) => (
              <div key={i} className={`tl-card ${i % 2 === 0 ? "tl-card-left" : "tl-card-right"}`}>
                {/* Dot on the line */}
                <div className="tl-dot" style={{ background: event.tagColor }}></div>

                {/* Date stamp */}
                <div className="tl-date">
                  <span className="tl-date-month">{event.month}</span>
                  <span className="tl-date-year">{event.year}</span>
                </div>

                {/* Card */}
                <div className={`tl-box${event.upcoming ? " tl-box-upcoming" : ""}`}>
                  <div className="tl-img-wrap">
                    <img src={event.image} alt={event.title} className="tl-img" />
                    <div className="tl-img-overlay"></div>
                    <span
                      className="tl-tag"
                      style={{ background: event.tagColor + "22", color: event.tagColor, border: `1px solid ${event.tagColor}55` }}
                    >{event.tag}</span>
                    {event.upcoming && (
                      <div className="tl-upcoming-badge">COMING 2026</div>
                    )}
                  </div>
                  <div className="tl-text">
                    <h3 className="tl-title">{event.title}</h3>
                    <p className="tl-desc">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
