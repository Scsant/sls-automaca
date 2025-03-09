import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 🔥 Importa o React Router
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContextPage from "./pages/ContextPage"; // 🔥 Importa a página de contexto
import AutomacaoProcessos from "./pages/AutomacaoProcessos"; // 🔥 Importa a nova página
import Chatbot from "./components/Chatbot"; // 🔥 Importa o chatbot

function App() {
  return (
    <Router>
      <Navbar />
      <Routes  key={location.pathname}>
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

        {/* 🔥 Página Automação de Processos */}
        <Route path="/automacao-processos" element={<AutomacaoProcessos />} />
      </Routes>
      {/* 🔥 Adiciona o chatbot em todas as páginas */}
      <Chatbot />
    </Router>
  );
}

export default App;
