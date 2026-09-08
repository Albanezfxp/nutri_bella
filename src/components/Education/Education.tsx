import rotuloJpg from "../../assets/isabella-rotulo.jpg";
import rotuloWebp from "../../assets/isabella-rotulo.webp";
import { education, profile } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Education.css";

export function Education() {
  return (
    <section className="education section">
      <div className="shell">
        <div className="education__body">
          <figure className="education__figure" data-reveal>
            <picture>
              <source srcSet={rotuloWebp} type="image/webp" />
              <img
                src={rotuloJpg}
                width={715}
                height={821}
                alt={education.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </figure>

          <div className="education__copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">
              <Sparkle size={12} />
              {education.eyebrow}
            </p>
            <h2 className="education__title">
              <span className="wt-light">{education.titleLight}</span>{" "}
              <span className="wt-bold">{education.titleBold}</span>
            </h2>

            <div className="prose">
              {education.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a
              className="education__cta"
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ulink">{education.cta}</span>
              <span className="education__handle">{profile.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
