export const questions = [
  {
    id: 1,
    question: "Você prefere liderar um time...?",
    options: [
      { id: "a", text: "Inspirando pela amizade e coragem", type: "Inspirador" },
      { id: "b", text: "Com estratégia e planejamento", type: "Estratégico" },
      { id: "c", text: "Com disciplina e exemplo", type: "Disciplinador" },
    ],
  },
  {
    id: 2,
    question: "Diante de um desafio, você...?",
    options: [
      { id: "a", text: "Enfrenta de frente, mesmo com riscos", type: "Corajoso" },
      { id: "b", text: "Analisa as opções antes de agir", type: "Estratégico" },
      { id: "c", text: "Mantém a calma e orienta os outros", type: "Calmo" },
    ],
  },
  // pode adicionar mais perguntas aqui
];

export const leadershipTypes = {
  Inspirador: {
    description: "Você lidera inspirando os outros com sua coragem e amizade.",
    anime: {
      name: "Monkey D. Luffy",
      img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Monkey_D_Luffy.png",
    },
  },
  Estratégico: {
    description: "Você é um líder que pensa e planeja cada passo com cuidado.",
    anime: {
      name: "Light Yagami",
      img: "https://upload.wikimedia.org/wikipedia/en/4/44/Light_Yagami.png",
    },
  },
  Disciplinador: {
    description: "Você lidera com disciplina e pelo exemplo.",
    anime: {
      name: "Levi Ackerman",
      img: "https://upload.wikimedia.org/wikipedia/en/9/9a/Levi_Ackerman.png",
    },
  },
  Corajoso: {
    description: "Você encara desafios com bravura e força de vontade.",
    anime: {
      name: "Goku",
      img: "https://upload.wikimedia.org/wikipedia/en/0/01/Goku_anime.png",
    },
  },
  Calmo: {
    description: "Você mantém a calma e orienta os outros com sabedoria.",
    anime: {
      name: "Shikamaru Nara",
      img: "https://upload.wikimedia.org/wikipedia/en/f/f3/Shikamaru_Nara.png",
    },
  },
};
