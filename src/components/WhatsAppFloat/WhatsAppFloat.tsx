import { useEffect, useState } from "react";
import { profile } from "../../data/content";
import "./WhatsAppFloat.css";

/**
 * Atalho de WhatsApp no mobile. So aparece depois do hero e some quando a
 * secao de contato entra na tela — assim nunca cobre o CTA final nem o rodape.
 */
export function WhatsAppFloat() {
  const [passouHero, setPassouHero] = useState(false);
  const [noContato, setNoContato] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassouHero(window.scrollY > window.innerHeight * 0.65);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const alvo = document.getElementById("contato");
    if (!alvo || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNoContato(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(alvo);
    return () => observer.disconnect();
  }, []);

  const visivel = passouHero && !noContato;

  return (
    <a
      className={`waFloat ${visivel ? "is-visible" : ""}`}
      href={profile.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visivel}
      tabIndex={visivel ? undefined : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.89 2.39 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"
        />
      </svg>
      <span className="visually-hidden">Falar com Isabella no WhatsApp</span>
    </a>
  );
}
