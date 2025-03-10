import { Routes, Route } from "react-router-dom"; // 🔥 Apenas Routes e Route!

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContextPage from "./pages/ContextPage";
import AutomacaoProcessos from "./pages/AutomacaoProcessos";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Technologies />
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
          </>
        }/>
        <Route path="/contexto" element={<ContextPage />} />
        <Route path="/automacao-processos" element={<AutomacaoProcessos />} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;
