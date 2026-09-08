/**
 * Fonte da verdade de TODO o texto da pagina.
 * Nenhum dado aqui foi inventado — tudo veio do briefing ou das respostas do cliente.
 *
 * PENDENTE DE CONFIRMACAO COM A ISABELLA (ver README):
 *  - `profile.cidade`: deduzido do DDD 83 do WhatsApp + da Jampa Run. CONFIRMAR.
 *  - `process.steps`: fluxo generico pedido pelo cliente ("coloque o normal").
 *    Precisa ser validado por ela antes de publicar.
 *  - `story.transformacao`: a foto de antes/depois so pode ir ao ar com o ok dela.
 *    Enquanto nao houver, basta trocar `story.transformacao.publicar` para false.
 */

export const profile = {
  nome: "Isabella Dantas",
  primeiroNome: "Isabella",
  sobrenome: "Dantas",
  profissao: "Nutricionista",
  crn: "CRN-6 45777",
  cidade: "João Pessoa · PB",
  cidadeCurta: "João Pessoa",
  instagramHandle: "@nutribelladantas",
  instagramUrl: "https://instagram.com/nutribelladantas",
  whatsappUrl:
    "https://wa.me/5583998309848?text=" +
    encodeURIComponent("Oi, Isabella! Vim pelo seu site e queria marcar uma consulta."),
  whatsappLabel: "(83) 99830-9848",
} as const;

