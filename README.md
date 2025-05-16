Blog Corporativo

A modern, responsive corporate blog built with React, Vite, and Tailwind CSS. This project leverages a component-driven architecture, animations with Framer Motion, and routing with React Router. It is designed for scalability and maintainability, with a focus on clean code and developer experience.

Table of Contents

Features

Tech Stack

Getting Started

Prerequisites

Installation

Scripts

Project Structure

Dependencies

Contributing

License

Features

Fast Development: Powered by Vite for a blazing-fast development experience.

Responsive Design: Styled with Tailwind CSS for a mobile-first, responsive UI.

Dynamic Routing: Managed with React Router for seamless navigation.

Animations: Enhanced with Framer Motion and Tailwind CSS animations.

Linting & Code Quality: Configured with ESLint for consistent code standards.

Component Library: Utilizes Radix UI and Lucide React for accessible components and icons.

Tech Stack

Frontend: React 19, React Router, Tailwind CSS

Build Tool: Vite

Animations: Framer Motion, Tailwind CSS Animate

Linting: ESLint with React Hooks and Refresh plugins

Styling Utilities: Class Variance Authority, Tailwind Merge

Icons: Lucide React

TypeScript: For type-safe development

Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v18 or higher)

npm (v9 or higher) or pnpm/yarn

A modern browser (e.g., Chrome, Firefox)

Installation

Clone the repository:

bash

Copiar

git clone https://github.com/your-username/blog-corporativo.git

cd blog-corporativo

Install dependencies:

bash

Copiar

npm install

Start the development server:

bash

Copiar

npm run dev

The app will be available at http://localhost:5173 (or another port if specified).

Scripts

Run the following commands in the project root:

npm run dev: Starts the development server with Vite.

npm run build: Builds the app for production (output in /dist).

npm run lint: Runs ESLint to check for code quality issues.

npm run preview: Previews the production build locally.

Project Structure

bash

Copiar

blog-corporativo/

├── node_modules/ # Project dependencies

├── paginaSistemas/ # Custom directory (purpose TBD)

├── public/ # Static assets (e.g., images, favicon)

├── src/ # Source code (React components, pages, styles)

├── .gitignore # Files/folders to ignore in Git

├── components.json # Component configuration (if using a component library)

├── eslint.config.js # ESLint configuration

├── index.html # Entry HTML file

├── package.json # Project metadata and dependencies

├── package-lock.json # Dependency lock file

├── postcss.config.js # PostCSS configuration (for Tailwind)

├── README.md # Project documentation

├── tailwind.config.js # Tailwind CSS configuration

├── tsconfig.json # TypeScript configuration

├── vite.config.js # Vite configuration

Dependencies

Production Dependencies

@radix-ui/react-slot: Accessible component primitives.

clsx: Utility for constructing className strings.

framer-motion: Animation library for React.

react, react-dom: Core React libraries.

react-router-dom: Declarative routing for React.

tailwind-merge: Utility for merging Tailwind classes.

Development Dependencies

@eslint/js, eslint: Linting tools for code quality.

@types/react, @types/react-dom: TypeScript types for React.

@vitejs/plugin-react: Vite plugin for React support.

autoprefixer, postcss: PostCSS tools for CSS processing.

class-variance-authority: Utility for variant-based styling.

eslint-plugin-react-hooks, eslint-plugin-react-refresh: ESLint plugins for React.

globals: Shared ESLint globals.

lucide-react: Icon library for React.

tailwindcss, tailwindcss-animate, tw-animate-css: Tailwind CSS and animation utilities.

vite: Next-generation frontend tooling.

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a feature branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m "Add your feature").

Push to the branch (git push origin feature/your-feature).

Open a pull request.

Please ensure your code follows the ESLint rules and is well-documented.

License

This project is licensed under the MIT License. See the LICENSE file for details.

This README.md provides a clear and professional overview of your project. Let me know if you'd like to adjust the tone, add specific sections, or include details about the paginaSistemas directory or other aspects!
