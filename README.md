# Landing page · Isabella Dantas, Nutricionista

Vite + React + TypeScript, CSS puro. Sem Tailwind, Bootstrap ou qualquer framework CSS.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run lint
```

## Pendências antes de publicar

| Item | Situação | Onde mexer |
| --- | --- | --- |
| Aprovação do antes/depois | **Bloqueante.** A foto é a transformação dela, não de paciente, mas o código de ética do CFN pede cautela. Ela ainda vai confirmar. | `src/data/content.ts` → `story.transformacao.publicar: false` remove a foto e mantém o resto da seção. |
| Cidade | `João Pessoa · PB` foi **deduzido** do DDD 83 do WhatsApp e da Jampa Run. Não foi confirmado. | `profile.cidade` e `profile.cidadeCurta` |
| Etapas da consulta | Fluxo genérico, escrito a pedido. Precisa da validação dela (duração real, o que inclui, política de retorno). | `process.steps` |
| Formação e especializações | Não citadas em lugar nenhum, porque não foram confirmadas. Nada inventado. | novo bloco, se ela passar os dados |
| Logo em arquivo | Só existe a logo aparecendo na tela do monitor numa foto. Enquanto não chegar o PNG/SVG, o header usa o nome em tipografia tratada. | `src/components/Header/Header.tsx` |

Nunca adicionar antes/depois de **paciente** nesta página.

## Decisões de design

**Paleta** extraída por pixel de `../paleta-referencia.png`, não estimada: bone `#f4efec`, sage `#82a968`, rosa `#dd93a0`.

Sage e rosa puros **reprovam em contraste** sobre o bone (2,35:1 e 2,10:1). Por isso os tons puros ficam só em fundo, gráfico e detalhe, e o texto usa as derivações escuras. Todas as combinações foram calculadas e passam AA:

| Combinação | Contraste |
| --- | --- |
| `--ink #33372b` sobre bone | 10,69:1 |
| `--ink-soft #556049` sobre bone | 5,83:1 |
| `--sage-deep #456130` sobre bone | 6,12:1 |
| `--sage-ink #3f5730` sobre bone | 7,03:1 |
| `--rose-deep #9c3f54` sobre bone | 5,66:1 |
| branco sobre `--sage-deep` (botão) | 6,99:1 |
| bone sobre `--sage-deep` (bloco de contato) | 6,12:1 |
| `--rose-on-dark #e5aab4` sobre `--sage-deep` | 3,57:1 (texto grande e componente UI, mínimo 3,0) |

O rosa puro sobre o verde escuro dá só 2,91:1, por isso existe `--rose-on-dark`.

**Tipografia:** Figtree, uma família só, explorando Light 300 + ExtraBold 800 dentro da mesma frase. É o recurso que a própria arte da marca usa, e ele se repete em todo título da página (`.wt-light` / `.wt-bold`).

**Forma:** raio de canto zero em tudo. Divisores de 1px no lugar de sombra.

**Ornamento:** a faísca de 4 pontas da arte da marca (`components/Sparkle`) é o único enfeite permitido. Aparece como marcador de eyebrow, na logo e no rodapé.

**Assimetria:** o hero sangra à direita (painel sage), o antes/depois e a foto de conteúdo sangram à esquerda, e o fecho da história alinha à direita. O cálculo `margin-left: calc(50% - 50vw)` mora sempre no **container** filho direto de `.shell`; se ficar no item do grid, a conta não bate com a borda da viewport e o recorte come o rosto.

**Sem travessão.** A página inteira não usa `—`, `–` nem `−` em nenhum texto, alt, meta ou conteúdo de `::before`.

## Estrutura

```
src/
  index.css              tokens (:root), reset, primitivos e utilitários
  data/content.ts         todo o texto e os links da página
  hooks/useReveal.ts      IntersectionObserver global para [data-reveal]
  components/<Nome>/      .tsx + .css co-localizados, um por pasta
  assets/                 imagens já recortadas e otimizadas
```

`index.css` é importado **antes** de `App` em `main.tsx`. A ordem importa: sem ela o `.btn` do CSS base vence o `.header__cta` do componente e o botão do header aparece no mobile.

## Imagens

Renomeadas, recortadas e servidas em WebP com fallback, todas com `width`/`height` e `loading="lazy"` fora da primeira dobra.

| Arquivo | Origem | Tratamento | WebP |
| --- | --- | --- | --- |
| `isabella-consultorio-cutout` | `..._201315_semfundo.png` (1,05 MB) | margem transparente aparada | 51 KB |
| `isabella-transformacao` | `antes_depois_bella.png` (1,42 MB) | moldura branca/preta removida, céu das duas fotos apertado | 96 KB |
| `isabella-rotulo` | `..._201848.png` (833 KB) | parede morta do topo removida | 54 KB |
| `isabella-corrida` | `..._201927.png` (721 KB) | redimensionada | 36 KB |

As fotos de viagem (Londres e Los Angeles) ficaram **de fora**: não existe seção de bastidores que dê contexto a elas, e o vermelho da cabine telefônica briga com a paleta. Para reativá-las é preciso primeiro criar a seção que as justifique.

`historia.png` não entra na página. Foi usado só como fonte: o depoimento do Instagram foi reescrito na voz dela e diagramado.

## Responsividade e acessibilidade

Mobile-first de verdade: o CSS base é para tela pequena e todas as media queries são `min-width`.

Verificado com Chromium headless em 320, 360, 390, 414, 768, 1024, 1280 e 1440:

- zero scroll horizontal em todas as larguras
- zero alvo de toque abaixo de 44x44 (o utilitário `.tap44` amplia a área de clique via `::after` sem mexer no layout nem no sublinhado)
- fonte do sistema a 200% em 390px sem estourar
- `prefers-reduced-motion` desliga todas as animações e revela o conteúdo direto
- foco visível em todo link e botão
- menu mobile de largura total, sem scroll interno, fecha ao clicar no link e no `Esc`
- botão flutuante do WhatsApp aparece depois do hero e some quando o contato entra na tela, para não cobrir o CTA final nem o rodapé

Animações só em `transform` e `opacity`.
