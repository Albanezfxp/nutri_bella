import { contact, profile } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Contact.css";

export function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="shell contact__inner">
        <div className="contact__copy" data-reveal>
          <p className="eyebrow eyebrow--dark">
            <Sparkle size={12} />
            {contact.eyebrow}
          </p>
          <h2 className="contact__title">
            <span className="wt-light">{contact.titleLight}</span>{" "}
            <span className="wt-bold">{contact.titleBold}</span>
          </h2>
          <p className="contact__lead">{contact.lead}</p>

          <div className="contact__actions">
            <a
              className="btn btn--rose"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.ctaPrimary}
            </a>
            <a
              className="btn btn--onDarkGhost"
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.ctaSecondary}
            </a>
          </div>
        </div>

        <dl className="contact__channels" data-reveal data-reveal-delay="1">
          {contact.channels.map((c) => (
            <div className="contact__channel" key={c.label}>
              <dt className="contact__channelLabel">{c.label}</dt>
              <dd className="contact__channelValue">
                {c.href ? (
                  <a
                    className="ulink tap44"
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
