import corridaJpg from "../../assets/isabella-corrida.jpg";
import corridaWebp from "../../assets/isabella-corrida.webp";
import transformacaoJpg from "../../assets/isabella-transformacao.jpg";
import transformacaoWebp from "../../assets/isabella-transformacao.webp";
import { story } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Story.css";

export function Story() {
  return (
    <section className="story section" id="historia">
      <div className="shell">
        <header className="story__head" data-reveal>
          <p className="eyebrow eyebrow--rose">
            <Sparkle size={12} />
            {story.eyebrow}
          </p>
          <h2 className="story__title">
            <span className="wt-light">{story.titleLight}</span>{" "}
            <span className="wt-bold">{story.titleBold}</span>
          </h2>
        </header>

        <div className="story__body">
          <div className="story__numeral" data-reveal>
            <p className="story__numLine">
              <span className="story__num">{story.numeral}</span>
              <span className="story__unit">{story.numeralUnit}</span>
            </p>
            <p className="story__numCaption">{story.numeralCaption}</p>
          </div>

          <div className="story__prose prose" data-reveal data-reveal-delay="1">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {story.transformacao.publicar && (
          <figure className="story__transform" data-reveal>
            <picture>
              <source srcSet={transformacaoWebp} type="image/webp" />
              <img
                src={transformacaoJpg}
                width={915}
                height={861}
                alt={story.transformacao.alt}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption className="story__transformCaption">
              <Sparkle size={11} />
              <span>{story.transformacao.caption}</span>
            </figcaption>
          </figure>
        )}

        <blockquote className="story__quote" data-reveal>
          <p className="story__quoteText">
            <span className="wt-light">{story.quoteLight}</span>{" "}
            <span className="wt-bold">{story.quoteBold}</span>
          </p>
          <cite className="story__quoteCite">{story.quoteAuthor}</cite>
        </blockquote>

        <div className="story__run">
          <figure className="story__runFigure" data-reveal>
            <picture>
              <source srcSet={corridaWebp} type="image/webp" />
              <img
                src={corridaJpg}
                width={588}
                height={870}
                alt={story.corrida.alt}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </figure>

          <div className="story__runCopy" data-reveal data-reveal-delay="1">
            <h3 className="story__runTitle">{story.corrida.title}</h3>
            <p className="story__runText">{story.corrida.text}</p>
          </div>
        </div>

        <p className="story__closing" data-reveal>
          <span className="wt-light">{story.closing.light}</span>{" "}
          <span className="wt-bold">{story.closing.bold}</span>{" "}
          <span className="wt-light story__closingTail">{story.closing.tail}</span>
        </p>
      </div>
    </section>
  );
}
