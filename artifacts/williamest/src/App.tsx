import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Artists from "@/pages/Artists";
import Artist1 from "@/pages/Artist1";
import Artist2 from "@/pages/Artist2";
import Gallery from "@/pages/Gallery";
import Music from "@/pages/Music";
import Series from "@/pages/Series";
import Series1 from "@/pages/Series1";
import Series2 from "@/pages/Series2";
import Series3 from "@/pages/Series3";

function NotFound() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", color: "#fff", fontFamily: "'Syne', sans-serif", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "6rem", margin: 0, opacity: 0.1 }}>404</h1>
      <a href="/" style={{ color: "#00f2fe", letterSpacing: "3px", fontSize: "0.9rem" }}>RETURN HOME</a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/artists" component={Artists} />
      <Route path="/artists/1" component={Artist1} />
      <Route path="/artists/2" component={Artist2} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/music" component={Music} />
      <Route path="/series" component={Series} />
      <Route path="/series/1" component={Series1} />
      <Route path="/series/2" component={Series2} />
      <Route path="/series/3" component={Series3} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}
