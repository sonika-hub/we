import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Artists() {
  const [, navigate] = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      gsap.from(".panel-left", { xPercent: -100, duration: 1.5, ease: "power4.inOut" });
      gsap.from(".panel-right", { xPercent: 100, duration: 1.5, ease: "power4.inOut" }, "<");

      (window as any).gsap.utils.toArray('.artist-panel').forEach((panel: Element) => {
        const bg = panel.querySelector('.panel-bg') as HTMLElement;
        const content = panel.querySelector('.panel-content') as HTMLElement;
        panel.addEventListener('mouseenter', () => {
          gsap.to(bg, { scale: 1.1, duration: 1.5, ease: "expo.out" });
          gsap.to(content, { y: -20, duration: 0.6 });
        });
        panel.addEventListener('mouseleave', () => {
          gsap.to(bg, { scale: 1, duration: 1.5, ease: "expo.out" });
          gsap.to(content, { y: 0, duration: 0.6 });
        });
      });
    }
  }, []);

  return (
    <div className="artists-page">
      <Navbar />
      <section className="split-showcase">
        <div className="artist-panel panel-left" onClick={() => navigate("/artists/1")}>
          <div className="panel-bg" style={{ backgroundImage: "url('/images/artist1.jpg')" }}></div>
          <div className="panel-content">
            <span className="artist-number">01</span>
            <h2 className="artist-name">William<br />Jakrapatr</h2>
            <p className="artist-bio">T-Pop's celebrated 'lungs' and a compelling actor, merging powerhouse vocals with emotive on-screen storytelling</p>
            <a href="/artists/1" className="view-works" onClick={e => { e.preventDefault(); navigate("/artists/1"); }}>Explore more</a>
          </div>
        </div>
        <div className="artist-panel panel-right" onClick={() => navigate("/artists/2")}>
          <div className="panel-bg" style={{ backgroundImage: "url('/images/artist2.jpg')" }}></div>
          <div className="panel-content">
            <span className="artist-number">02</span>
            <h2 className="artist-name">Est<br />Supha</h2>
            <p className="artist-bio">national swimmer, actor, and model making waves in every field he touches.</p>
            <a href="/artists/2" className="view-works" onClick={e => { e.preventDefault(); navigate("/artists/2"); }}>Explore more</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
