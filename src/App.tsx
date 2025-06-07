import { useState } from "react";
import {
	questions,
	leadershipTypes,
	type LeadershipType,
	type Question,
	type Option,
} from "./data";
import katsudanLogo from "./assets/katsudan_quest.png";
import { motion } from "framer-motion";

export default function App() {
	const [step, setStep] = useState<number>(0);
	const [answers, setAnswers] = useState<string[]>([]);

	function handleAnswer(type: string) {
		setAnswers([...answers, type]);
		setStep(step + 1);
	}

	function getResult(): LeadershipType | undefined {
		const count: Record<string, number> = {};
		answers.forEach((t) => (count[t] = (count[t] || 0) + 1));
		let maxType: string | null = null;
		let maxCount = 0;
		for (const type in count) {
			if (count[type] > maxCount) {
				maxCount = count[type];
				maxType = type;
			}
		}
		if (!maxType) return undefined;
		return leadershipTypes[maxType];
	}

	if (step === 0) {
		return (
			<div className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 flex flex-col justify-center items-center p-6 text-white text-center">
				<motion.img
					src={katsudanLogo}
					alt="Katsudan Quest Logo"
					className="w-28 h-28 mb-4"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
				/>
				<motion.h1
					className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					Katsudan Quest
				</motion.h1>
				<motion.p
					className="mb-8 max-w-md text-lg md:text-xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Descubra seu tipo de liderança e com qual personagem de
					anime você mais se parece! Responda perguntas e veja o
					resultado com estilo.
				</motion.p>
				<motion.button
					onClick={() => setStep(1)}
					className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 transition"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					Começar
				</motion.button>
			</div>
		);
	}

	if (step > 0 && step <= questions.length) {
		const current: Question = questions[step - 1];
		return (
			<div className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 flex flex-col justify-center items-center p-6 text-white">
				<div className="max-w-lg w-full">
					<motion.h2
						className="text-3xl text-center font-semibold mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
					>
						{current.question}
					</motion.h2>
					<div className="flex flex-col gap-4">
						{current.options.map((opt: Option) => (
							<motion.button
								key={opt.id}
								onClick={() => handleAnswer(opt.type)}
								className="focus:outline-none bg-white bg-opacity-20 hover:bg-opacity-40 rounded-lg py-3 px-4 transition text-lg"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								{opt.text}
							</motion.button>
						))}
					</div>
					<p className="mt-4 text-sm opacity-70 text-center">
						Pergunta {step} de {questions.length}
					</p>
				</div>
			</div>
		);
	}

	const result = getResult();

	if (!result) {
		return (
			<div className="w-full min-h-screen bg-red-600 flex items-center justify-center text-white text-xl">
				Ocorreu um erro ao calcular seu resultado. Tente jogar
				novamente.
			</div>
		);
	}

	const shareMessage = `Descobri meu tipo de liderança com o Ketsudan Quest! ✨\nSou como ${result.anime.name}:\n${result.description}\nhttps://ketsudan-quest.vercel.app/`;

	const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(shareMessage);
			alert("Texto copiado para a área de transferência!");
		} catch {
			alert("Falha ao copiar texto.");
		}
	};

	return (
		<div className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 flex flex-col justify-center items-center p-6 text-white">
			<h1 className="text-4xl font-extrabold mb-4 text-center">
				Seu tipo de liderança é:
				<br />
				{result.type}
			</h1>
			<div className="max-w-md bg-white bg-opacity-20 rounded-xl p-6 flex flex-col items-center gap-6">
				<img
					src={result.anime.img}
					alt={result.anime.name}
					className="w-60 h-60 object-cover rounded-xl border-4 border-white shadow-lg"
				/>
				<h2 className="text-3xl text-center font-bold">
					{result.anime.name}
				</h2>
				<p className="text-center text-lg leading-relaxed">
					{result.description}
				</p>
				<div className="flex flex-col gap-3 mt-6">
					<a
						href={shareUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-green-500 hover:bg-green-600 text-white hover:text-white py-2 px-4 rounded-2xl shadow-md"
					>
						Compartilhar no WhatsApp
					</a>
					<button
						onClick={handleCopy}
						className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl shadow-md"
					>
						Copiar resultado
					</button>
				</div>

				<button
					onClick={() => {
						setStep(0);
						setAnswers([]);
					}}
					className="bg-white text-purple-700 font-bold py-2 px-4 rounded-2xl shadow-md hover:bg-purple-100 transition"
				>
					Jogar de novo
				</button>
			</div>
		</div>
	);
}
