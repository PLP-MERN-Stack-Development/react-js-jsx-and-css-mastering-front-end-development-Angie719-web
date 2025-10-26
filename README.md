# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
🎨 React.js, JSX, and Tailwind CSS – Mastering Front-End Development

🚀 Project Overview

This project is a fully functional, responsive Single Page Application (SPA) built with React, leveraging modern features like Hooks, Context API, and a custom hook for state management. Styling is handled exclusively by Tailwind CSS, including a full light/dark theme switcher and responsive breakpoints.

The application serves two primary functions: a persistent Task Manager and an API Data Viewer with advanced features like infinite scrolling.

✨ Features Implemented

This application successfully fulfills all core objectives of the assignment:

1. Component Architecture & Reusability

Reusable UI: Dedicated components for Button, Card, Navbar, and Footer using props for customizability.

Layout: A main Layout component wraps all pages with the persistent navigation and footer.

2. State Management and Hooks

Task Manager (/): Full CRUD operations (Create, Read, Update, Delete) for tasks.

Persistence: Uses a Custom Hook (useLocalStorage.js) to save and load tasks across browser sessions.

Theming: Implemented a full light/dark mode using useContext (ThemeContext) and Tailwind CSS's dark: modifier.

Filtering: Tasks can be filtered by All, Active, and Completed status using useState.

3. API Integration

Data Fetching (/posts): Fetches mock data (posts) from the JSONPlaceholder API.

Infinite Scrolling: Uses the Intersection Observer API within the Custom Hook (usePosts.js) to load more data as the user scrolls, improving performance.

Status Handling: Implements clear Loading and Error states.

Search: Includes a search feature to filter the displayed posts client-side.

🛠️ Technology Stack. 
Category       Technology.            Purpose

Framework.     React 18+           Component-based UI development

Build Tool.     Vite.             Fast development environment

Styling.     Tailwind CSS (v3).     Utility-first CSS framework

Routing.      React Router DOM (v6).   Declarative routing

Data Source.    JSONPlaceholder.         Public mock REST API

📂 Project Structure

src/
├── api/                  # Functions for external data fetching
├── components/
│   ├── ui/               # Reusable UI primitives (Button, Card)
│   ├── layouts/          # Structural components (Navbar, Footer, Layout)
│   ├── tasks/            # Feature-specific components (TaskItem, TaskForm)
│   └── theme/            # Theme Switcher component
├── context/              # Global state management (ThemeContext)
├── hooks/                # Custom reusable hooks (useLocalStorage, usePosts)
├── pages/                # Route-level components (HomePage, PostsPage)
├── App.jsx               # Application router setup
└── main.jsx              # Entry point (Context providers, Router)


⚙️ Installation and Setup

Prerequisites

Node.js (v18 or higher recommended)

npm (or yarn/pnpm)

Steps to Run

Navigate to the project directory:

cd react-task-manager


Install Dependencies:

npm install


Start the Development Server:

npm run dev


The application will typically be available at the address displayed in your terminal (e.g., http://localhost:5173).