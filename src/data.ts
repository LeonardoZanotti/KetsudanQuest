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
			name: "Naruto Uzumaki",
			img: "https://upload.wikimedia.org/wikipedia/en/9/94/Naruto_Uzumaki.png",
		},
	},
	transacional: {
		type: "Transacional",
		description:
			"Focados em metas e recompensas. Lideram com base em desempenho, regras claras e estrutura. São excelentes para manter a ordem e a eficiência.",
		anime: {
			name: "Roy Mustang (Fullmetal Alchemist)",
			img: "https://upload.wikimedia.org/wikipedia/en/4/4b/Roy_Mustang.png",
		},
	},
	servidor: {
		type: "Servidor",
		description:
			"Colocam as necessidades da equipe em primeiro lugar. Valorizam empatia, escuta ativa e apoio emocional, criando ambientes seguros e colaborativos.",
		anime: {
			name: "Tanjiro Kamado",
			img: "https://upload.wikimedia.org/wikipedia/en/c/c6/Tanjiro_Kamado.png",
		},
	},
	autocratico: {
		type: "Autocrático",
		description:
			"Tomam decisões unilaterais, exigem obediência e mantêm controle absoluto. São eficientes em crises, mas podem suprimir a criatividade.",
		anime: {
			name: "Madara Uchiha",
			img: "https://upload.wikimedia.org/wikipedia/en/1/10/Madara_Uchiha.png",
		},
	},
	democratico: {
		type: "Democrático",
		description:
			"Promovem participação e valorizam o consenso. Buscam soluções coletivas, incentivando o pensamento crítico e o engajamento de todos.",
		anime: {
			name: "Edward Elric",
			img: "https://upload.wikimedia.org/wikipedia/en/e/e6/Edward_Elric.png",
		},
	},
	liberal: {
		type: "Liberal",
		description:
			"Oferecem liberdade total para a equipe. Confiam na autonomia e criatividade, intervindo apenas quando necessário.",
		anime: {
			name: "Shota Aizawa (Eraser Head)",
			img: "https://upload.wikimedia.org/wikipedia/en/9/90/Shota_Aizawa.png",
		},
	},
	carismatico: {
		type: "Carismático",
		description:
			"Lideram pelo magnetismo pessoal. Inspiram entusiasmo, devoção e lealdade através da presença marcante e comunicação persuasiva.",
		anime: {
			name: "Lelouch Lamperouge",
			img: "https://upload.wikimedia.org/wikipedia/en/6/65/Lelouch_Lamperouge.png",
		},
	},
	visionario: {
		type: "Visionário",
		description:
			"Guiados por uma visão de futuro clara, mobilizam a equipe para um propósito maior. São estratégicos, intuitivos e inspiradores.",
		anime: {
			name: "Erwin Smith",
			img: "https://upload.wikimedia.org/wikipedia/en/b/b8/Erwin_Smith.png",
		},
	},
	coaching: {
		type: "Coaching",
		description:
			"Focados no desenvolvimento individual. Ajudam a equipe a crescer, aprendendo com os erros e ampliando o potencial de cada membro.",
		anime: {
			name: "Kakashi Hatake",
			img: "https://upload.wikimedia.org/wikipedia/en/8/88/Kakashi_Hatake.png",
		},
	},
	situacional: {
		type: "Situacional",
		description:
			"Adaptam seu estilo conforme o contexto e as pessoas envolvidas. Flexíveis, sabem quando liderar, delegar, motivar ou controlar.",
		anime: {
			name: "Gon Freecss",
			img: "https://upload.wikimedia.org/wikipedia/en/d/d0/Gon_Freecss.png",
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
				text: "Chama atenção e impõe regras",
				type: "autocratico",
			},
			{
				id: "c",
				text: "Dá liberdade e vê se a coisa se resolve sozinha",
				type: "liberal",
			},
		],
	},
	{
		id: 2,
		question:
			"Você é escolhido para liderar um grupo num trabalho da faculdade. Como age?",
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
		],
	},
	{
		id: 3,
		question:
			"Você e seus amigos estão planejando uma viagem. Qual seu papel?",
		options: [
			{
				id: "a",
				text: "Motiva a galera com ideias criativas e destinos incríveis",
				type: "transformacional",
			},
			{
				id: "b",
				text: "Organiza o roteiro, reserva e transporte",
				type: "transacional",
			},
			{
				id: "c",
				text: "Ajuda todo mundo a se entender e se sentir incluído",
				type: "servidor",
			},
		],
	},
	{
		id: 4,
		question: "Quando tem uma discussão num grupo de WhatsApp, você...",
		options: [
			{
				id: "a",
				text: "Tenta resolver com empatia e bom humor",
				type: "servidor",
			},
			{
				id: "b",
				text: "Assume a conversa e direciona a solução",
				type: "autocratico",
			},
			{
				id: "c",
				text: "Sugere uma chamada para resolverem juntos",
				type: "democratico",
			},
		],
	},
	{
		id: 5,
		question: "Alguém novo entra no seu grupo de amigos. Você...",
		options: [
			{
				id: "a",
				text: "Faz perguntas e tenta deixar a pessoa confortável",
				type: "coaching",
			},
			{
				id: "b",
				text: "Observa como a pessoa se adapta naturalmente",
				type: "liberal",
			},
			{
				id: "c",
				text: "Apresenta os amigos e ajuda na integração",
				type: "servidor",
			},
		],
	},
	{
		id: 6,
		question: "Você está em uma competição. Como motiva seu time?",
		options: [
			{
				id: "a",
				text: "Dá um discurso empolgante antes da prova",
				type: "carismatico",
			},
			{
				id: "b",
				text: "Relembra as metas e o plano definido",
				type: "transacional",
			},
			{
				id: "c",
				text: "Lembra a todos do propósito e do trabalho em equipe",
				type: "visionario",
			},
		],
	},
	{
		id: 7,
		question:
			"Você precisa organizar uma festa surpresa. O que faz primeiro?",
		options: [
			{
				id: "a",
				text: "Cria uma vibe temática e envolvente",
				type: "transformacional",
			},
			{
				id: "b",
				text: "Define quem faz o quê com prazos",
				type: "transacional",
			},
			{
				id: "c",
				text: "Conversa com o grupo pra decidir tudo junto",
				type: "democratico",
			},
		],
	},
	{
		id: 8,
		question: "Seu grupo está dividido sobre qual série assistir. Você...",
		options: [
			{
				id: "a",
				text: "Faz uma votação e segue o que a maioria decidir",
				type: "democratico",
			},
			{
				id: "b",
				text: "Sugere que assistam sozinhos e depois conversem",
				type: "liberal",
			},
			{
				id: "c",
				text: "Dá um jeito de convencer todos com carisma",
				type: "carismatico",
			},
		],
	},
	{
		id: 9,
		question: "Se pudesse escolher um superpoder, qual seria?",
		options: [
			{
				id: "a",
				text: "Se dar bem com qualquer pessoa",
				type: "carismatico",
			},
			{
				id: "b",
				text: "Ver o futuro",
				type: "visionario",
			},
			{
				id: "c",
				text: "Ter uma mochila com capacidade infinita",
				type: "situacional",
			},
		],
	},
	{
		id: 10,
		question: "Em um grupo novo, você costuma...",
		options: [
			{
				id: "a",
				text: "Assumir a liderança naturalmente",
				type: "autocratico",
			},
			{
				id: "b",
				text: "Esperar o grupo se formar e adaptar conforme precisa",
				type: "situacional",
			},
			{
				id: "c",
				text: "Ajudar cada pessoa a se integrar",
				type: "coaching",
			},
		],
	},
];
