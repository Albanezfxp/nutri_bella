import { Areas } from "./components/Areas/Areas";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Process } from "./components/Process/Process";
import { Story } from "./components/Story/Story";
import { WhatsAppFloat } from "./components/WhatsAppFloat/WhatsAppFloat";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skipLink" href="#conteudo">
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Story />
        <Process />
        <Areas />
        <Education />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
