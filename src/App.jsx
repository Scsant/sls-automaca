import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 🔥 Importa o React Router
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContextPage from "./pages/ContextPage"; // 🔥 Importa a nova página

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 🔥 Página principal */}
        <Route
          path="/"
          element={
            <>
              <Technologies />
              <Hero />
              <Services />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* 🔥 Nova página de contexto */}
        <Route path="/contexto" element={<ContextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
