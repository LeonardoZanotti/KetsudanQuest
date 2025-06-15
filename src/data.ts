// src/data.ts

export interface Option {
	id: string;
	text: string;
	type: keyof typeof leadershipTypes;
}

export interface Question {
	id: number;
	question: string;
	options: Option[];
}

export interface LeadershipType {
	type: string;
	description: string;
	anime: {
		name: string;
		img: string;
	};
}

export const leadershipTypes: Record<string, LeadershipType> = {
	transformacional: {
		type: "Transformacional",
		description:
			"Líderes transformacionais inspiram e motivam por meio da visão, carisma e paixão. Eles desafiam o status quo, promovem mudanças positivas e acreditam no potencial das pessoas.",
		anime: {
			name: "Naruto Uzumaki (Naruto)",
			img: "/assets/naruto.png",
		},
	},
	transacional: {
		type: "Transacional",
		description:
			"Focados em metas e recompensas. Lideram com base em desempenho, regras claras e estrutura. São excelentes para manter a ordem e a eficiência.",
		anime: {
			name: "Roy Mustang (Fullmetal Alchemist)",
			img: "/assets/roy_mustang.png",
		},
	},
	servidor: {
		type: "Servidor",
		description:
			"Colocam as necessidades da equipe em primeiro lugar. Valorizam empatia, escuta ativa e apoio emocional, criando ambientes seguros e colaborativos.",
		anime: {
			name: "Tanjiro Kamado (Demon Slayer)",
			img: "/assets/tanjiro_kamado.png",
		},
	},
	autocratico: {
		type: "Autocrático",
		description:
			"Tomam decisões unilaterais, exigem obediência e mantêm controle absoluto. São eficientes em crises, mas podem suprimir a criatividade.",
		anime: {
			name: "Madara Uchiha (Naruto)",
			img: "/assets/madara_uchiha.png",
		},
	},
	democratico: {
		type: "Democrático",
		description:
			"Promovem participação e valorizam o consenso. Buscam soluções coletivas, incentivando o pensamento crítico e o engajamento de todos.",
		anime: {
			name: "Edward Elric (Fullmetal Alchemist)",
			img: "/assets/edward_elric.png",
		},
	},
	liberal: {
		type: "Liberal",
		description:
			"Oferecem liberdade total para a equipe. Confiam na autonomia e criatividade, intervindo apenas quando necessário.",
		anime: {
			name: "Eraser Head (Boku no Hero)",
			img: "/assets/shota_aizawa.png",
		},
	},
	carismatico: {
		type: "Carismático",
		description:
			"Lideram pelo magnetismo pessoal. Inspiram entusiasmo, devoção e lealdade através da presença marcante e comunicação persuasiva.",
		anime: {
			name: "Lelouch Lamperouge (Code Geass)",
			img: "/assets/lelouch_lamperouge.png",
		},
	},
	visionario: {
		type: "Visionário",
		description:
			"Guiados por uma visão de futuro clara, mobilizam a equipe para um propósito maior. São estratégicos, intuitivos e inspiradores.",
		anime: {
			name: "Erwin Smith (Attack on Titan)",
			img: "/assets/erwin_smith.png",
		},
	},
	motivacional: {
		type: "Motivacional",
		description:
			"Focados no desenvolvimento individual. Ajudam a equipe a crescer, aprendendo com os erros e ampliando o potencial de cada membro.",
		anime: {
			name: "Kakashi Hatake (Naruto)",
			img: "/assets/kakashi.png",
		},
	},
	situacional: {
		type: "Situacional",
		description:
			"Adaptam seu estilo conforme o contexto e as pessoas envolvidas. Flexíveis, sabem quando liderar, delegar, motivar ou controlar.",
		anime: {
			name: "Gon Freecss (Hunter X Hunter)",
			img: "/assets/gon.png",
		},
	},
};

