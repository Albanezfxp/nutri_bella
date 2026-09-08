import cutoutPng from "../../assets/isabella-consultorio-cutout.png";
import cutoutWebp from "../../assets/isabella-consultorio-cutout.webp";
import { hero, profile } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero__inner shell">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow" data-reveal>
            <Sparkle size={12} />
            {hero.eyebrow}
          </p>

          <h1 className="hero__title" data-reveal data-reveal-delay="1">
            <span className="wt-light">{hero.titleLight}</span>{" "}
            <span className="wt-bold">{hero.titleBold}</span>
          </h1>

          <p className="lead hero__lead" data-reveal data-reveal-delay="2">
            {hero.lead}
          </p>

          <div className="hero__actions" data-reveal data-reveal-delay="3">
            <a
              className="btn"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.ctaPrimary}
            </a>
            <a
              className="btn btn--ghost"
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="hero__note" data-reveal data-reveal-delay="4">
            {hero.note}
          </p>
        </div>

        <figure className="hero__figure" data-reveal data-reveal-delay="2">
          <picture>
            <source srcSet={cutoutWebp} type="image/webp" />
            <img
              className="hero__photo"
              src={cutoutPng}
              width={871}
              height={827}
              alt={hero.imageAlt}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}
