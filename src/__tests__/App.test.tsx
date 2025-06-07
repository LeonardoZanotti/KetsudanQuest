import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { questions, leadershipTypes } from "../data";

const targetType = questions[0].options[0].type;
const leadershipType = leadershipTypes[targetType].type;

describe("Katsudan Quest full flow", () => {
	it(`should show result for leadership type "${leadershipType}" when always selecting it`, async () => {
		render(<App />);

		const startButton = screen.getByRole("button", { name: /começar/i });
		fireEvent.click(startButton);

		for (let i = 0; i < questions.length; i++) {
			const currentQuestion = questions[i];
			const option = currentQuestion.options.find(
				(opt) => opt.type === targetType
			);
			let button;
			if (option) {
				button = await screen.findByRole("button", {
					name: option.text,
				});
			} else {
				const allButtons = await screen.findAllByRole("button");
				button = allButtons[0];
			}
			fireEvent.click(button);
		}

		const resultHeading = await screen.findByRole("heading", {
			name: new RegExp(leadershipType, "i"),
		});

		expect(resultHeading).toBeInTheDocument();
	});
});