export const questions: Question[] = [
	{
		id: 1,
		question:
			"Você está jogando com amigos e alguém começa a bagunçar o jogo. O que você faz?",
		options: [
			{
				id: "a",
				text: "Tenta conversar e chegar num acordo com o grupo",
				type: "democratico",
			},
			{
				id: "b",
				text: "Chama atenção e impõe regras claras",
				type: "autocratico",
			},
			{
				id: "c",
				text: "Dá liberdade e vê se a coisa se resolve sozinha",
				type: "liberal",
			},
			{
				id: "d",
				text: "Inspira o grupo a manter o foco na diversão de todos",
				type: "transformacional",
			},
		],
	},
	{
		id: 2,
		question:
			"Você é escolhido para liderar um grupo na faculdade. Como age?",
		options: [
			{
				id: "a",
				text: "Cria uma visão inspiradora pro grupo seguir",
				type: "transformacional",
			},
			{
				id: "b",
				text: "Escuta todos e define funções juntos",
				type: "democratico",
			},
			{
				id: "c",
				text: "Organiza tarefas com prazos e metas claras",
				type: "transacional",
			},
			{
				id: "d",
				text: "Avalia as habilidades de cada um e ajuda no desenvolvimento",
				type: "motivacional",
			},
		],
	},
	{
		id: 3,
		question:
			"Seu grupo de amigos está indeciso sobre o que fazer no fim de semana. Você:",
		options: [
			{
				id: "a",
				text: "Propõe algo novo e animador que ninguém pensou ainda",
				type: "visionario",
			},
			{
				id: "b",
				text: "Faz uma votação para decidir democraticamente",
				type: "democratico",
			},
			{
				id: "c",
				text: "Deixa rolar naturalmente sem interferir muito",
				type: "liberal",
			},
			{
				id: "d",
				text: "Analisa o humor do grupo e sugere algo adequado",
				type: "situacional",
			},
		],
	},
	{
		id: 4,
		question: "Quando tem conflito entre amigos, você geralmente:",
		options: [
			{
				id: "a",
				text: "Media o conflito com empatia e escuta ativa",
				type: "servidor",
			},
			{
				id: "b",
				text: "Assume o controle da situação e impõe uma solução",
				type: "autocratico",
			},
			{
				id: "c",
				text: "Convence todos com seu carisma e persuasão",
				type: "carismatico",
			},
			{
				id: "d",
				text: "Ajuda cada um a refletir sobre suas ações",
				type: "motivacional",
			},
		],
	},
	{
		id: 5,
		question: "Num projeto em grupo, você se destaca por:",
		options: [
			{
				id: "a",
				text: "Ter uma visão clara do resultado final",
				type: "visionario",
			},
			{
				id: "b",
				text: "Organizar prazos e distribuir tarefas",
				type: "transacional",
			},
			{
				id: "c",
				text: "Manter o ânimo e a motivação do grupo",
				type: "transformacional",
			},
			{
				id: "d",
				text: "Adaptar seu estilo conforme as necessidades do momento",
				type: "situacional",
			},
		],
	},
	{
		id: 6,
		question: "Seu amigo está desanimado com um projeto pessoal. Você:",
		options: [
			{
				id: "a",
				text: "Mostra como o projeto pode impactar positivamente outros",
				type: "transformacional",
			},
			{
				id: "b",
				text: "Dá espaço para ele resolver sozinho",
				type: "liberal",
			},
			{
				id: "c",
				text: "Oferece ajuda prática e divide o problema em etapas",
				type: "transacional",
			},
			{
				id: "d",
				text: "Faz perguntas para ajudá-lo a encontrar suas próprias soluções",
				type: "motivacional",
			},
		],
	},
	{
		id: 7,
		question: "Numa viagem em grupo, você é mais o(a):",
		options: [
			{
				id: "a",
				text: "Planejador(a) que define roteiro e regras",
				type: "autocratico",
			},
			{
				id: "b",
				text: "Animador(a) que mantém o clima leve e divertido",
				type: "carismatico",
			},
			{
				id: "c",
				text: "Mediador(a) que garante que todos estejam confortáveis",
				type: "servidor",
			},
			{
				id: "d",
				text: "Flexível que se adapta ao que o grupo decidir",
				type: "situacional",
			},
		],
	},
	{
		id: 8,
		question: "Quando precisa convencer alguém, você usa mais:",
		options: [
			{
				id: "a",
				text: "Lógica e argumentos racionais",
				type: "transacional",
			},
			{
				id: "b",
				text: "Emoção e visão inspiradora",
				type: "transformacional",
			},
			{
				id: "c",
				text: "Carisma e persuasão pessoal",
				type: "carismatico",
			},
			{
				id: "d",
				text: "Exemplos práticos e casos similares",
				type: "motivacional",
			},
		],
	},
	{
		id: 9,
		question: "Num trabalho em equipe, você valoriza mais:",
		options: [
			{
				id: "a",
				text: "Os resultados e a eficiência",
				type: "autocratico",
			},
			{
				id: "b",
				text: "O desenvolvimento de cada membro",
				type: "motivacional",
			},
			{
				id: "c",
				text: "A harmonia e colaboração do grupo",
				type: "servidor",
			},
			{
				id: "d",
				text: "A inovação e criatividade coletiva",
				type: "democratico",
			},
		],
	},
	{
		id: 10,
		question: "Seu estilo de motivar pessoas é mais:",
		options: [
			{
				id: "a",
				text: "Mostrar como seu trabalho faz diferença",
				type: "visionario",
			},
			{
				id: "b",
				text: "Oferecer recompensas ou reconhecimento",
				type: "transacional",
			},
			{
				id: "c",
				text: "Criar um ambiente acolhedor e seguro",
				type: "servidor",
			},
			{
				id: "d",
				text: "Desafiar a superar seus limites",
				type: "transformacional",
			},
		],
	},
	{
		id: 11,
		question: "Quando algo dá errado no grupo, você primeiro:",
		options: [
			{
				id: "a",
				text: "Analisa os fatos e toma decisões rápidas",
				type: "autocratico",
			},
			{
				id: "b",
				text: "Reúne todos para discutir soluções",
				type: "democratico",
			},
			{
				id: "c",
				text: "Acalma o grupo e mantém a positividade",
				type: "carismatico",
			},
			{
				id: "d",
				text: "Ajuda cada um a aprender com o erro",
				type: "motivacional",
			},
		],
	},
	{
		id: 12,
		question: "Você prefere quando as regras são:",
		options: [
			{
				id: "a",
				text: "Claras e bem definidas para todos",
				type: "transacional",
			},
			{
				id: "b",
				text: "Flexíveis conforme a situação",
				type: "situacional",
			},
			{
				id: "c",
				text: "Decididas pelo consenso do grupo",
				type: "democratico",
			},
			{
				id: "d",
				text: "Orientadas por um propósito maior",
				type: "visionario",
			},
		],
	},
	{
		id: 13,
		question: "Num grupo novo, você tende a:",
		options: [
			{
				id: "a",
				text: "Observar primeiro e depois se adaptar",
				type: "situacional",
			},
			{
				id: "b",
				text: "Tomar a iniciativa naturalmente",
				type: "autocratico",
			},
			{
				id: "c",
				text: "Quebrar o gelo e animar o clima",
				type: "carismatico",
			},
			{
				id: "d",
				text: "Ajudar os mais tímidos a se integrarem",
				type: "servidor",
			},
		],
	},
	{
		id: 14,
		question: "Sua maior força em grupo é:",
		options: [
			{
				id: "a",
				text: "Minha capacidade de enxergar o todo",
				type: "visionario",
			},
			{
				id: "b",
				text: "Minha habilidade de resolver problemas",
				type: "transacional",
			},
			{
				id: "c",
				text: "Minha energia contagiante",
				type: "transformacional",
			},
			{
				id: "d",
				text: "Minha sensibilidade às necessidades alheias",
				type: "servidor",
			},
		],
	},
	{
		id: 15,
		question: "Qual frase combina mais com você?",
		options: [
			{
				id: "a",
				text: "Juntos podemos mudar as coisas!",
				type: "transformacional",
			},
			{
				id: "b",
				text: "Cada um no seu ritmo, sem pressão",
				type: "liberal",
			},
			{
				id: "c",
				text: "Vamos seguir o plano e focar no resultado",
				type: "transacional",
			},
			{
				id: "d",
				text: "O que você acha que seria melhor?",
				type: "democratico",
			},
		],
	},
];
