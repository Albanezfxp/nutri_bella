import "./Sparkle.css";

type SparkleProps = {
  /** lado do quadrado em px */
  size?: number;
  className?: string;
};

/**
 * Faisca de 4 pontas tirada da arte da marca.
 * E o unico ornamento da pagina: separador, marcador de lista e detalhe de titulo.
 */
export function Sparkle({ size = 14, className = "" }: SparkleProps) {
  return (
    <svg
      className={`sparkle ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 0c.9 10.4 4.7 14.2 16 16-11.3 1.8-15.1 5.6-16 16-.9-10.4-4.7-14.2-16-16C11.3 14.2 15.1 10.4 16 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
