import { useState } from "react";
import { questions, leadershipTypes } from "./data";

export default function App() {
	const [step, setStep] = useState(0); // controla qual pergunta (0 = tela inicial)
	const [answers, setAnswers] = useState([]);

	// registra resposta e avança
	function handleAnswer(type) {
		setAnswers([...answers, type]);
		setStep(step + 1);
	}

	// calcula resultado baseado na resposta mais frequente
	function getResult() {
		const count = {};
		answers.forEach((t) => (count[t] = (count[t] || 0) + 1));
		let maxType = null;
		let maxCount = 0;
		for (const type in count) {
			if (count[type] > maxCount) {
				maxCount = count[type];
				maxType = type;
			}
		}
		return leadershipTypes[maxType];
	}

	if (step === 0) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 flex flex-col justify-center items-center p-6 text-white">
				<h1 className="text-4xl font-extrabold mb-4 text-center">
					Anime Liderança
				</h1>
				<p className="mb-8 max-w-md text-center">
					Descubra seu tipo de liderança e com qual personagem de
					anime você mais se parece!
				</p>
				<button
					onClick={() => setStep(1)}
					className="bg-white text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-purple-100 transition"
				>
					Começar
				</button>
			</div>
		);
	}

	if (step > 0 && step <= questions.length) {
		const current = questions[step - 1];
		return (
			<div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 flex flex-col justify-center items-center p-6 text-white">
				<div className="max-w-lg w-full">
					<h2 className="text-2xl font-semibold mb-6">
						{current.question}
					</h2>
					<div className="flex flex-col gap-4">
						{current.options.map((opt) => (
							<button
								key={opt.id}
								onClick={() => handleAnswer(opt.type)}
								className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-lg py-3 px-4 transition"
							>
								{opt.text}
							</button>
						))}
					</div>
					<p className="mt-4 text-sm opacity-70">
						Pergunta {step} de {questions.length}
					</p>
				</div>
			</div>
		);
	}

	// Resultado final
	const result = getResult();

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 flex flex-col justify-center items-center p-6 text-white">
			<h1 className="text-4xl font-extrabold mb-4 text-center">
				Seu tipo de liderança é:
			</h1>
			<div className="max-w-md bg-white bg-opacity-20 rounded-xl p-6 flex flex-col items-center gap-6">
				<img
					src={result.anime.img}
					alt={result.anime.name}
					className="w-40 h-40 object-contain rounded-full border-4 border-white"
				/>
				<h2 className="text-3xl font-bold">{result.anime.name}</h2>
				<p className="text-center">{result.description}</p>
				<button
					onClick={() => {
						setStep(0);
						setAnswers([]);
					}}
					className="bg-white text-purple-700 font-bold py-2 px-6 rounded-lg hover:bg-purple-100 transition"
				>
					Jogar de novo
				</button>
			</div>
		</div>
	);
}
