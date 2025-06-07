import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";
import { questions, leadershipTypes } from "../data";

// Utility to check if any heading includes expected type
function headingIncludes(text: string) {
	return async () => {
		const headings = await screen.findAllByRole("heading");
		const matched = headings.some((h) =>
			h.textContent?.toLowerCase().includes(text.toLowerCase())
		);
		expect(matched).toBe(true);
	};
}

describe("Katsudan Quest - all leadership types", () => {
	for (const targetType in leadershipTypes) {
		const leadershipType = leadershipTypes[targetType].type;

		it(`should show result for leadership type "${leadershipType}"`, async () => {
			render(<App />);

			const startButton = screen.getByRole("button", {
				name: /começar/i,
			});
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

			await headingIncludes(leadershipType)();
			cleanup(); // Clean up between tests
		});
	}
});
