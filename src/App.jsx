import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Slogan from "./pages/Slogan";
import Constitution from "./pages/Constitution";
import Republic from "./pages/Republic";
import About from "./pages/About";
import ConstitutionDetails from "./pages/ConstitutionDetails";
import Poem from "./pages/Poem";
import Team from "./pages/Team";

export default function App() {
  const location = useLocation();

  // Intro page par navbar hide
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Slogan" element={<Slogan />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/Republic" element={<Republic />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/:id" element={<ConstitutionDetails />} />
        <Route path="/poem" element={<Poem />} />
        <Route path="/team/:id" element={<Team />} />
      </Routes>
    </>
  );
}
