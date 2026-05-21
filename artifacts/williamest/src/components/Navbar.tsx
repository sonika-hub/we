import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const isHome = location === "/";

  return (
    <nav className={`main-nav${isHome ? " home-nav" : ""}`} style={isHome ? { background: "transparent", borderBottom: "none", backdropFilter: "none" } : {}}>
      <div className="nav-logo">
        <Link href="/">WILLIAM<span>EST</span></Link>
      </div>

      <button className="menu-toggle" id="mobile-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar" style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}}></span>
        <span className="bar" style={menuOpen ? { opacity: 0 } : {}}></span>
        <span className="bar" style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}></span>
      </button>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        <Link href="/" className="nav-item" onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}>Home</Link>
        <Link href="/artists" className="nav-item" onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}>Artists</Link>
        <Link href="/gallery" className="nav-item" onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}>Gallery</Link>
        <Link href="/series" className="nav-item" onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}>Series</Link>
        <Link href="/about" className="nav-item" onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}>About</Link>
      </div>
    </nav>
  );
}
