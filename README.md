# React Portfolio

Personal developer portfolio built with React and Vite, showcasing my skills, work, and background.

🌐 **Live Site:** [https://imamulkadir.vercel.app/](https://imamulkadir.vercel.app/)

![Portfolio Demo](./src/assets/portfolio.gif)

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [License](#license)

---

## About

This portfolio is a clean, responsive, and theme-aware React application that demonstrates various UI sections including:

- About
- Experience
- Education
- Projects
- Certifications
- Publications
- Skills
- Footer

Built with a focus on minimal design, accessible patterns, and dark/light theme support.

---

## Tech Stack

Built using modern frontend tools and best practices:

- React (with functional components & hooks)
- Vite for fast development environment
- CSS with custom properties (`--bg`, `--text`, `--accent`,`--font`,`--accentMuted`) for theming
- Deployed via Vercel

---

## Features

- **Dark / Light Theme Toggle** — Switches theme with CSS variables.
- **Responsive Layouts** — Sections collapse gracefully for mobile viewport.
- **Dynamic Content** — Data (experience, education, projects, etc.) managed via JSON-like objects for easy updates.
- **Downloadable Resume** — Built-in CV download link in the header.
- **Project Links** — GitHub and live links available for each project.
- **Certificate View Buttons** — View certifications directly.
- **Footer** — Auto-update current year and includes social links.

---

## Installation

To run the project locally:

```bash
git clone https://github.com/imamulkadir/React_Portfolio.git
cd React_Portfolio
npm install
npm run dev
```

- Navigate to `http://localhost:5173` in your browser to view the portfolio.
- To create a build for deployment:

---

## Project Structure

```
src/
├── assets/ # Images, logos, and static assets
├── components/
│ ├── Header/
│ ├── Experience/
│ ├── Education/
│ ├── Projects/
│ ├── Certifications/
│ ├── Publications/
│ ├── Skills/
│ └── Footer/
├── data.js # All dynamic content (arrays of objects)
├── App.jsx # App entry and layout orchestration
└── index.css # Global styles and theme variables
```

---

## License

This project is **MIT licensed** — feel free to reuse or modify for your own portfolio. Thanks for visiting!
