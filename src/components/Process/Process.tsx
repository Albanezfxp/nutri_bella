import { process } from "../../data/content";
import { Sparkle } from "../Sparkle/Sparkle";
import "./Process.css";

export function Process() {
  return (
    <section className="process section" id="atendimento">
      <div className="shell">
        <header className="process__head" data-reveal>
          <p className="eyebrow">
            <Sparkle size={12} />
            {process.eyebrow}
          </p>
          <h2 className="process__title">
            <span className="wt-light">{process.titleLight}</span>{" "}
            <span className="wt-bold">{process.titleBold}</span>
          </h2>
          <p className="lead process__lead">{process.lead}</p>
        </header>

        <ol className="process__list">
          {process.steps.map((step, i) => (
            <li className="process__item" key={step.title} data-reveal>
              <span className="process__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="process__copy">
                <h3 className="process__stepTitle">{step.title}</h3>
                <p className="process__stepText">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
