import { profile } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__identity">
          <p className="footer__name">
            <span className="wt-light">{profile.primeiroNome}</span>{" "}
            <span className="wt-bold">{profile.sobrenome}</span>
          </p>
          <p className="footer__meta">
            {profile.profissao} · {profile.crn}
          </p>
          <p className="footer__meta">{profile.cidade}</p>
        </div>

        <nav className="footer__links" aria-label="Contato">
          <a
            className="footer__link ulink"
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {profile.whatsappLabel}
          </a>
          <a
            className="footer__link ulink"
            href={profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram {profile.instagramHandle}
          </a>
        </nav>
      </div>

      <div className="shell footer__base">
        <Sparkle size={10} className="footer__spark" />
        <p className="footer__note">
          © {new Date().getFullYear()} {profile.nome} · {profile.crn}
        </p>
      </div>
    </footer>
  );
}
