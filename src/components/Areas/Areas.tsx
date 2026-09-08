import { areas } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Areas.css";

export function Areas() {
  const itens = [...areas.items, areas.modalidade];

  return (
    <section className="areas section" id="areas">
      <div className="shell">
        <header className="areas__head" data-reveal>
          <p className="eyebrow">
            <Sparkle size={12} />
            {areas.eyebrow}
          </p>
          <h2 className="areas__title">
            <span className="wt-light">{areas.titleLight}</span>{" "}
            <span className="wt-bold">{areas.titleBold}</span>
          </h2>
        </header>

        <ul className="areas__list">
          {itens.map((item) => (
            <li className="areas__item" key={item.title} data-reveal>
              <h3 className="areas__itemTitle">{item.title}</h3>
              <p className="areas__itemText">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
