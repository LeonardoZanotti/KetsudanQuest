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

describe("Anime Líder - all leadership types", () => {
	for (const targetType in leadershipTypes) {
		const leadershipType = leadershipTypes[targetType].type;
		const maleCharacter = leadershipTypes[targetType].anime.male;
		const femaleCharacter = leadershipTypes[targetType].anime.female;

		it(`should show correct characters for "${leadershipType}" style`, async () => {
			render(<App />);

			// Start the quiz
			const startButton = screen.getByRole("button", {
				name: /começar/i,
			});
			fireEvent.click(startButton);

			// Answer all questions with the target leadership type
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

			// Verify leadership style is shown
			await headingIncludes(leadershipType)();

			// Verify male character is displayed correctly
			const maleName = await screen.findByText(maleCharacter.name);
			expect(maleName).toBeInTheDocument();

			const maleImage = screen.getByAltText(maleCharacter.name);
			expect(maleImage).toHaveAttribute("src", maleCharacter.img);

			// Verify female character is displayed correctly
			const femaleName = await screen.findByText(femaleCharacter.name);
			expect(femaleName).toBeInTheDocument();

			const femaleImage = screen.getByAltText(femaleCharacter.name);
			expect(femaleImage).toHaveAttribute("src", femaleCharacter.img);

			cleanup();
		});
	}
});
