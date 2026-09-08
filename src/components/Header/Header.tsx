import { useEffect, useState } from "react";
import { nav, profile } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Header.css";

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do corpo enquanto o painel mobile esta aberto.
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto]);

  return (
    <header className={`header ${rolou ? "is-scrolled" : ""} ${aberto ? "is-open" : ""}`}>
      <div className="header__bar shell">
        <a className="header__logo tap44" href="#topo" onClick={() => setAberto(false)}>
          <Sparkle size={12} className="header__spark" />
          <span>
            <span className="wt-light">{profile.primeiroNome}</span>{" "}
            <span className="wt-bold">{profile.sobrenome}</span>
          </span>
          <span className="header__role">{profile.profissao}</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <ul className="header__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="header__link ulink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="btn header__cta"
          href={profile.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <button
          className="header__toggle"
          type="button"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          onClick={() => setAberto((v) => !v)}
        >
          <span className="visually-hidden">{aberto ? "Fechar menu" : "Abrir menu"}</span>
          <span className="header__burger" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div className="header__panel" id="menu-mobile" hidden={!aberto}>
        <ul className="header__panelList">
          {nav.map((item) => (
            <li key={item.href}>
              <a className="header__panelLink" href={item.href} onClick={() => setAberto(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn header__panelCta"
          href={profile.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setAberto(false)}
        >
          Falar no WhatsApp
        </a>
        <p className="header__panelMeta">
          {profile.crn} · {profile.cidade}
        </p>
      </div>
    </header>
  );
}