export const nav = [
  { label: "Minha história", href: "#historia" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Áreas", href: "#areas" },
  { label: "Contato", href: "#contato" },
] as const;

export const hero = {
  eyebrow: `${profile.profissao} · ${profile.crn}`,
  // O contraste de peso da identidade: leve -> pesado dentro da mesma frase.
  titleLight: "Eu já estive",
  titleBold: "do outro lado da mesa.",
  lead:
    "Cheguei a pesar 108 kg. Foi a nutrição que mudou a minha vida, e foi por isso que eu fui estudar nutrição. Hoje acompanho emagrecimento e nutrição clínica, presencial e online.",
  ctaPrimary: "Falar comigo no WhatsApp",
  ctaSecondary: "Ver meu Instagram",
  note: "Atendimento presencial e online",
  imageAlt:
    "Isabella Dantas, de jaleco branco, sentada à mesa do consultório com um notebook e um adipômetro na mão, sorrindo para a câmera.",
} as const;

export const story = {
  eyebrow: "A minha história",
  titleLight: "Antes de ser a nutricionista,",
  titleBold: "eu fui a paciente.",
  numeral: "108",
  numeralUnit: "kg",
  numeralCaption: "o peso que eu jamais imaginei alcançar",
  paragraphs: [
    "Eu estava com um peso que jamais imaginava chegar. Veio o sedentarismo, e com ele muitos outros fatores desencadeados pelo sobrepeso.",
    "Foi ali que eu descobri o quanto a nutrição pode mudar uma vida. Sim: ela mudou a minha.",
    "Me apaixonei pelo processo. Cada vez eu queria aprender mais sobre nutrição, até que decidi ir estudar e entender de verdade a importância dela na vida das pessoas.",
  ],
  quoteLight: "A vida me ensinou",
  quoteBold: "a nunca desistir.",
  quoteAuthor: "Isabella",
  transformacao: {
    // troque para false enquanto ela nao tiver aprovado a publicacao da foto
    publicar: true,
    caption:
      "Essa transformação é minha, não de paciente. Eu não aprendi emagrecimento no livro: eu vivi o processo inteiro.",
    alt: "Duas fotos de Isabella lado a lado: à esquerda, antes da mudança de vida; à direita, depois, em uma academia.",
  },
  corrida: {
    title: "E eu continuo do lado de cá.",
    text: "Jampa Run, 5 km, número 6525 no peito. Eu não indico uma rotina que eu mesma não vivo. A minha corrida é a prova de que isso não acabou no dia em que eu me formei.",
    alt: "Isabella correndo a Jampa Run 5K com o número 6525 preso à camiseta.",
  },
  closing: {
    light: "Hoje eu saio do consultório com uma energia renovada.",
    bold:
      "Em cada paciente eu vejo um pouco da Isabella antiga e da Isabella de hoje.",
    tail:
      "E acredito que cada pessoa que passou por aquela sala vai ter uma linda história de superação, comprometimento e muita saúde.",
  },
} as const;

export const process = {
  eyebrow: "Como funciona",
  titleLight: "Sem dieta de gaveta.",
  titleBold: "O plano é feito para a sua vida.",
  lead:
    "Cada pessoa chega com uma história, uma rotina e uma lista do que já tentou. É daí que a gente parte.",
  steps: [
    {
      title: "A gente conversa",
      text: "Na primeira consulta eu escuto a sua história, a sua rotina e o que já deu e não deu certo antes. Faço a avaliação e a antropometria com adipômetro.",
    },
    {
      title: "Você sai com um plano seu",
      text: "Um plano construído para a comida que você gosta, os seus horários e o seu orçamento. Não adianta ser perfeito no papel e impossível na segunda-feira.",
    },
    {
      title: "A gente reavalia no retorno",
      text: "No retorno eu comparo os dados, ajusto o que não encaixou na sua rotina e a gente comemora o que funcionou.",
    },
    {
      title: "Você não fica sozinha no meio",
      text: "Entre uma consulta e outra a dúvida aparece: no supermercado, no rótulo, no almoço de domingo. É pra isso que eu estou do outro lado.",
    },
  ],
} as const;

export const areas = {
  eyebrow: "Áreas de atuação",
  titleLight: "Duas frentes,",
  titleBold: "o mesmo cuidado.",
  items: [
    {
      title: "Emagrecimento",
      text: "Perda de peso com acompanhamento de verdade, sem restrição que não se sustenta. É o caminho que eu percorri antes de orientar alguém a percorrer.",
    },
    {
      title: "Nutrição clínica",
      text: "Alimentação conduzida a partir do seu quadro de saúde e dos seus exames, junto do acompanhamento médico.",
    },
  ],
  modalidade: {
    title: "Presencial e online",
    text: `No consultório em ${profile.cidadeCurta} ou por vídeo, de onde você estiver. O acompanhamento é o mesmo nos dois formatos.`,
  },
} as const;

export const education = {
  eyebrow: "Conteúdo",
  titleLight: "Eu não gosto só de prescrever.",
  titleBold: "Gosto de explicar.",
  paragraphs: [
    "Quando você entende por que um alimento entra no seu plano, a escolha para de depender de mim. Vira sua.",
    "É por isso que eu leio rótulo, comparo composição e levo isso para o Instagram, dos alimentos ricos em triptofano ao que está escrito atrás da embalagem que você pega no mercado.",
  ],
  cta: "Acompanhar no Instagram",
  imageAlt:
    "Isabella, de jaleco e óculos, lendo com atenção o rótulo de um suplemento no consultório.",
} as const;

export type Canal = { label: string; value: string; href?: string };

const canais: Canal[] = [
  { label: "WhatsApp", value: profile.whatsappLabel, href: profile.whatsappUrl },
  { label: "Instagram", value: profile.instagramHandle, href: profile.instagramUrl },
  { label: "Atendimento", value: `Presencial em ${profile.cidadeCurta} e online` },
];

export const contact = {
  eyebrow: "Vamos conversar",
  titleLight: "Me conta a sua história.",
  titleBold: "Eu sei como ela começa.",
  lead:
    "Se você chegou até aqui, alguma coisa nessa história parece com o que você está vivendo. Manda uma mensagem. A gente conversa antes de qualquer plano.",
  ctaPrimary: "Chamar no WhatsApp",
  ctaSecondary: "Mandar DM no Instagram",
  channels: canais,
} as const;
