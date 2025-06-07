# Anime Líder - Anime Leadership Quiz 🎌✨

![App Screenshot](./src/assets/anime_lider.png)

Discover your anime leadership style with this interactive quiz! Answer questions to find out which anime character matches your leadership type, complete with descriptions and shareable results.

## Features 🌟

-   **Anime-themed leadership assessment** - 10+ personality questions
-   **Beautiful UI** - Gradient backgrounds & smooth animations
-   **Character matching** - Get matched with iconic anime characters
-   **Shareable results** - Copy or share via WhatsApp
-   **Mobile-friendly** - Responsive Tailwind CSS design
-   **Interactive buttons** - Framer Motion animations

## Technologies Used 🛠️

-   React + TypeScript + Vite
-   Tailwind CSS (with gradient backgrounds)
-   Framer Motion (for animations)

## Installation & Setup 🚀

### Prerequisites

-   Node.js (v16+ recommended)
-   npm/yarn/pnpm

### 1. Clone the repository

```bash
git clone https://github.com/LeonardoZanotti/KetsudanQuest.git
cd katsudan-quest
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will open at <http://localhost:5173>

### 4. Build for production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Project Structure 📁

```text
katsudan-quest/
├── src/
│   ├── assets/            # Images and logos
│   ├── data.ts            # Questions and leadership types data
│   ├── App.tsx            # Main application component
│   └── App.css            # Additional CSS styles
├── public/
├── index.html
├── vite.config.js
└── package.json
```

### Data Structure (Customization Guide) 📝

Edit src/data.ts to modify:

-   Questions and options
-   Leadership type definitions
-   Anime character matches
-   Result descriptions

Example data structure:

```ts
export const questions: Question[] = [
	{
		id: 1,
		question: "When your team faces a problem...",
		options: [
			{ id: 1, text: "Take charge immediately", type: "shonen" },
			{ id: 2, text: "Analyze carefully first", type: "strategist" },
		],
	},
	// ...more questions
];

export const leadershipTypes: Record<string, LeadershipType> = {
	shonen: {
		type: "Shonen Hero",
		description: "You charge ahead with determination!",
		anime: {
			name: "Naruto Uzumaki",
			img: "/naruto.png",
		},
	},
	// ...more types
};
```

### Deployment 📦

**Vercel (Recommended)**

-   Push to GitHub/GitLab
-   Import project at vercel.com
-   Configure as Vite/React project

**Netlify**

-   Push to GitHub
-   New site from Git → Select repo
-   Build command: npm run build
-   Publish directory: dist

### Customization 🎨

**Change colors**: Modify the gradient classes in App.tsx:

```jsx
bg-gradient-to-br from-purple-700 via-pink-600 to-red-600
```

Add animations: Edit Framer Motion props like:

```jsx
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}
```

### Contributing 🤝

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

> Made with by Leonardo Zanotti for an anime event
