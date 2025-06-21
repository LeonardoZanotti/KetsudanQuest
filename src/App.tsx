import { useState } from "react";
import {
	questions,
	leadershipTypes,
	type LeadershipType,
	type Question,
	type Option,
} from "./data";
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

	// Padrão visual de sakura como fundo
	const sakuraPattern = {
		backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ed6ea7' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
	};

	if (step === 0) {
		return (
			<div
				className="w-full min-h-screen flex flex-col justify-center items-center p-6 text-center"
				style={{
					backgroundColor: "#2f52a0",
					...sakuraPattern,
				}}
			>
				<motion.h1
					className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md text-white"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					Anime Líder
				</motion.h1>
				<motion.div
					className="mb-8 max-w-md text-lg md:text-xl bg-white bg-opacity-90 rounded-xl p-6 shadow-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					<p
						className="text-[#2f52a0]"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						Descubra seu estilo de liderança e com qual personagem
						de anime você mais se parece! Responda as perguntas e
						veja o resultado com estilo.
					</p>
				</motion.div>
				<motion.button
					onClick={() => setStep(1)}
					className="text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
					style={{
						backgroundColor: "#ed6ea7",
						fontFamily: "Poppins, sans-serif",
					}}
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
			<div
				className="w-full min-h-screen flex flex-col justify-center items-center p-6"
				style={{
					backgroundColor: "#2f52a0",
					...sakuraPattern,
				}}
			>
				<div className="max-w-lg w-full text-center bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
					<motion.h2
						className="text-2xl md:text-3xl font-semibold mb-6 text-[#2f52a0]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						{current.question}
					</motion.h2>
					<div className="flex flex-col gap-3">
						{current.options.map((opt: Option) => (
							<motion.button
								key={opt.id}
								onClick={() => handleAnswer(opt.type)}
								className="
									focus:outline-none focus:ring-0
									active:outline-none active:ring-0
									py-3 px-4 transition text-lg rounded-lg
								"
								style={{
									backgroundColor: "#f8b12a",
									color: "#2f52a0",
									fontFamily: "Poppins, sans-serif",
									/* remove highlight azul no touch */
									WebkitTapHighlightColor: "transparent",
									/* remove callout / menu de toque longo */
									WebkitTouchCallout: "none",
									/* zera outline/borda/box-shadow que o UA possa impor */
									outline: "none",
									border: "none",
									boxShadow: "none",
									/* importantíssimo pra mobile não pintar nada */
									touchAction: "manipulation",
									/* remove qualquer aparência nativa */
									WebkitAppearance: "none",
								}}
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								{opt.text}
							</motion.button>
						))}
					</div>
					<p
						className="mt-4 text-sm opacity-80 text-center"
						style={{
							color: "#2f52a0",
							fontFamily: "Poppins, sans-serif",
						}}
					>
						Pergunta {step} de {questions.length}
					</p>
				</div>
			</div>
		);
	}

	const result = getResult();

	if (!result) {
		return (
			<div
				className="w-full min-h-screen flex items-center justify-center text-xl p-6 text-center"
				style={{
					backgroundColor: "#ed6ea7",
					...sakuraPattern,
				}}
			>
				<div className="bg-white bg-opacity-90 rounded-xl p-8 max-w-md">
					<p
						className="text-[#2f52a0]"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						Ocorreu um erro ao calcular seu resultado. Tente jogar
						novamente.
					</p>
					<button
						onClick={() => {
							setStep(0);
							setAnswers([]);
						}}
						className="mt-4 text-white font-bold py-2 px-4 rounded-full shadow-md transition"
						style={{
							backgroundColor: "#2f52a0",
							fontFamily: "Poppins, sans-serif",
						}}
					>
						Tentar novamente
					</button>
				</div>
			</div>
		);
	}

	const shareMessage = `Descobri meu estilo de liderança com o Anime Líder! \nSou do estilo ${result.type}:\nComo ${result.anime.male.name} ou ${result.anime.female.name}!\n${result.description}\nhttps://ketsudan-quest.vercel.app/`;

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
		<div
			className="w-full min-h-screen flex flex-col justify-center items-center p-6"
			style={{
				backgroundColor: "#2f52a0",
				...sakuraPattern,
			}}
		>
			<div className="max-w-4xl w-full bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
				<h1
					className="text-3xl md:text-4xl font-extrabold mb-6 text-center"
					style={{
						color: "#2f52a0",
						fontFamily: "Poppins, sans-serif",
					}}
				>
					Seu estilo de liderança é:
					<br />
					<span className="block mt-2 text-[#ed6ea7]">
						{result.type}
					</span>
				</h1>

				<div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mb-8">
					{/* Personagem Masculino */}
					<div className="flex flex-col items-center md:w-[300px]">
						<div className="relative">
							<img
								src={result.anime.male.img}
								alt={result.anime.male.name}
								className="w-48 h-48 object-cover rounded-xl border-4 shadow-lg"
								style={{ borderColor: "#2152a0" }}
							/>
							<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#2152a0] text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
								Masculino
							</div>
						</div>
						<p
							className="mt-6 font-semibold text-lg text-center break-words"
							style={{
								color: "#2152a0",
								fontFamily: "Poppins, sans-serif",
							}}
						>
							{result.anime.male.name}
						</p>
					</div>

					{/* Divisor Mobile */}
					<div className="text-center my-4 md:hidden">
						<div className="w-16 h-1 bg-[#ed6ea7] mx-auto rounded-full"></div>
					</div>

					{/* Divisor Desktop */}
					<div className="hidden md:block">
						<div className="h-48 w-1 bg-[#ed6ea7] rounded-full"></div>
					</div>

					{/* Personagem Feminino */}
					<div className="flex flex-col items-center md:w-[300px]">
						<div className="relative">
							<img
								src={result.anime.female.img}
								alt={result.anime.female.name}
								className="w-48 h-48 object-cover rounded-xl border-4 shadow-lg"
								style={{ borderColor: "#2152a0" }}
							/>
							<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#2152a0] text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
								Feminino
							</div>
						</div>
						<p
							className="mt-6 font-semibold text-lg text-center break-words"
							style={{
								color: "#2152a0",
								fontFamily: "Poppins, sans-serif",
							}}
						>
							{result.anime.female.name}
						</p>
					</div>
				</div>

				<div
					className="bg-[#f8b12a] bg-opacity-20 rounded-xl p-6 mb-8"
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					<p className="text-[#2f52a0] text-center leading-relaxed">
						{result.description}
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href={shareUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl shadow-md text-white hover:text-white text-center"
						style={{
							backgroundColor: "#2be28a",
							fontFamily: "Poppins, sans-serif",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
						</svg>
						Compartilhar no WhatsApp
					</a>

					<button
						onClick={handleCopy}
						className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl shadow-md text-white"
						style={{
							backgroundColor: "#ed6ea7",
							fontFamily: "Poppins, sans-serif",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
						</svg>
						Copiar resultado
					</button>
				</div>

				<div className="mt-8 flex justify-center">
					<button
						onClick={() => {
							setStep(0);
							setAnswers([]);
						}}
						className="py-2 px-6 rounded-xl shadow-md font-bold transition"
						style={{
							backgroundColor: "#2f52a0",
							color: "white",
							fontFamily: "Poppins, sans-serif",
						}}
					>
						Jogar de novo
					</button>
				</div>
			</div>
		</div>
	);
}
